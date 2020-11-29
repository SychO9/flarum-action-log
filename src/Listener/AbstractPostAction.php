<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

abstract class AbstractPostAction extends AbstractLogger
{
    /**
     * @inheritDoc
     */
    protected function details($event): array
    {
        return [
            'discussion' => [
                'id' => $event->post->discussion->id,
                'title' => $event->post->discussion->title,
            ],
            'author' => [
                'type' => 'user',
                'id' => $event->post->user->id,
                'name' => $event->post->user->display_name,
            ],
        ];
    }
}
