<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Search\Gambit;

use SychO\ActionLog\Search\ActionLogSearch;
use Flarum\Search\AbstractRegexGambit;
use Flarum\Search\AbstractSearch;
use Flarum\User\UserRepository;
use LogicException;

class ActorGambit extends AbstractRegexGambit
{
    /**
     * @inheritDoc
     */
    protected $pattern = 'actor:(.+)';

    /**
     * @var \Flarum\User\UserRepository
     */
    protected $users;

    /**
     * @param \Flarum\User\UserRepository $users
     */
    public function __construct(UserRepository $users)
    {
        $this->users = $users;
    }

    /**
     * {@inheritdoc}
     */
    protected function conditions(AbstractSearch $search, array $matches, $negate)
    {
        if (! $search instanceof ActionLogSearch) {
            throw new LogicException('This gambit can only be applied on a ActionLogSearch');
        }

        $usernames = trim($matches[1], '"');
        $usernames = explode(',', $usernames);

        $ids = [];
        foreach ($usernames as $username) {
            $ids[] = $this->users->getIdForUsername($username);
        }

        $search->getQuery()->whereIn('actor_id', $ids, 'and', $negate);
    }
}
