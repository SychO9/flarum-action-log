<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Extension\Event\Disabled;

/**
 * Class LogExtensionDisabled
 * @package SychO\ActionLog\Listener
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
