<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Group\Event\Created;

/**
 * Class LogGroupCreated
 * @package SychO\ActionLog\Listener
 *
 * @see Created
 */
class LogGroupCreated extends AbstractGroupAction
{
    /**
     * @var string
     */
    protected $name = 'created';

    /**
     * @var string
     */
    protected $type = 'administration';

    /**
     * @var string
     */
    protected $resource_type = 'group';
}
