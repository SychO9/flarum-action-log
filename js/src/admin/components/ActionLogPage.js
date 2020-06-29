import Page from 'flarum/components/Page';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import humanTime from 'flarum/helpers/humanTime';
import icon from 'flarum/helpers/icon';
import avatar from 'flarum/helpers/avatar';
import username from 'flarum/helpers/username';
import Placeholder from 'flarum/components/Placeholder';

export default class ActionLogPage extends Page {
  init() {
    super.init();

    this.entries = [];

    this.load();
  }

  view() {
    return (
      <div className="ActionLogPage">
        <div className="ActionLogPage-header">
          <div className="container">
            <h2>
              {icon('fas fa-clipboard-list')} {app.translator.trans('sycho-action-log.admin.title')}
            </h2>
          </div>
        </div>

        <div className="ActionLogPage-content">
          <div className="container">
            {this.loading ? (
              <LoadingIndicator className="LoadingIndicator--block" />
            ) :
              this.entries.length ? (
                <div className="ActionLogGrid">
                  {this.entries.map(entry => (
                    <div className="ActionLogGrid-item">
                      <div className="ActionLogGrid-Avatar">{avatar(entry.actor())}</div>
                      <div className="ActionLogGrid-itemContent">
                        <div className="ActionLogGrid-entryDetails">
                          <div className="ActionLogGrid-entryActor">{username(entry.actor())}</div>
                          <div className="ActionLogGrid-entryType">{entry.type()}</div>
                          <div className="ActionLogGrid-entryTime">{icon('far fa-clock')} {humanTime(entry.createdAt())}</div>
                        </div>
                        <div className="ActionLogGrid-entryName">{this.formatName(entry)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <Placeholder text={app.translator.trans('sycho-action-log.admin.no_entries')} />
              )
            }
          </div>
        </div>
      </div>
    );
  }

  /**
   * @param entry
   * @returns string
   */
  showActor(entry) {
    if (! entry.actor()) return;

    return <a>{avatar(entry.actor())}{username(entry.actor())}</a>;
  }

  /**
   * Loads the log entries
   */
  load() {
    this.loading = true;

    app.store
      .find('action-log-entries')
      .then(this.handleResponse.bind(this))
      .then(() => {
        this.loading = false;
        m.redraw();
      });
  }

  handleResponse(response) {
    this.entries = response;

    return response;
  }

  /**
   * Finds the appropriate language string
   * and calls for the resource name to be built
   *
   * @param entry
   * @returns string
   */
  formatName(entry) {
    let key = `sycho-action-log.admin.actions.${entry.type()}`;
    let format = entry.format();

    if (entry.resourceType().length) {
      key += `.${entry.resourceType()}`;
    }

    key += `.${entry.name()}`;

    // If there are any objects, convert them to strings using the buildResourceName() method
    Object.keys(format).map((key, index) => {
      if (typeof format[key] !== 'object') return;

      // The core code tries to get the displayName attribute when the
      // translation parameter key is named 'user', even if the value is a string
      // so we have no choice but to add some ugly hackish code here
      format[key === 'user' ? 'u' : key] = this.buildResourceName(key, entry);

      if (key === 'user')
        delete format.user;
    });

    return app.translator.trans(key, format);
  }

  /**
   * Gives context to the resource manipulated
   *
   * @param format
   * @param entry
   * @returns string
   */
  buildResourceName(key, entry) {
    const format = entry.format()[key] || {};
    let name = format.title || format.name || 'unknown';

    if (entry.resourceId() && key === entry.resourceType()) {
      name = `#${entry.resourceId()} - ${name}`;
    }

    if (format.version) {
      name = [
        name,
        <i> ({format.version})</i>
      ];
    }

    if (format.icon) {
      name = [
        <span className="Badge ActionLogExtensionIcon" style={format.icon}>
          {icon(format.icon.name)}
        </span>,
        name
      ];
    }

    if (format.link) {
      name = <a href={format.link}>{name}</a>;
    }

    // Style the resource name
    name = <strong>{name}</strong>;

    return name;
  }
}
