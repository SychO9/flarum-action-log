<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Group\Event\Deleted;

/**
 * Class LogGroupDeleted
 * @package SychO\ActionLog\Listener
 *
 * @see Deleted
 */
class LogGroupDeleted extends AbstractGroupAction
{
    /**
     * @var string
     */
    protected $name = 'deleted';

    /**
     * @var string
     */
    protected $type = 'administration';

    /**
     * @var string
     */
    protected $resource_type = 'group';
}
