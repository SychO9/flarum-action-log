import Page from 'flarum/components/Page';
import icon from 'flarum/helpers/icon';
import Button from 'flarum/components/Button';
import Select from 'flarum/components/Select';
import ActionLogControls from '../utils/ActionLogControls';
import Formatter from '../utils/Formatter';
import ActionLogEntryList from "./ActionLogEntryList";

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
            <ActionLogEntryList
              loading={this.loading}
              entries={this.entries}
              controls={this.controls}
            />
            <div className="ActionLogPage-navigation">{this.buildPagination()}</div>
          </div>
        </div>
      </div>
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
