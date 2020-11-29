<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Sticky\Event\DiscussionWasUnstickied;

/**
 * Class LogDiscussionUnstickied
 * @package SychO\ActionLog\Listener
 *
 * @see DiscussionWasUnstickied
 */
class LogDiscussionUnstickied extends AbstractDiscussionAction
{
    /**
     * @var string
     */
    protected $name = 'unstickied';

    /**
     * @var string
     */
    protected $type = 'moderation';

    /**
     * @var string
     */
    protected $resource_type = 'discussion';
}
