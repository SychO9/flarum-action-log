<?php

/**
 * @package Flarum Logs
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Discussion\Event\Deleted;

/**
 * Class LogDiscussionDeleted
 * @package SychO\FlarumLogs\Listener
 *
 * @see Deleted
 */
class LogDiscussionDeleted extends AbstractDiscussionAction
{
    /**
     * @var string
     */
    protected $name = 'deleted';

    /**
     * @var string
     */
    protected $type = 'moderation';

    /**
     * @var string
     */
    protected $resource_type = 'discussion';
}
