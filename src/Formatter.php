<?php

/**
 * @package Flarum Logs
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog;

use Flarum\Database\AbstractModel;
use Flarum\Http\UrlGenerator;

class Formatter
{
    /**
     * @var UrlGenerator
     */
    protected $url;

    /**
     * @var ActionLogEntry
     */
    protected $entry;

    /**
     * @param UrlGenerator $url
     * @param ActionLogEntry $entry
     */
    public function __construct(UrlGenerator $url, ActionLogEntry $entry)
    {
        $this->url = $url;
        $this->entry = $entry;
    }

    public function getParameters(): array
    {
        $parameters = [];
        $resource_type = $this->entry->resource_type;

        if (! empty($this->entry->$resource_type)) {
            $parameters[$resource_type]['title'] = $this->findName($resource_type, $this->entry->$resource_type);

            $link = $this->findLink($resource_type, $this->entry->$resource_type);

            if (! empty($link)) {
                $parameters[$resource_type]['link'] = $link;
            }
        }

        if (! empty($this->entry->data)) {
            $parameters = array_merge($parameters, $this->entry->data);
        }

        return $parameters;
    }

    /**
     * @param string $resourceType
     * @param AbstractModel $model
     * @return string
     */
    protected function findName(string $resourceType, AbstractModel $model): string
    {
        $possibleAttributes = ['title', 'name', 'display_name'];

        foreach ($possibleAttributes as $attribute) {
            if (! empty($model->$attribute)) {
                return $model->$attribute;
            }
        }

        if (isset($model->id)) {
            return "#{$model->id}";
        }

        return '';
    }

    /**
     * @param string $resourceType
     * @param AbstractModel $model
     * @return string
     */
    protected function findLink(string $resourceType, AbstractModel $model): string
    {
        return "";
    }
}
