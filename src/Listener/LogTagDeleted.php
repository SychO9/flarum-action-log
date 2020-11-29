<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Tags\Event\Deleting;

/**
 * Class LogTagDeleted
 * @package SychO\ActionLog\Listener
 *
 * @see Deleting
 */
class LogTagDeleted extends AbstractTagAction
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
    protected $resource_type = 'tag';
}
