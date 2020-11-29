<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog;

use Flarum\Database\AbstractModel;
use Flarum\Http\UrlGenerator;
use Flarum\Http\RouteCollection;
use Exception;

class Formatter
{
    /**
     * Array of resources which can be linked to
     *
     * @var array
     */
    private const LINKABLE_RESOURCES = [
        'discussion' => [
            'route' => 'forum',
            'parameter' => 'id',
        ],
        'user' => [
            'route' => 'forum',
            'parameter' => 'username',
        ]
    ];

    /**
     * Possible attributes for a resource name
     *
     * @var array
     */
    private const NAME_KEYS = [
        'title', 'name', 'display_name'
    ];

    /**
     * @var UrlGenerator
     */
    protected $url;

    /**
     * @var RouteCollection
     */
    protected $routeCollection;

    /**
     * @var ActionLogEntry
     */
    protected $entry;

    /**
     * @param UrlGenerator $url
     * @param ActionLogEntry $entry
     */
    public function __construct(UrlGenerator $url, RouteCollection $routeCollection, ActionLogEntry $entry)
    {
        $this->url = $url;
        $this->entry = $entry;
        $this->routeCollection = $routeCollection;
    }

    public function getParameters(): array
    {
        $resourceType = $this->entry->resource_type;
        $parameters = $this->entry->data;

        if (isset($this->entry->$resourceType)) {
            $parameters[$resourceType]['id'] = $this->entry->$resourceType->id;
        }

        array_walk($parameters, function(&$item, $key) {
            $item = is_array($item) ? $this->formatResourceName($key, $item) : $item;
        });

        return $parameters;
    }

    protected function formatResourceName(string $resourceType, array $params): array
    {
        if (! empty($params['id'])) {
            $link = $this->getLink($params['type'] ?? $resourceType, $params['id']);

            if (! empty($link)) {
                $params['link'] = $link;
            }
        }

        foreach (self::NAME_KEYS as $possibleAttribute) {
            if (!empty($params[$possibleAttribute])) {
                $params['title'] = $params[$possibleAttribute];
                break;
            }
        }

        $params['title'] = $params['title'] ?? $this->getName($resourceType);

        return $params;
    }

    /**
     * @param string $resourceType
     * @return string|null
     */
    protected function getName(string $resourceType): string
    {
        $name = '';

        if (empty($this->entry->$resourceType)) {
            return $name;
        }

        foreach (self::NAME_KEYS as $attribute) {
            if (! empty($this->entry->$resourceType->$attribute)) {
                $name = $this->entry->$resourceType->$attribute;
            }
        }

        return $name;
    }

    /**
     * @param string $resourceType
     * @return string|null
     */
    protected function getLink(string $resourceType, int $id): ?string
    {
        if (! isset(self::LINKABLE_RESOURCES[$resourceType])) {
            return null;
        }

        try {
            $link = $this->url
                ->to(self::LINKABLE_RESOURCES[$resourceType]['route'])
                ->route($resourceType, [self::LINKABLE_RESOURCES[$resourceType]['parameter'] => $id]);
        } catch (Exception $e) {
            $link = "";
        }

        return $link;
    }
}
