<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

abstract class AbstractTagAction extends AbstractLogger
{
    /**
     * @inheritDoc
     */
    protected function details($event): array
    {
        return [
            'tag' => [
                'name' => $event->tag->name,
                'icon' => $event->tag->icon,
                'color' => $event->tag->color,
            ],
        ];
    }
}
