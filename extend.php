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
use Flarum\Suspend;
use Flarum\Approval;
use Flarum\Sticky;
use Flarum\Discussion;
use Flarum\Lock;
use Flarum\Extension;
use Flarum\Group;
use Flarum\Tags;
use Flarum\User;
use Illuminate\Contracts\Events\Dispatcher;

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

    (new Extend\Event())
        // Flarum Lock
        ->listen(Lock\Event\DiscussionWasLocked::class, Listener\LogDiscussionLocked::class)
        ->listen(Lock\Event\DiscussionWasUnlocked::class, Listener\LogDiscussionUnlocked::class)
        // Flarum Sticky
        ->listen(Sticky\Event\DiscussionWasStickied::class, Listener\LogDiscussionStickied::class)
        ->listen(Sticky\Event\DiscussionWasUnstickied::class, Listener\LogDiscussionUnstickied::class)
        // Flarum Approval
        ->listen(Approval\Event\PostWasApproved::class, Listener\LogPostApproved::class)
        // Flarum Suspend
        ->listen(Suspend\Event\Suspended::class, Listener\LogUserSuspended::class)
        ->listen(Suspend\Event\Unsuspended::class, Listener\LogUserUnsuspended::class)
        // Flarum Tags
        ->listen(Tags\Event\Creating::class, Listener\LogTagCreated::class)
        ->listen(Tags\Event\Deleting::class, Listener\LogTagDeleted::class)
        ->listen(Tags\Event\DiscussionWasTagged::class, Listener\LogDiscussionTagged::class)
        // Flarum Core
        ->listen(Discussion\Event\Hidden::class, Listener\LogDiscussionHidden::class)
        ->listen(Discussion\Event\Restored::class, Listener\LogDiscussionRestored::class)
        ->listen(Discussion\Event\Deleted::class, Listener\LogDiscussionDeleted::class)
        ->listen(Discussion\Event\Renamed::class, Listener\LogDiscussionRenamed::class)
        ->listen(User\Event\Activated::class, Listener\LogUserActivated::class)
        ->listen(Extension\Event\Disabled::class, Listener\LogExtensionDisabled::class)
        ->listen(Extension\Event\Enabled::class, Listener\LogExtensionEnabled::class)
        ->listen(Extension\Event\Uninstalled::class, Listener\LogExtensionUninstalled::class)
        ->listen(Group\Event\Created::class, Listener\LogGroupCreated::class)
        ->listen(Group\Event\Deleted::class, Listener\LogGroupDeleted::class)
        // Core but not core, does that make sense ?
        ->listen(\SychO\ActionLog\Event\PermissionSet::class, Listener\LogPermissionEdited::class),

    function (Application $app, Dispatcher $events) {
        $app->register(Provider\ActionLogServiceProvider::class);
    }
];
