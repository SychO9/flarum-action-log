<?php

/**
 * @package Flarum Logs
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Sticky\Event\DiscussionWasUnstickied;

/**
 * Class LogDiscussionUnstickied
 * @package SychO\FlarumLogs\Listener
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
