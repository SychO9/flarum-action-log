<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

abstract class AbstractGroupAction extends AbstractLogger
{
    /**
     * @inheritDoc
     */
    protected function details($event): array
    {
        return [
            'group' => [
                'name'          => $event->group->name_singular,
                'name_plural'   => $event->group->name_plural,
                'icon'          => [
                    'name'              => $event->group->icon,
                    'backgroundColor'   => $event->group->color,
                ],
            ],
        ];
    }
}
