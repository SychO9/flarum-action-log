<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Job;

use Carbon\Carbon;
use Flarum\Foundation\DispatchEventsTrait;
use Flarum\Queue\AbstractJob;
use Flarum\User\User;
use Illuminate\Contracts\Events\Dispatcher;
use SychO\ActionLog\ActionLogEntry;

class LogActionJob extends AbstractJob
{
    use DispatchEventsTrait;

    /**
     * @var Carbon
     */
    private $time;

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $type;

    /**
     * @var array
     */
    private $data;

    /**
     * @var User|null
     */
    private $actor;

    /**
     * @var string|null
     */
    private $resource_type;

    /**
     * @var string|null
     */
    private $resource_id;

    /**
     * @param Carbon $time
     * @param string $name
     * @param string $type
     * @param array $data
     * @param User|null $actor
     * @param string|null $resource_type
     * @param string|null $resource_id
     */
    public function __construct(Carbon $time, string $name, string $type, array $data, ?User $actor, ?string $resource_type, ?string $resource_id)
    {
        $this->time = $time;
        $this->name = $name;
        $this->type = $type;
        $this->data = $data;
        $this->actor = $actor;
        $this->resource_type = $resource_type;
        $this->resource_id = $resource_id;
    }

    public function handle(Dispatcher $events)
    {
        $this->events = $events;

        $entry = ActionLogEntry::build(
            $this->time,
            $this->name,
            $this->type,
            $this->data,
            $this->actor,
            $this->resource_type,
            $this->resource_id
        );

        $this->dispatchEventsFor($entry, $this->actor);

        $entry->save();
    }
}
