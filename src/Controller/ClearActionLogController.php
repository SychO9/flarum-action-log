<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Controller;

use SychO\ActionLog\Console\ClearActionLogCommand;
use Flarum\Api\Controller\AbstractDeleteController;
use Psr\Http\Message\ServerRequestInterface;
use Laminas\Diactoros\Response\EmptyResponse;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\NullOutput;

class ClearActionLogController extends AbstractDeleteController
{
    /**
     * @var ClearActionLogCommand
     */
    protected $command;

    /**
     * @param Dispatcher $bus
     */
    public function __construct(ClearActionLogCommand $command)
    {
        $this->command = $command;
    }

    /**
     * @inheritDoc
     */
    protected function delete(ServerRequestInterface $request)
    {
        $actor = $request->getAttribute('actor');

        $actor->assertAdmin();

        $this->command->run(
            new ArrayInput([]),
            new NullOutput()
        );

        return new EmptyResponse(204);
    }
}
