<?php

/**
 * @package Flarum Logs
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

abstract class AbstractExtensionAction extends AbstractLogger
{
    /**
     * @inheritDoc
     */
    protected function details($event): array
    {
        return [
            'extension' => [
                'name'      => $event->extension->name,
                'version'   => $event->extension->getVersion(),
                'icon'      => $event->extension->getIcon(),
            ],
        ];
    }
}