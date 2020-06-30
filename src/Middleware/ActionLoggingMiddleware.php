<?php

/**
 * @package Flarum Logs
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Middleware;

use SychO\ActionLog\Listener\AbstractLogger;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\MiddlewareInterface as Middleware;
use Psr\Http\Server\RequestHandlerInterface as Handler;

/**
 * Class ActionLoggingMiddleware
 * @package SychO\ActionLog\Middleware
 *
 * The purpose of this middleware is to store the request object
 * in the AbstractLogger class, we need the request object to grab the actor
 */
class ActionLoggingMiddleware implements Middleware
{
    public function process(Request $request, Handler $handler): Response
    {
        AbstractLogger::$request = $request;

        return $handler->handle($request);
    }
}
