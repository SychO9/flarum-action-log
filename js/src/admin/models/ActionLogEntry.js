import Model from 'flarum/Model';
import mixin from 'flarum/utils/mixin';

export default class ActionLogEntry extends mixin(Model, {
  id: Model.attribute('id'),
  name: Model.attribute('name'),
  type: Model.attribute('type'),
  actor: Model.hasOne('actor'),
  resourceType: Model.attribute('resource_type'),
  resourceId: Model.attribute('resource_id'),
  createdAt: Model.attribute('created_at', Model.transformDate),
  format: Model.attribute('format'),

  discussion: Model.hasOne('discussion'),
  post: Model.hasOne('post'),
  group: Model.hasOne('group'),
  user: Model.hasOne('user'),
}) {}
