<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Carbon\Carbon;
use Illuminate\Contracts\Queue\Queue;
use Laminas\Diactoros\ServerRequest;
use Flarum\User\User;
use Flarum\Settings\SettingsRepositoryInterface;
use SychO\ActionLog\Job\LogActionJob;

abstract class AbstractLogger
{
    /**
     * @var ServerRequest
     */
    public static $request;

    /**
     * @var string
     */
    protected $name;

    /**
     * @var string
     */
    protected $type;

    /**
     * @var string
     */
    protected $resource_type;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var Queue
     */
    protected $queue;

    /**
     * @var mixed
     */
    public $event;

    /**
     * @var string
     */
    protected $actor = 'user';

    /**
     * @param SettingsRepositoryInterface $settings
     * @param Queue $queue
     */
    public function __construct(SettingsRepositoryInterface $settings, Queue $queue)
    {
        $this->settings = $settings;
        $this->queue = $queue;
    }

    /**
     * @param $event
     * @return array
     */
    abstract protected function details($event): array;

    /**
     * @param mixed $event
     */
    public function handle($event): void
    {
        $this->event = $event;

        if ($this->isDisabled($this->event)) {
            return;
        }

        $this->queue->push(
            new LogActionJob(
                new Carbon('now'),
                $this->name,
                $this->type,
                $this->details($event),
                $this->getActor($event),
                $this->resource_type,
                isset($event->{$this->resource_type}) ? $event->{$this->resource_type}->id : null
            )
        );
    }

    /**
     * Checks if an admin has disabled this type of action logging
     *
     * @param mixed $event
     * @return bool
     */
    protected function isDisabled($event): bool
    {
        $actionName = "{$this->type}.{$this->resource_type}.{$this->name}";

        $excludedLogging = (array) json_decode($this->settings->get('sycho-action-log.excluded_logging'), true);

        return in_array($actionName, $excludedLogging, true);
    }

    /**
     * @param $event
     * @return User|null
     */
    protected function getActor($event): ?User
    {
        if ((! empty($this->actor)) && (! empty($event->{$this->actor}))) {
            return $event->{$this->actor};
        }

        $requestActor = self::$request->getAttribute('actor');

        return $requestActor ?? null;
    }
}
