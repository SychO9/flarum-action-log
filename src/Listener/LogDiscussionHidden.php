<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Discussion\Event\Hidden;

/**
 * Class LogDiscussionHidden
 * @package SychO\ActionLog\Listener
 *
 * @see Hidden
 */
class LogDiscussionHidden extends AbstractDiscussionAction
{
    /**
     * @var string
     */
    protected $name = 'hidden';

    /**
     * @var string
     */
    protected $type = 'moderation';

    /**
     * @var string
     */
    protected $resource_type = 'discussion';
}
