<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Discussion\Event\Deleted;

/**
 * Class LogDiscussionDeleted
 * @package SychO\ActionLog\Listener
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
