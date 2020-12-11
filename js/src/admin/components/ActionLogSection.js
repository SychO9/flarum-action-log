import Component from 'flarum/common/Component';
import ActionLogEntryList from './ActionLogEntryList';

export default class ActionLogSection extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.state = this.attrs.state;
    this.state.load();
  }

  view() {
    return (
      <div className="ActionLogListSection">
        <div className="ExtensionPage-permissions-header">
          <div className="container">
            <h2 className="ExtensionTitle">{app.translator.trans('sycho-action-log.admin.total_entries', { count: this.state.total || '0' })}</h2>
          </div>
        </div>

        <div className="ActionLogListSection-content">
          <div className="container">
            <div className="ActionLogListSection-navigation">{this.state.controls.filterControls(this).toArray()}</div>
            <ActionLogEntryList state={this.state} />
            <div className="ActionLogListSection-navigation">{this.state.buildPagination()}</div>
          </div>
        </div>
      </div>
    );
  }
}
