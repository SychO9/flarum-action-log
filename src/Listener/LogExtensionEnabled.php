<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Extension\Event\Enabled;

/**
 * Class LogExtensionEnabled
 * @package SychO\ActionLog\Listener
 *
 * @see Enabled
 */
class LogExtensionEnabled extends AbstractExtensionAction
{
    /**
     * @var string
     */
    protected $name = 'enabled';

    /**
     * @var string
     */
    protected $type = 'administration';

    /**
     * @var string
     */
    protected $resource_type = 'extension';
}
