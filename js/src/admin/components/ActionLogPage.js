import Page from 'flarum/components/Page';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import humanTime from 'flarum/helpers/humanTime';
import icon from 'flarum/helpers/icon';
import avatar from 'flarum/helpers/avatar';
import username from 'flarum/helpers/username';
import Placeholder from 'flarum/components/Placeholder';
import Button from 'flarum/components/Button';
import Select from 'flarum/components/Select';
import ActionLogControls from '../utils/ActionLogControls';
import Formatter from '../utils/Formatter';

export default class ActionLogPage extends Page {
  init() {
    super.init();

    this.entries = [];

    this.sortingOptions = {
      newest: '-createdAt',
      oldest: 'createdAt',
    };

    this.sort = 'newest';

    this.offset = 0;

    this.limit = 20;

    this.total = 0;

    this.count = 0;

    this.page = 0;

    this.query = m.prop('');

    this.controls = new ActionLogControls(this);

    this.load();
  }

  view() {
    const { icons } = this.controls.actions();

    return (
      <div className="ActionLogPage">
        <div className="ActionLogPage-header">
          <div className="container">
            <h2>
              {icon('fas fa-clipboard-list')} {app.translator.trans('sycho-action-log.admin.title')}
            </h2>
            <p>{app.translator.trans('sycho-action-log.admin.description')}</p>
            <p>{app.translator.trans('sycho-action-log.admin.total_entries', { count: this.total || '0' })}</p>
            {this.controls.mainControls(this).toArray()}
          </div>
        </div>

        <div className="ActionLogPage-content">
          <div className="container">
            <div className="ActionLogPage-navigation">{this.controls.filterControls(this).toArray()}</div>
            {this.loading ? (
              <LoadingIndicator className="LoadingIndicator--block" />
            ) : this.entries.length ? (
              [
                <div className="ActionLogGrid">
                  {this.entries.map((entry) => (
                    <div className="ActionLogGrid-item">
                      <div className="ActionLogGrid-itemIcon">
                        <div className="ActionLogGrid-itemIconMain">
                          {icon(icons.resourceTypes[entry.resourceType()])}
                          <span
                            className="ActionLogGrid-itemIconSecondary Badge"
                            title={entry.name()}
                            config={(element) => $(element).tooltip({ placement: 'bottom' })}
                          >
                            {icon(icons.actionNames[entry.name()])}
                          </span>
                        </div>
                      </div>
                      <div className="ActionLogGrid-Avatar">{avatar(entry.actor())}</div>
                      <div className="ActionLogGrid-itemContent">
                        <div className="ActionLogGrid-entryDetails">
                          <div className="ActionLogGrid-entryActor">{username(entry.actor())}</div>
                          <div className="ActionLogGrid-entryType">{entry.type()}</div>
                          <div className="ActionLogGrid-entryTime">
                            {icon('far fa-clock')} {humanTime(entry.createdAt())}
                          </div>
                        </div>
                        <div className="ActionLogGrid-entryName">{entry.formattedName}</div>
                      </div>
                    </div>
                  ))}
                </div>,
                <div className="ActionLogPage-navigation">{this.buildPagination()}</div>,
              ]
            ) : (
              <Placeholder text={app.translator.trans('sycho-action-log.admin.no_entries')} />
            )}
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
    if (!entry.actor()) return;

    return (
      <a>
        {avatar(entry.actor())}
        {username(entry.actor())}
      </a>
    );
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

  requestParams({ offset, query, sort }) {
    if (typeof offset !== 'undefined') {
      this.offset = offset;
    }

    if (typeof sort !== 'undefined') {
      this.sort = sort;
    }

    return {
      page: {
        offset: this.offset,
        limit: this.limit,
      },
      filter: {
        q: query,
      },
      sort: this.sortingOptions[this.sort],
    };
  }

  handleResponse(response) {
    this.entries = response;
    this.total = response.payload.meta.total || 0;
    this.count = response.payload.meta.count || 0;
    this.links = response.payload.links;
    this.page = Math.ceil(this.offset / this.limit);

    this.entries.map((entry) => {
      entry.formattedName = this.formatName(entry);
    });

    return response;
  }

  buildPagination() {
    if (this.count <= this.limit) return;

    return (
      <div className="ActionLogPage-pagination">
        <Button className="Button Button--icon" icon="fas fa-arrow-left" onclick={this.prev.bind(this)} disabled={!this.hasPrev()} />
        {<Select value={this.page} options={this.getPages()} onchange={this.changePage.bind(this)} />}
        <Button className="Button Button--icon" icon="fas fa-arrow-right" onclick={this.next.bind(this)} disabled={!this.hasNext()} />
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
    return this.offset + this.limit < this.count;
  }

  hasPrev() {
    return this.links.prev;
  }

  getPages() {
    let pageRange = Array.from({ length: Math.ceil(this.count / this.limit) }, (v, k) => k + 1);

    pageRange.map((number, index) => {
      pageRange[index] = app.translator.trans('sycho-action-log.admin.page', { number });
    });

    return pageRange;
  }

  changePage(value) {
    if (!Object.keys(this.getPages()).includes(value)) return;

    this.load({ offset: value * this.limit });
  }

  /**
   * @param entry
   * @returns {string}
   */
  formatName(entry) {
    return new Formatter(entry).handle();
  }
}
