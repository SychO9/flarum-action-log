import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import ActionLogSection from './ActionLogSection';
import ActionLogSettingsModal from '../modals/ActionLogSettingsModal';
import ItemList from 'flarum/common/utils/ItemList';
import Button from 'flarum/common/components/Button';
import ActionLogSectionState from '../states/ActionLogSectionState';

export default class ActionLogPage extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);

    this.actionLogSectionState = new ActionLogSectionState();
  }

  sections() {
    const sections = super.sections();

    sections.replace('content', this.content(), 2);
    sections.add('actionLogList', <ActionLogSection state={this.actionLogSectionState} />, 1);

    return sections;
  }

  content() {
    return (
      <div className="ExtensionPage-settings">
        <div className="container ActionLogPage-mainControls">{this.mainControls().toArray()}</div>
      </div>
    );
  }

  mainControls() {
    const items = new ItemList();

    items.add(
      'clear',
      <Button className="Button Button--primary" icon="fas fa-trash" onclick={this.actionLogSectionState.clear.bind(this.actionLogSectionState)}>
        {app.translator.trans('sycho-action-log.admin.clear')}
      </Button>
    );

    items.add(
      'settings',
      <Button
        className="Button"
        icon="fas fa-cogs"
        onclick={() => app.modal.show(ActionLogSettingsModal, { actions: this.actionLogSectionState.controls.actions() })}
      >
        {app.translator.trans('sycho-action-log.admin.settings')}
      </Button>
    );

    return items;
  }
}
