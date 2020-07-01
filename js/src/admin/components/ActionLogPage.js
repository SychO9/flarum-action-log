import Page from 'flarum/components/Page';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import humanTime from 'flarum/helpers/humanTime';
import icon from 'flarum/helpers/icon';
import avatar from 'flarum/helpers/avatar';
import username from 'flarum/helpers/username';
import Placeholder from 'flarum/components/Placeholder';
import Button from 'flarum/components/Button';
import Select from 'flarum/components/Select';

export default class ActionLogPage extends Page {
  init() {
    super.init();

    this.entries = [];

    this.offset = 0;

    this.limit = 4;

    this.total = 0;

    this.page = 0;

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
            <p>{app.translator.trans('sycho-action-log.admin.description')}</p>
            {Button.component({
              className: "Button Button--primary",
              children: "Clear Log",
              icon: "fas fa-trash",
            })}
            {Button.component({
              className: "Button",
              children: "Settings",
              icon: "fas fa-cogs",
            })}
          </div>
        </div>

        <div className="ActionLogPage-content">
          <div className="container">
            {this.loading ? (
              <LoadingIndicator className="LoadingIndicator--block" />
            ) :
              this.entries.length ? [
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
                </div>,
                <div className="ActionLogPage-navigation">{this.buildPagination()}</div>
              ] : (
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
  load(params) {
    this.loading = true;

    app.store
      .find('action-log-entries', this.requestParams(params || {}))
      .then(this.handleResponse.bind(this))
      .then(() => {
        this.loading = false;
        m.redraw();
      });
  }

  requestParams({ offset }) {
    if (typeof offset !== 'undefined') {
      this.offset = offset;
    }

    return { page: { offset: this.offset, limit: this.limit } };
  }

  handleResponse(response) {
    this.entries = response;
    this.total = response.payload.meta.count || 0;
    this.links = response.payload.links;
    this.page = Math.round(this.offset / this.limit);

    return response;
  }

  buildPagination() {
    if (this.total <= this.limit) return;

    return (
      <div className="ActionLogPage-pagination">
        <Button
          className="Button Button--icon"
          icon="fas fa-arrow-left"
          onclick={this.prev.bind(this)}
          disabled={!this.hasPrev()}
        />
        {<Select
          value={this.page}
          options={this.getPages()}
          onchange={this.changePage.bind(this)}
        />}
        <Button
          className="Button Button--icon"
          icon="fas fa-arrow-right"
          onclick={this.next.bind(this)}
          disabled={!this.hasNext()}
        />
      </div>
    );
  }

  next() {
    if (!this.hasNext()) return;

    this.load({ offset: this.offset + this.limit });
  }

  prev() {
    if (!this.hasPrev()) return;

    this.load({ offset: this.offset - this.limit });
  }

  hasNext() {
    return this.offset+this.limit < this.total;
  }

  hasPrev() {
    return this.links.prev;
  }

  getPages() {
    let pageRange = Array.from({ length: Math.ceil(this.total/this.limit) }, (v, k) => k+1);

    pageRange.map((number, index) => {
      pageRange[index] = `Page: ${number}`;
    });

    return pageRange;
  }

  changePage(value) {
    if (!Object.keys(this.getPages()).includes(value)) return;

    this.load({ offset: value*this.limit });
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
