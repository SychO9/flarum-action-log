<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Discussion\Event\Restored;

/**
 * Class LogDiscussionRestored
 * @package SychO\ActionLog\Listener
 *
 * @see Restored
 */
class LogDiscussionRestored extends AbstractDiscussionAction
{
    /**
     * @var string
     */
    protected $name = 'restored';

    /**
     * @var string
     */
    protected $type = 'moderation';

    /**
     * @var string
     */
    protected $resource_type = 'discussion';
}
