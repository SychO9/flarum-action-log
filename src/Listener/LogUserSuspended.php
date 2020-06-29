<?php

/**
 * @package Flarum Logs
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Suspend\Event\Suspended;

/**
 * Class LogUserSuspended
 * @package SychO\FlarumLogs\Listener
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
