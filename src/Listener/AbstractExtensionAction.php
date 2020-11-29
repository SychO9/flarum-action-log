<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
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
