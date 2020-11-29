<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Search;

use SychO\ActionLog\ActionLogEntry;
use SychO\ActionLog\Event\Searching;
use Flarum\Search\ApplySearchParametersTrait;
use Flarum\Search\GambitManager;
use Flarum\Search\SearchCriteria;

class ActionLogSearcher
{
    use ApplySearchParametersTrait;

    /**
     * @var GambitManager
     */
    protected $gambits;

    /**
     * @param GambitManager $gambits
     */
    public function __construct(GambitManager $gambits)
    {
        $this->gambits = $gambits;
    }

    /**
     * @param SearchCriteria $criteria
     * @param int|null $limit
     * @param int $offset
     * @param array $load An array of relationships to load on the results.
     * @return SearchResults
     */
    public function search(SearchCriteria $criteria, $limit = null, $offset = 0, array $load = [])
    {
        $actor = $criteria->actor;

        $query = ActionLogEntry::query();

        // Construct an object which represents this search for users.
        // Apply gambits to it, sort, and paging criteria. Also give extensions
        // an opportunity to modify it.
        $search = new ActionLogSearch($query->getQuery(), $actor);

        $this->gambits->apply($search, $criteria->query);

        $count = $query->count();

        $this->applySort($search, $criteria->sort);
        $this->applyOffset($search, $offset);
        $this->applyLimit($search, $limit);

        event(new Searching($search, $criteria));

        // Execute the search query and retrieve the results.
        // And prepare the dynamically set relationships
        $entries = ActionLogEntry::prepareRelationships(
            $query->get()
        );

        $entries->load($load);

        return new SearchResults($entries, $count);
    }
}
