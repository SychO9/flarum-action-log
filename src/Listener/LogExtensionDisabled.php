<?php

/**
 * @package Flarum Logs
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Extension\Event\Disabled;

/**
 * Class LogExtensionDisabled
 * @package SychO\FlarumLogs\Listener
 *
 * @see Disabled
 */
class LogExtensionDisabled extends AbstractExtensionAction
{
    /**
     * @var string
     */
    protected $name = 'disabled';

    /**
     * @var string
     */
    protected $type = 'administration';

    /**
     * @var string
     */
    protected $resource_type = 'extension';
}
