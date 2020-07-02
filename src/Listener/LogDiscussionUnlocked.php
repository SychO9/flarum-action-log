<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Lock\Event\DiscussionWasUnlocked;

/**
 * Class LogDiscussionUnlocked
 * @package SychO\ActionLog\Listener
 *
 * @see DiscussionWasUnlocked
 */
class LogDiscussionUnlocked extends AbstractDiscussionAction
{
    /**
     * @var string
     */
    protected $name = 'unlocked';

    /**
     * @var string
     */
    protected $type = 'moderation';

    /**
     * @var string
     */
    protected $resource_type = 'discussion';
}
