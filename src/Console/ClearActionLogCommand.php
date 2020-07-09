<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Console;

use SychO\ActionLog\ActionLogEntry;
use Flarum\Console\AbstractCommand;

class ClearActionLogCommand extends AbstractCommand
{
    /**
     * @inheritDoc
     */
    protected function configure()
    {
        $this
            ->setName('sycho:clear-actionlog')
            ->setDescription('Clears the action log of all entries.');
    }

    /**
     * @inheritDoc
     */
    protected function fire()
    {
        $this->info('Clearing the action log...');

        ActionLogEntry::getQuery()->delete();
    }
}
