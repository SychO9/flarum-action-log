<?php

/**
 * @package Flarum Logs
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
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
                'id' => $event->post->user->id,
                'name' => $event->post->user->display_name,
            ],
        ];
    }
}
