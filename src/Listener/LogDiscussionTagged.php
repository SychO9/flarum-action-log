<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Tags\Event\DiscussionWasTagged;
use Flarum\Tags\Tag;
use Illuminate\Support\Collection;

/**
 * Class LogDiscussionTagged
 * @package SychO\ActionLog\Listener
 *
 * @see DiscussionWasTagged
 */
class LogDiscussionTagged extends AbstractDiscussionAction
{
    /**
     * @var string
     */
    protected $name = 'tagged';

    /**
     * @var string
     */
    protected $type = 'moderation';

    /**
     * @var string
     */
    protected $resource_type = 'discussion';

    /**
     * @inheritDoc
     */
    protected function details($event): array
    {
        $oldTags = new Collection($event->oldTags);

        return array_merge(parent::details($event), [
            'tags' => [
                'type' => 'tag',
                'items' => $this->getTagsDiff($event->discussion->tags, $oldTags),
            ],
            'oldTags' => [
                'type' => 'tag',
                'items' => $this->getTagsDiff($oldTags, $event->discussion->tags),
            ],
        ]);
    }

    /**
     * @param Collection $firstTags
     * @param Collection $secondTags
     * @return array
     */
    protected function getTagsDiff(Collection $firstTags, Collection $secondTags): array
    {
        $tags = $firstTags->filter(function (Tag $value, $key) use ($secondTags) {
            return !$secondTags->contains('id', $value->id);
        });

        return $tags->map->only(['id', 'name', 'color', 'icon'])->toArray();
    }
}
