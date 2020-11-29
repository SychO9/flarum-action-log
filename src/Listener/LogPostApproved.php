<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Approval\Event\PostWasApproved;

/**
 * Class LogPostApproved
 * @package SychO\ActionLog\Listener
 *
 * @see PostWasApproved
 */
class LogPostApproved extends AbstractPostAction
{
    /**
     * @var string
     */
    protected $name = 'approved';

    /**
     * @var string
     */
    protected $type = 'moderation';

    /**
     * @var string
     */
    protected $resource_type = 'post';
}
