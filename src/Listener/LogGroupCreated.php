<?php

/**
 * @package Flarum Logs
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Group\Event\Created;

/**
 * Class LogGroupCreated
 * @package SychO\FlarumLogs\Listener
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
