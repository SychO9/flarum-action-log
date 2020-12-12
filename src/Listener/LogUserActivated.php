<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\User\Event\Activated;
use Flarum\User\User;

/**
 * Class LogUserActivated
 * @package SychO\ActionLog\Listener
 *
 * @see Activated
 */
class LogUserActivated extends AbstractUserAction
{
    /**
     * @var string
     */
    protected $name = 'activated';

    /**
     * @var string
     */
    protected $type = 'moderation';

    /**
     * @var string
     */
    protected $resource_type = 'user';

    /**
     * {@inheritDoc}
     */
    protected function getActor($event): ?User
    {
        $actor = parent::getActor($event);

        if (! $actor && $event->user) {
            $actor = $event->user;
        }

        return $actor;
    }
}
