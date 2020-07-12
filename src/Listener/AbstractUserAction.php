<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
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
