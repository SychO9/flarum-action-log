<?php

namespace SychO\ActionLog\Listener;

use Flarum\Group\Group;
use Illuminate\Support\Arr;

class LogPermissionEdited extends AbstractLogger
{
    /**
     * @var string
     */
    protected $name = 'edited';

    /**
     * @var string
     */
    protected $type = 'administration';

    /**
     * @var string
     */
    protected $resource_type = 'permission';

    /**
     * @inheritDoc
     */
    protected function details($event = null): array
    {
        $body = self::$request->getParsedBody();
        $permission = Arr::get($body, 'permission');
        $groupIds = Arr::get($body, 'groupIds');

        /** @var \Illuminate\Database\Eloquent\Collection $groups */
        $groups = Group::findMany($groupIds);

        return [
            'permission' => [
                'title' => $permission,
            ],
            'groups' => [
                'items' => $groups->map(function ($group) {
                    return [
                        'name'             => $group->name_singular,
                        'name_plural'      => $group->name_plural,
                        'icon'             => [
                            'name'              => $group->icon,
                            'backgroundColor'   => $group->color,
                        ],
                    ];
                }),
            ],
        ];
    }
}
