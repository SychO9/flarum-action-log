<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Event;

use SychO\ActionLog\Search\ActionLogSearch;
use Flarum\Search\SearchCriteria;

class Searching
{
    /**
     * @var ActionLogSearch
     */
    public $search;

    /**
     * @var \Flarum\Search\SearchCriteria
     */
    public $criteria;

    /**
     * @param ActionLogSearch $search
     * @param \Flarum\Search\SearchCriteria $criteria
     */
    public function __construct(ActionLogSearch $search, SearchCriteria $criteria)
    {
        $this->search = $search;
        $this->criteria = $criteria;
    }
}
