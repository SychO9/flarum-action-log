<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Serializer;

use SychO\ActionLog\ActionLogEntry;
use Flarum\Api\Serializer\BasicDiscussionSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Api\Serializer\GroupSerializer;
use Flarum\Api\Serializer\PostSerializer;
use Flarum\Api\Serializer\AbstractSerializer;
use InvalidArgumentException;

class ActionLogEntrySerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'action-log-entries';

    /**
     * @inheritDoc
     */
    protected function getDefaultAttributes($entry)
    {
        if (! ($entry instanceof ActionLogEntry)) {
            throw new InvalidArgumentException(
                get_class($this).' can only serialize instances of '.ActionLogEntry::class
            );
        }

        return [
            'id' => $entry->id,
            'name' => $entry->name,
            'type' => $entry->type,
            'resource_type' => $entry->resource_type,
            'resource_id' => $entry->resource_id,
            'created_at' => $entry->created_at,
            'format' => $entry->getFormat()
        ];
    }

    /**
     * @param $entry
     * @return \Tobscure\JsonApi\Relationship
     */
    protected function actor($entry)
    {
        return $this->hasOne($entry, BasicUserSerializer::class);
    }

    /**
     * @param $entry
     * @return \Tobscure\JsonApi\Relationship
     */
    protected function discussion($entry)
    {
        return $this->hasOne($entry, BasicDiscussionSerializer::class);
    }

    /**
     * @param $entry
     * @return \Tobscure\JsonApi\Relationship
     */
    protected function post($entry)
    {
        return $this->hasOne($entry, PostSerializer::class);
    }

    /**
     * @param $entry
     * @return \Tobscure\JsonApi\Relationship
     */
    protected function group($entry)
    {
        return $this->hasOne($entry, GroupSerializer::class);
    }

    /**
     * @param $entry
     * @return \Tobscure\JsonApi\Relationship
     */
    protected function user($entry)
    {
        return $this->hasOne($entry, BasicUserSerializer::class);
    }
}
