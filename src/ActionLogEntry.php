<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog;

use Carbon\Carbon;
use Flarum\Database\AbstractModel;
use Flarum\Discussion\Discussion;
use Flarum\Foundation\EventGeneratorTrait;
use Flarum\Group\Group;
use Flarum\Post\Post;
use Flarum\User\User;
use SychO\ActionLog\Event\Logged;

/**
 * Class ActionLogEntry
 * @package SychO\ActionLog
 *
 * @property int id
 * @property int actor_id
 * @property string name
 * @property string type
 * @property string resource_type
 * @property array data
 * @property int resource_id
 * @property AbstractModel resource
 * @property string created_at
 */
class ActionLogEntry extends AbstractModel
{
    use HasDynamicRelationships;
    use EventGeneratorTrait;

    /**
     * {@inheritdoc}
     */
    protected $dates = ['created_at'];

    /**
     * @inheritDoc
     */
    protected $casts = [
        'data' => 'array',
    ];

    /**
     * @return array
     */
    public function getFormat()
    {
        return (app()->makeWith(Formatter::class, ['entry' => $this]))->getParameters();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function actor()
    {
        return $this->belongsTo(User::class, 'actor_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function discussion()
    {
        return $this->belongsTo(Discussion::class, 'discussion_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function post()
    {
        return $this->belongsTo(Post::class, 'post_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function group()
    {
        return $this->belongsTo(Group::class, 'group_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * @param Carbon $created_at
     * @param string $name
     * @param string $type
     * @param array $data
     * @param User|null $actor
     * @param string|null $resource_type
     * @param int|null $resource_id
     * @return ActionLogEntry
     */
    public static function build(
        Carbon $created_at,
        string $name,
        string $type,
        array $data,
        ?User $actor = null,
        ?string $resource_type = null,
        ?int $resource_id = null
    ): self
    {
        $entry = new ActionLogEntry();

        $entry->name = $name;
        $entry->type = $type;

        if ($actor !== null) {
            $entry->actor_id = $actor->id;
        }

        if (! empty($resource_type)) {
            $entry->resource_type = $resource_type;

            if (! empty($resource_id)) {
                $entry->resource_id = $resource_id;
            }
        }

        $entry->data = $data;
        $entry->created_at = $created_at;

        $entry->raise(new Logged($entry, $actor));

        return $entry;
    }
}
