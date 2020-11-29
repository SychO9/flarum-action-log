import Component from 'flarum/Component';
import Placeholder from 'flarum/components/Placeholder';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import humanTime from 'flarum/helpers/humanTime';
import avatar from 'flarum/helpers/avatar';
import username from 'flarum/helpers/username';
import icon from 'flarum/helpers/icon';

export default class ActionLogEntryList extends Component {
  view() {
    if (this.attrs.loading) {
      return <LoadingIndicator className="LoadingIndicator--block" />;
    }

    if (!this.attrs.entries.length) {
      return <Placeholder text={app.translator.trans('sycho-action-log.admin.no_entries')} />;
    }

    const { icons } = this.attrs.controls.actions();

    return (
      <div className="ActionLogGrid">
        {this.attrs.entries.map((entry) => (
          <div className="ActionLogGrid-item">
            <div className="ActionLogGrid-itemIcon">
              <div className="ActionLogGrid-itemIconMain">
                {icon(icons.resourceTypes[entry.resourceType()])}
                <span
                  className="ActionLogGrid-itemIconSecondary Badge"
                  title={entry.name()}
                  oncreate={(vnode) => $(vnode.dom).tooltip({ placement: 'bottom' })}
                >
                  {icon(icons.actionNames[entry.name()])}
                </span>
              </div>
            </div>
            <div className="ActionLogGrid-Avatar">{avatar(entry.actor())}</div>
            <div className="ActionLogGrid-itemContent">
              <div className="ActionLogGrid-entryActor">{username(entry.actor())}</div>
              <div className="ActionLogGrid-entryName">{entry.formattedName}</div>
              <div className="ActionLogGrid-entryDetails">
                <div className="ActionLogGrid-entryType">{entry.type()}</div>
                <div className="ActionLogGrid-entryTime">
                  {icon('far fa-clock')} {humanTime(entry.createdAt())}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
