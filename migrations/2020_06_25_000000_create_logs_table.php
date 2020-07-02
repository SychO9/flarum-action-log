<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('action_log_entries')) {
            return;
        }

        $schema->create('action_log_entries', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('actor_id')->unsigned();
            $table->string('name');
            $table->string('type');
            $table->integer('resource_id')->unsigned()->nullable();
            $table->string('resource_type')->nullable();
            $table->json('data')->nullable();
            $table->dateTime('created_at');
        });
    },

    'down' => function (Builder $schema) {
        $schema->dropIfExists('action_log_entries');
    },
];
