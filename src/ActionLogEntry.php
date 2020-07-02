<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog;

use Flarum\Database\AbstractModel;
use Flarum\Discussion\Discussion;
use Flarum\Group\Group;
use Flarum\Post\Post;
use Flarum\User\User;

/**
 * Class ActionLogEntry
 * @package SychO\ActionLog
 *
 * @property int id
 * @property int actor_id
 * @property string name
 * @property string type
 * @property string resource_type
 * @property int resource_id
 * @property AbstractModel resource
 * @property string created_at
 */
class ActionLogEntry extends AbstractModel
{
    use HasDynamicRelationships;

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
}
