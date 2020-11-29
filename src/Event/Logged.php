<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Event;

use SychO\ActionLog\ActionLogEntry;
use Flarum\User\User;

class Logged
{
    /**
     * @var ActionLogEntry
     */
    public $entry;

    /**
     * @var \Flarum\User\User
     */
    public $actor;

    /**
     * @param ActionLogEntry $entry
     * @param \Flarum\User\User $actor
     */
    public function __construct(ActionLogEntry $entry, User $actor)
    {
        $this->entry = $entry;
        $this->actor = $actor;
    }
}
