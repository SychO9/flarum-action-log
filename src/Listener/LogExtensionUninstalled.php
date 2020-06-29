<?php

/**
 * @package Flarum Logs
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Extension\Event\Uninstalled;

/**
 * Class LogExtensionUninstalled
 * @package SychO\FlarumLogs\Listener
 *
 * @see Uninstalled
 */
class LogExtensionUninstalled extends AbstractExtensionAction
{
    /**
     * @var string
     */
    protected $name = 'uninstalled';

    /**
     * @var string
     */
    protected $type = 'administration';

    /**
     * @var string
     */
    protected $resource_type = 'extension';
}
