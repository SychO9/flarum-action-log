<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

class AbstractUserAction extends AbstractLogger
{
    /**
     * @var string
     */
    protected $actor = 'actor';

    /**
     * @inheritDoc
     */
    protected function details($event): array
    {
        return [
            'user' => [
                'name' => $event->user->display_name,
            ],
        ];
    }
}
