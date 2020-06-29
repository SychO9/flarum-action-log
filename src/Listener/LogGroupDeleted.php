<?php

/**
 * @package Flarum Logs
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Group\Event\Deleted;

/**
 * Class LogGroupDeleted
 * @package SychO\FlarumLogs\Listener
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
