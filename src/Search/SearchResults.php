<?php

/**
 * @package Flarum Logs
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Search;

use Flarum\Search\SearchResults as BaseSearchResults;
use Illuminate\Database\Eloquent\Collection;

class SearchResults extends BaseSearchResults
{
    /**
     * @var int
     */
    protected $count;

    /**
     * @param Collection $results
     * @param bool $areMoreResults
     */
    public function __construct(Collection $results, int $count)
    {
        parent::__construct($results, false);

        $this->count = $count;
    }

    /**
     * @return int
     */
    public function getCount(): int
    {
        return $this->count;
    }
}
