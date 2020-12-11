import Button from 'flarum/common/components/Button';
import Select from 'flarum/common/components/Select';
import Stream from 'flarum/common/utils/Stream';
import ActionLogControls from '../utils/ActionLogControls';
import Formatter from '../utils/Formatter';

export default class ActionLogSectionState {
  constructor() {
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

    this.query = Stream('');

    this.controls = new ActionLogControls(this);
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

    this.entries = this.entries.filter((entry) => {
      return !(!this.isTagsEnabled() && (entry.resourceType() === 'tag' || entry.name() === 'tagged'));
    });

    this.entries.map((entry) => {
      entry.formattedName = this.formatName(entry);
    });

    return response;
  }

  buildPagination() {
    if (this.count <= this.limit) return <div className="ActionLogListSection-pagination"></div>;

    return (
      <div className="ActionLogListSection-pagination">
        <Button className="Button Button--icon" icon="fas fa-arrow-left" onclick={this.prev.bind(this)} disabled={!this.hasPrev()} />
        <Select value={this.page} options={this.getPages()} onchange={this.changePage.bind(this)} />
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

  /**
   * @return {boolean}
   */
  isTagsEnabled() {
    return JSON.parse(app.data.settings.extensions_enabled).indexOf('flarum-tags') !== -1;
  }

  clear() {
    if (!confirm(app.translator.trans('sycho-action-log.admin.clear_confirmation'))) return;

    this.loading = true;

    app
      .request({
        url: app.forum.attribute('apiUrl') + '/action-log-entries',
        method: 'DELETE',
      })
      .then(() => this.load());
  }
}
