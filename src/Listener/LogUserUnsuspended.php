<?php

/**
 * @package Flarum Logs
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Suspend\Event\Unsuspended;

/**
 * Class LogUserUnsuspended
 * @package SychO\FlarumLogs\Listener
 *
 * @see Unsuspended
 */
class LogUserUnsuspended extends AbstractUserAction
{
    /**
     * @var string
     */
    protected $name = 'unsuspended';

    /**
     * @var string
     */
    protected $type = 'moderation';

    /**
     * @var string
     */
    protected $resource_type = 'user';
}
