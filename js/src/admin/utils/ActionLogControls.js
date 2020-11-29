import ItemList from 'flarum/utils/ItemList';
import Button from 'flarum/components/Button';
import Dropdown from 'flarum/components/Dropdown';
import withAttr from 'flarum/utils/withAttr';
import Input from '../components/Input';
import ActionLogSettingsModal from '../modals/ActionLogSettingsModal';
import FiltersHelpModal from '../modals/FiltersHelpModal';

export default class ActionLogControls {
  constructor(component) {
    this.component = component;
  }

  mainControls() {
    const items = new ItemList();

    items.add(
      'clear',
      <Button className="Button Button--primary" icon="fas fa-trash" onclick={this.clear.bind(this)}>
        {app.translator.trans('sycho-action-log.admin.clear')}
      </Button>
    );

    items.add(
      'settings',
      <Button className="Button" icon="fas fa-cogs" onclick={() => app.modal.show(ActionLogSettingsModal, { actions: this.actions() })}>
        {app.translator.trans('sycho-action-log.admin.settings')}
      </Button>
    );

    return items;
  }

  filterControls() {
    const items = new ItemList();

    items.add(
      'search',
      <Input
        icon="fas fa-filter"
        parentClassName="ActionLog-search"
        className="FormControl"
        placeholder={app.translator.trans('sycho-action-log.admin.search')}
        value={this.component.query()}
        oninput={this.search.bind(this)}
      />
    );

    items.add('help', <Button className="Button Button--icon" icon="fas fa-question" onclick={() => app.modal.show(FiltersHelpModal)} />);

    items.add(
      'sort',
      <Dropdown buttonClassName="Button" label={app.translator.trans(`sycho-action-log.admin.sort.${this.component.sort}`)}>
        {Object.keys(this.component.sortingOptions).map((key) => {
          const active = this.component.sort === key;

          return (
            <Button icon={active ? 'fas fa-check' : true} onclick={this.updateSort.bind(this, key)} active={active}>
              {app.translator.trans(`sycho-action-log.admin.sort.${key}`)}
            </Button>
          );
        })}
      </Dropdown>
    );

    items.add('pagination', <div>{this.component.buildPagination()}</div>);

    items.add('refresh', <Button className="Button Button--icon" icon="fas fa-sync" onclick={this.component.load.bind(this.component)} />);

    return items;
  }

  actions() {
    const items = {
      moderation: {
        discussion: ['locked', 'unlocked', 'hidden', 'restored', 'deleted', 'stickied', 'unstickied', 'tagged', 'renamed'],
        user: ['suspended', 'unsuspended', 'activated'],
        post: ['approved'],
      },
      administration: {
        group: ['created', 'deleted'],
        tag: ['created', 'deleted'],
        extension: ['enabled', 'disabled', 'uninstalled'],
        permission: ['edited'],
      },
    };

    const icons = {
      resourceTypes: {
        discussion: 'fas fa-comments',
        user: 'fas fa-user',
        post: 'fas fa-reply',
        extension: 'fas fa-puzzle-piece',
        group: 'fas fa-user-friends',
        tag: 'fas fa-tag',
        permission: 'fas fa-key',
      },
      actionNames: {
        locked: 'fas fa-lock',
        unlocked: 'fas fa-unlock',
        deleted: 'fas fa-trash',
        stickied: 'fas fa-thumbtack',
        unstickied: 'fas fa-thumbtack',
        suspended: 'fas fa-ban',
        unsuspended: 'fas fa-check',
        approved: 'fas fa-check',
        created: 'fas fa-plus',
        enabled: 'fas fa-check',
        disabled: 'fas fa-ban',
        uninstalled: 'fas fa-times',
        tagged: 'fas fa-tag',
        renamed: 'fas fa-pencil-alt',
        hidden: 'fas fa-eye-slash',
        restored: 'fas fa-reply',
        activated: 'fas fa-bolt',
        edited: 'fas fa-cog',
      },
    };

    return { items, icons };
  }

  updateSort(sort) {
    this.component.load({ sort });
  }

  search(e) {
    this.component.query(e.target.value);

    this.component.loading = true;
    this.searching = () => this.component.load({ query: this.component.query() });

    if (this.searchTimeout) clearTimeout(this.searchTimeout);

    this.searchTimeout = setTimeout(this.searching, 250);
  }

  clear() {
    if (!confirm(app.translator.trans('sycho-action-log.admin.clear_confirmation'))) return;

    this.component.loading = true;

    app
      .request({
        url: app.forum.attribute('apiUrl') + '/action-log-entries',
        method: 'DELETE',
      })
      .then(() => this.component.load());
  }
}
