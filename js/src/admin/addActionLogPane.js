import { extend } from 'flarum/extend';
import ActionLogPage from './components/ActionLogPage';
import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';

export default function() {
  app.routes['sycho-action-log'] = {path: '/action-log', component: ActionLogPage.component()};

  app.extensionSettings['sycho-action-log'] = () => m.route(app.route('sycho-action-log'));

  extend(AdminNav.prototype, 'items', items => {
    items.add('sycho-action-log', AdminLinkButton.component({
      href: app.route('sycho-action-log'),
      icon: 'fas fa-clipboard-list',
      children: app.translator.trans('sycho-action-log.admin.title'),
      description: app.translator.trans('sycho-action-log.admin.description'),
    }));
  });
}
