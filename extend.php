<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

use SychO\ActionLog\Listener;
use SychO\ActionLog\Controller;
use SychO\ActionLog\Middleware;
use SychO\ActionLog\Provider;
use Flarum\Foundation\Application;
use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),

    new Extend\Locales(__DIR__.'/resources/locale'),

    (new Extend\Routes('api'))
        ->get('/action-log-entries', 'actionLogEntries.index', Controller\ListActionLogEntriesController::class)
        ->delete('/action-log-entries', 'actionLogEntries.clear', Controller\ClearActionLogController::class),

    (new Extend\Middleware('api'))
        ->add(Middleware\ActionLoggingMiddleware::class),

    function (Application $app, Dispatcher $events) {
        $app->register(Provider\SearchServiceProvider::class);

        // Flarum Lock
        if (class_exists('\Flarum\Lock\Event\DiscussionWasLocked')) {
            $events->listen(\Flarum\Lock\Event\DiscussionWasLocked::class, Listener\LogDiscussionLocked::class);
            $events->listen(\Flarum\Lock\Event\DiscussionWasUnlocked::class, Listener\LogDiscussionUnlocked::class);
        }

        // Flarum Sticky
        if (class_exists('\Flarum\Sticky\Event\DiscussionWasStickied')) {
            $events->listen(\Flarum\Sticky\Event\DiscussionWasStickied::class, Listener\LogDiscussionStickied::class);
            $events->listen(\Flarum\Sticky\Event\DiscussionWasUnstickied::class, Listener\LogDiscussionUnstickied::class);
        }

        // Flarum Approval
        if (class_exists('\Flarum\Approval\Event\PostWasApproved')) {
            $events->listen(\Flarum\Approval\Event\PostWasApproved::class, Listener\LogPostApproved::class);
        }

        // Flarum Suspend
        if (class_exists('\Flarum\Suspend\Event\Suspended')) {
            $events->listen(\Flarum\Suspend\Event\Suspended::class, Listener\LogUserSuspended::class);
            $events->listen(\Flarum\Suspend\Event\Unsuspended::class, Listener\LogUserUnsuspended::class);
        }

        // Flarum Core
        $events->listen(\Flarum\Discussion\Event\Deleted::class, Listener\LogDiscussionDeleted::class);

        $events->listen(\Flarum\Extension\Event\Disabled::class, Listener\LogExtensionDisabled::class);
        $events->listen(\Flarum\Extension\Event\Enabled::class, Listener\LogExtensionEnabled::class);
        $events->listen(\Flarum\Extension\Event\Uninstalled::class, Listener\LogExtensionUninstalled::class);

        $events->listen(\Flarum\Group\Event\Created::class, Listener\LogGroupCreated::class);
        $events->listen(\Flarum\Group\Event\Deleted::class, Listener\LogGroupDeleted::class);
    }
];
