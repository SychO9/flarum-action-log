<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Extension\Event\Uninstalled;

/**
 * Class LogExtensionUninstalled
 * @package SychO\ActionLog\Listener
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
