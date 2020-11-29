<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Lock\Event\DiscussionWasLocked;

/**
 * Class LogDiscussionLocked
 * @package SychO\ActionLog\Listener
 *
 * @see DiscussionWasLocked
 */
class LogDiscussionLocked extends AbstractDiscussionAction
{
    /**
     * @var string
     */
    protected $name = 'locked';

    /**
     * @var string
     */
    protected $type = 'moderation';

    /**
     * @var string
     */
    protected $resource_type = 'discussion';
}
