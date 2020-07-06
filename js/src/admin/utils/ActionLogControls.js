import ItemList from 'flarum/utils/ItemList';
import Button from 'flarum/components/Button';
import Dropdown from 'flarum/components/Dropdown';
import Input from '../components/Input';
import ActionLogSettingsModal from '../modals/ActionLogSettingsModal';
import FiltersHelpModal from '../modals/FiltersHelpModal';

export default class ActionLogControls {
  constructor(component) {
    this.component = component;
  }

  mainControls() {
    const items = new ItemList();

    items.add('clear', Button.component({
      className: "Button Button--primary",
      children: app.translator.trans('sycho-action-log.admin.clear'),
      icon: "fas fa-trash",
      onclick: this.clear.bind(this),
    }));

    items.add('settings', Button.component({
      className: "Button",
      children: app.translator.trans('sycho-action-log.admin.settings'),
      icon: "fas fa-cogs",
      onclick: () => app.modal.show(ActionLogSettingsModal, { actions: this.actions() }),
    }));

    return items;
  }

  filterControls() {
    const items = new ItemList();

    items.add('search', Input.component({
      icon: "fas fa-filter",
      parentClassName: "ActionLog-search",
      className: "FormControl",
      placeholder: app.translator.trans('sycho-action-log.admin.search'),
      value: this.component.query(),
      oninput: this.search.bind(this),
    }));

    items.add('help', Button.component({
      className: 'Button Button--icon',
      icon: 'fas fa-question',
      onclick: () => app.modal.show(FiltersHelpModal),
    }));

    items.add('sort', Dropdown.component({
      buttonClassName: 'Button',
      label: app.translator.trans(`sycho-action-log.admin.sort.${this.component.sort}`),
      children: Object.keys(this.component.sortingOptions).map(key => {
        const active = this.component.sort === key;

        return Button.component({
          children: app.translator.trans(`sycho-action-log.admin.sort.${key}`),
          icon: active ? 'fas fa-check' : true,
          onclick: this.updateSort.bind(this, key),
          active,
        });
      })
    }));

    items.add('pagination', this.component.buildPagination());

    items.add('refresh', Button.component({
      className: 'Button Button--icon',
      icon: 'fas fa-sync',
      onclick: this.component.load.bind(this.component),
    }));

    return items;
  }

  actions() {
    const items = {
      moderation: {
        discussion: [
          'locked',
          'unlocked',
          'deleted',
          'stickied',
          'unstickied',
        ],
        user: [
          'suspended',
          'unsuspended',
        ],
        post: [
          'approved',
        ],
      },
      administration: {
        group: [
          'created',
          'deleted',
        ],
        extension: [
          'enabled',
          'disabled',
          'uninstalled',
        ],
      },
    };

    const icons = {
      resourceTypes: {
        discussion: 'fas fa-comments',
        user: 'fas fa-user',
        post: 'fas fa-reply',
        extension: 'fas fa-puzzle-piece',
        group: 'fas fa-key',
      },
      actionNames: {
        locked: 'fas fa-lock',
        unlocked: 'fas fa-unlock',
        deleted: 'fas fa-trash',
        stickied: 'fas fa-thumbtack',
        unstickied: 'fas fa-thumbtack',
        suspended: 'fas fa-ban',
        unsuspended: 'fas fa-check-circle',
        approved: 'fas fa-check-circle',
        created: 'fas fa-plus-circle',
        enabled: 'fas fa-check-circle',
        disabled: 'fas fa-ban',
        uninstalled: 'fas fa-times-circle',
      },
    };

    return { items, icons };
  }

  updateSort(sort) {
    this.component.load({ sort });
  }

  search() {
    m.withAttr('value', this.component.query)();

    this.component.loading = true;
    this.searching = () => this.component.load({ query: this.component.query() });

    if (this.searchTimeout)
      clearTimeout(this.searchTimeout);

    this.searchTimeout = setTimeout(this.searching, 250);
  }

  clear() {
    if (!confirm(app.translator.trans('sycho-action-log.admin.clear_confirmation'))) return;

    this.component.loading = true;

    app
      .request({
        url: app.forum.attribute('apiUrl') + '/action-log-entries',
        method: 'DELETE'
      })
      .then(() => this.component.load());
  }
}
