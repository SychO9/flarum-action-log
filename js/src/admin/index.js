import app from 'flarum/app';
import ActionLogEntry from './models/ActionLogEntry';
import addActionLogPane from './addActionLogPane';

app.initializers.add('sycho-action-log', app => {
  app.store.models['action-log-entries'] = ActionLogEntry;

  addActionLogPane();
});

import actionLogCompat from './compat';
import { compat } from '@flarum/core/admin';

Object.assign(compat, actionLogCompat);
