<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Suspend\Event\Unsuspended;

/**
 * Class LogUserUnsuspended
 * @package SychO\ActionLog\Listener
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
