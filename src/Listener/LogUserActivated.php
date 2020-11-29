<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\User\Event\Activated;

/**
 * Class LogUserActivated
 * @package SychO\ActionLog\Listener
 *
 * @see Activated
 */
class LogUserActivated extends AbstractUserAction
{
    /**
     * @var string
     */
    protected $name = 'activated';

    /**
     * @var string
     */
    protected $type = 'moderation';

    /**
     * @var string
     */
    protected $resource_type = 'user';
}
