<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Suspend\Event\Suspended;

/**
 * Class LogUserSuspended
 * @package SychO\ActionLog\Listener
 *
 * @see Suspended
 */
class LogUserSuspended extends AbstractUserAction
{
    /**
     * @var string
     */
    protected $name = 'suspended';

    /**
     * @var string
     */
    protected $type = 'moderation';

    /**
     * @var string
     */
    protected $resource_type = 'user';
}
