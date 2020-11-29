<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog;

use Illuminate\Database\Eloquent\Collection;

trait HasDynamicRelationships
{
    /**
     * Allows the dynamic relationships to be eager loaded
     *
     * @param Collection $entries
     * @return Collection
     */
    public static function prepareRelationships(Collection $entries): Collection
    {
        /** @var static $entry */
        foreach ($entries as $entry) {
            if (!empty($entry->resource_type)) {
                $resource_id = "{$entry->resource_type}_id";

                $entry->{$resource_id} = $entry->resource_id;
            }
        }

        return $entries;
    }

    /**
     * @param string[] $columns
     * @return Collection
     */
    public static function all($columns = ['*'])
    {
        $results = parent::all($columns);

        return static::prepareRelationships($results);
    }
}
