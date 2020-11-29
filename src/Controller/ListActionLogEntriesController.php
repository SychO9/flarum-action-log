<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Controller;

use SychO\ActionLog\ActionLogEntry;
use SychO\ActionLog\Search\ActionLogSearcher;
use SychO\ActionLog\Serializer\ActionLogEntrySerializer;
use Flarum\Api\Controller\AbstractListController;
use Flarum\Search\SearchCriteria;
use Flarum\Http\UrlGenerator;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Illuminate\Support\Arr;

class ListActionLogEntriesController extends AbstractListController
{
    /**
     * @inheritDoc
     */
    public $serializer = ActionLogEntrySerializer::class;

    /**
     * {@inheritdoc}
     */
    public $include = [
        'actor',
        'discussion',
        'post',
        'group',
        'user',
    ];

    /**
     * {@inheritdoc}
     */
    public $sortFields = ['createdAt'];

    /**
     * @var ActionLogSearcher
     */
    protected $searcher;

    /**
     * @var UrlGenerator
     */
    protected $url;

    /**
     * @param ActionLogSearcher $searcher
     * @param UrlGenerator $url
     */
    public function __construct(ActionLogSearcher $searcher, UrlGenerator $url)
    {
        $this->searcher = $searcher;
        $this->url = $url;
    }

    /**
     * @inheritDoc
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');

        $actor->assertAdmin();

        $query = Arr::get($this->extractFilter($request), 'q');
        $sort = $this->extractSort($request);

        $criteria = new SearchCriteria($actor, $query, $sort);

        $include = $this->extractInclude($request);
        $limit = $this->extractLimit($request);
        $offset = $this->extractOffset($request);

        $results = $this->searcher->search($criteria, $limit, $offset, $include);

        $document->addPaginationLinks(
            $this->url->to('api')->route('actionLogEntries.index'),
            $request->getQueryParams(),
            $offset,
            $limit,
            null
        );

        $document->setMeta([
            'total' => ActionLogEntry::count(),
            'count' => $results->getCount()
        ]);

        return $results->getResults();
    }
}
