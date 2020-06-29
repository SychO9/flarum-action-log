<?php

/**
 * @package Flarum Logs
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Carbon\Carbon;
use Laminas\Diactoros\ServerRequest;
use SychO\ActionLog\ActionLogEntry;
use Flarum\User\User;

abstract class AbstractLogger
{
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
     * @var string
     */
    protected $actor = 'user';

    /**
     * @var ServerRequest
     */
    protected $request;

    /**
     * @param ServerRequest $request
     */
    public function __construct(ServerRequest $request)
    {
        $this->request = $request;
    }

    /**
     * @param $event
     * @return array
     */
    abstract protected function details($event): array;

    /**
     * @param $event
     */
    public function handle($event)
    {
        $entry = new ActionLogEntry();

        $entry->name = $this->name;
        $entry->type = $this->type;

        $actor = $this->getActor($event);

        if ($actor !== null) {
            $entry->actor_id = $actor->id;
        }

        if (!empty($this->resource_type)) {
            $entry->resource_type = $this->resource_type;
            $entry->resource_id = $event->{$this->resource_type}->id;
        }

        // Details about the log entry
        $entry->data = $this->details($event);

        $entry->created_at = new Carbon('now');

        $entry->save();
    }

    /**
     * @param $event
     * @return User|null
     */
    protected function getActor($event): ?User
    {
        if (!empty($this->actor) && !empty($event->{$this->actor})) {
            return $event->{$this->actor};
        }

        $requestActor = $this->request->getAttribute('actor');

        return $requestActor ?? null;
    }
}
