<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Sticky\Event\DiscussionWasStickied;

/**
 * Class LogDiscussionStickied
 * @package SychO\ActionLog\Listener
 *
 * @see DiscussionWasStickied
 */
class LogDiscussionStickied extends AbstractDiscussionAction
{
    /**
     * @var string
     */
    protected $name = 'stickied';

    /**
     * @var string
     */
    protected $type = 'moderation';

    /**
     * @var string
     */
    protected $resource_type = 'discussion';
}
