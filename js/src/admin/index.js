import app from 'flarum/app';
import ActionLogEntry from './models/ActionLogEntry';
import ActionLogPage from './components/ActionLogPage';

app.initializers.add(
  'sycho-action-log',
  (app) => {
    app.store.models['action-log-entries'] = ActionLogEntry;

    app.extensionData.for('sycho-action-log').registerPage(ActionLogPage);
  },
  -90
);
