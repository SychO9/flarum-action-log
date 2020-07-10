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
use SychO\ActionLog\Console;
use Flarum\Foundation\Application;
use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Suspend;
use Flarum\Approval;
use Flarum\Sticky;
use Flarum\Discussion;
use Flarum\Lock;
use Flarum\Extension;
use Flarum\Group;
use Flarum\Tags;

return [
    (new Extend\Console)
        ->command(Console\ClearActionLogCommand::class),

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
        if (class_exists(Lock\Event\DiscussionWasLocked::class)) {
            $events->listen(Lock\Event\DiscussionWasLocked::class, Listener\LogDiscussionLocked::class);
            $events->listen(Lock\Event\DiscussionWasUnlocked::class, Listener\LogDiscussionUnlocked::class);
        }

        // Flarum Sticky
        if (class_exists(Sticky\Event\DiscussionWasStickied::class)) {
            $events->listen(Sticky\Event\DiscussionWasStickied::class, Listener\LogDiscussionStickied::class);
            $events->listen(Sticky\Event\DiscussionWasUnstickied::class, Listener\LogDiscussionUnstickied::class);
        }

        // Flarum Approval
        if (class_exists(Approval\Event\PostWasApproved::class)) {
            $events->listen(Approval\Event\PostWasApproved::class, Listener\LogPostApproved::class);
        }

        // Flarum Suspend
        if (class_exists(Suspend\Event\Suspended::class)) {
            $events->listen(Suspend\Event\Suspended::class, Listener\LogUserSuspended::class);
            $events->listen(Suspend\Event\Unsuspended::class, Listener\LogUserUnsuspended::class);
        }

        // Flarum Tags
        if (class_exists(Tags\Event\Creating::class)) {
            $events->listen(Tags\Event\Creating::class, Listener\LogTagCreated::class);
            $events->listen(Tags\Event\Deleting::class, Listener\LogTagDeleted::class);
            $events->listen(Tags\Event\DiscussionWasTagged::class, Listener\LogDiscussionTagged::class);
        }

        // Flarum Core
        $events->listen(Discussion\Event\Deleted::class, Listener\LogDiscussionDeleted::class);

        $events->listen(Extension\Event\Disabled::class, Listener\LogExtensionDisabled::class);
        $events->listen(Extension\Event\Enabled::class, Listener\LogExtensionEnabled::class);
        $events->listen(Extension\Event\Uninstalled::class, Listener\LogExtensionUninstalled::class);

        $events->listen(Group\Event\Created::class, Listener\LogGroupCreated::class);
        $events->listen(Group\Event\Deleted::class, Listener\LogGroupDeleted::class);
    }
];
