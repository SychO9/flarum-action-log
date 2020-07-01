<?php

/**
 * @package Flarum Logs
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Controller;

use SychO\ActionLog\ActionLogEntry;
use SychO\ActionLog\Serializer\ActionLogEntrySerializer;
use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\UrlGenerator;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

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
     * @var UrlGenerator
     */
    protected $url;

    /**
     * @param UrlGenerator $url
     */
    public function __construct(UrlGenerator $url)
    {
        $this->url = $url;
    }

    /**
     * @inheritDoc
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $include = $this->extractInclude($request);
        $limit = $this->extractLimit($request);
        $offset = $this->extractOffset($request);

        $query = ActionLogEntry::latest()->skip($offset)->take($limit);

        $entries = $query->get();

        $entries = ActionLogEntry::prepareRelationships($entries);
        $entries->load($include);

        $document->addPaginationLinks(
            $this->url->to('api')->route('actionLogEntries.index'),
            $request->getQueryParams(),
            $offset,
            $limit,
            null
        );

        $document->setMeta(['count' => ActionLogEntry::count()]);

        return $entries;
    }
}
