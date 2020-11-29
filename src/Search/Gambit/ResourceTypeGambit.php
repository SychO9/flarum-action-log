<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Search\Gambit;

use SychO\ActionLog\Search\ActionLogSearch;
use Flarum\Search\AbstractRegexGambit;
use Flarum\Search\AbstractSearch;
use LogicException;

class ResourceTypeGambit extends AbstractRegexGambit
{
    /**
     * @inheritDoc
     */
    protected $pattern = 'resource:(.+)';

    /**
     * {@inheritdoc}
     */
    protected function conditions(AbstractSearch $search, array $matches, $negate)
    {
        if (! $search instanceof ActionLogSearch) {
            throw new LogicException('This gambit can only be applied on a ActionLogSearch');
        }

        $search->getQuery()->where('resource_type', $negate ? '!=' : '=', trim($matches[1], '"'), 'and');
    }
}
