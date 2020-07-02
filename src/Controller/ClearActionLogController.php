<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Controller;

use SychO\ActionLog\ActionLogEntry;
use Flarum\Api\Controller\AbstractDeleteController;
use Flarum\User\AssertPermissionTrait;
use Psr\Http\Message\ServerRequestInterface;
use Laminas\Diactoros\Response\EmptyResponse;

class ClearActionLogController extends AbstractDeleteController
{
    use AssertPermissionTrait;

    /**
     * @inheritDoc
     */
    protected function delete(ServerRequestInterface $request)
    {
        $this->assertAdmin($request->getAttribute('actor'));

        ActionLogEntry::getQuery()->delete();

        return new EmptyResponse(204);
    }
}
