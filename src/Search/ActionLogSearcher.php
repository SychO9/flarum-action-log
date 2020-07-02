<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Search;

use SychO\ActionLog\ActionLogEntry;
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
        $this->applySort($search, $criteria->sort);
        $this->applyOffset($search, $offset);
        $this->applyLimit($search, $limit + 1);

        // @TODO add event
        // event(new Searching($search, $criteria));

        // Execute the search query and retrieve the results.
        // And prepare the dynamically set relationships
        $entries = ActionLogEntry::prepareRelationships(
            $query->get()
        );

        $entries->load($load);

        return new SearchResults($entries, $query->count());
    }
}
