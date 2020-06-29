<?php

/**
 * @package Flarum Logs
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Controller;

use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface;
use SychO\ActionLog\ActionLogEntry;
use SychO\ActionLog\Serializer\ActionLogEntrySerializer;
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
     * @inheritDoc
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $include = $this->extractInclude($request);
        $entries = ActionLogEntry::all();

        $entries->load($include);

        return $entries;
    }
}
