<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Discussion\Event\Renamed;

/**
 * Class LogDiscussionRenamed
 * @package SychO\ActionLog\Listener
 *
 * @see Renamed
 */
class LogDiscussionRenamed extends AbstractDiscussionAction
{
    /**
     * @var string
     */
    protected $name = 'renamed';

    /**
     * @var string
     */
    protected $type = 'moderation';

    /**
     * @var string
     */
    protected $resource_type = 'discussion';

    /**
     * {@inheritDoc}
     */
    protected function details($event): array
    {
        return array_merge(parent::details($event), [
            'oldTitle' => $event->oldTitle,
        ]);
    }
}
