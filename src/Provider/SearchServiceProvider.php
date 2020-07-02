<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://github.com/SychO9)
 * @version 0.1.0
 * @license MIT
 */

namespace SychO\ActionLog\Provider;

use SychO\ActionLog\Search\ActionLogSearcher;
use SychO\ActionLog\Search\Gambit\TypeGambit;
use SychO\ActionLog\Search\Gambit\ResourceTypeGambit;
use SychO\ActionLog\Search\Gambit\ActorGambit;
use Flarum\Foundation\AbstractServiceProvider;
use Flarum\Search\GambitManager;
use Illuminate\Contracts\Container\Container;

class SearchServiceProvider extends AbstractServiceProvider
{
    public function register()
    {
        $this->app->when(ActionLogSearcher::class)
            ->needs(GambitManager::class)
            ->give(function (Container $app) {
                $gambits = new GambitManager($app);

                $gambits->add(TypeGambit::class);
                $gambits->add(ResourceTypeGambit::class);
                $gambits->add(ActorGambit::class);

                return $gambits;
            });
    }
}
