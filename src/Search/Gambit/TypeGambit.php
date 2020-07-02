<?php



namespace SychO\ActionLog\Search\Gambit;

use SychO\ActionLog\Search\ActionLogSearch;
use Flarum\Search\AbstractRegexGambit;
use Flarum\Search\AbstractSearch;
use LogicException;

class TypeGambit extends AbstractRegexGambit
{
    /**
     * @inheritDoc
     */
    protected $pattern = 'type:(.+)';

    /**
     * {@inheritdoc}
     */
    protected function conditions(AbstractSearch $search, array $matches, $negate)
    {
        if (! $search instanceof ActionLogSearch) {
            throw new LogicException('This gambit can only be applied on a ActionLogSearch');
        }

        $search->getQuery()->where('type', trim($matches[1], '"'), 'and', $negate);
    }
}