<?php

/**
 * @package Flarum Action Log
 * @author Sami "SychO" Mazouz (https://sycho9.github.io)
 * @license MIT
 */

namespace SychO\ActionLog\Listener;

use Flarum\Tags\Event\Creating;
use Flarum\Tags\TagValidator;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Validation\ValidationException;

/**
 * Class LogTagCreated
 * @package SychO\ActionLog\Listener
 *
 * @see Creating
 */
class LogTagCreated extends AbstractTagAction
{
    /**
     * @var string
     */
    protected $name = 'created';

    /**
     * @var string
     */
    protected $type = 'administration';

    /**
     * @var string
     */
    protected $resource_type = 'tag';

    /**
     * @var TagValidator
     */
    protected $validator;

    /**
     * @param SettingsRepositoryInterface $settings
     * @param Queue $queue
     * @param TagValidator $validator
     */
    public function __construct(SettingsRepositoryInterface $settings, Dispatcher $events, TagValidator $validator)
    {
        parent::__construct($settings, $events);

        $this->validator = $validator;
    }

    /**
     * @inheritDoc
     */
    protected function isDisabled($event): bool
    {
        try {
            $this->validator->assertValid($event->tag->getAttributes());
        } catch (ValidationException $e) {
            return true;
        }

        return parent::isDisabled($event);
    }
}
