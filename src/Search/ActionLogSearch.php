<?php

/**
 * @package Flarum Logs
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Search;

use Flarum\Search\AbstractSearch;

class ActionLogSearch extends AbstractSearch
{
    /**
     * {@inheritdoc}
     */
    protected $defaultSort = ['createdAt' => 'desc'];
}
