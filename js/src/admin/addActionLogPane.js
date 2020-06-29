import { extend } from 'flarum/extend';
import ActionLogPage from './components/ActionLogPage';
import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';

export default function() {
  app.routes.actionLog = {path: '/logs', component: ActionLogPage.component()};

  app.extensionSettings['sycho-action-log'] = m.route(app.route('actionLog'));

  extend(AdminNav.prototype, 'items', items => {
    items.add('actionLog', AdminLinkButton.component({
      href: app.route('actionLog'),
      icon: 'fas fa-clipboard-list',
      children: app.translator.trans('sycho-action-log.admin.title'),
      description: app.translator.trans('sycho-action-log.admin.description'),
    }));
  });
}
