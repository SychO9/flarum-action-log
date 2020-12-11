import ItemList from 'flarum/utils/ItemList';
import Button from 'flarum/components/Button';
import Dropdown from 'flarum/components/Dropdown';
import FiltersHelpModal from '../modals/FiltersHelpModal';
import { uikit } from '@sycho-uikit';

const { Input } = uikit;

export default class ActionLogControls {
  constructor(state) {
    this.state = state;
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
        value={this.state.query()}
        oninput={this.search.bind(this)}
      />
    );

    items.add('help', <Button className="Button Button--icon" icon="fas fa-question" onclick={() => app.modal.show(FiltersHelpModal)} />);

    items.add(
      'sort',
      <Dropdown buttonClassName="Button" label={app.translator.trans(`sycho-action-log.admin.sort.${this.state.sort}`)}>
        {Object.keys(this.state.sortingOptions).map((key) => {
          const active = this.state.sort === key;

          return (
            <Button icon={active ? 'fas fa-check' : true} onclick={this.updateSort.bind(this, key)} active={active}>
              {app.translator.trans(`sycho-action-log.admin.sort.${key}`)}
            </Button>
          );
        })}
      </Dropdown>
    );

    items.add('pagination', <div>{this.state.buildPagination()}</div>);

    items.add('refresh', <Button className="Button Button--icon" icon="fas fa-sync" onclick={this.state.load.bind(this.state)} />);

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
    this.state.load({ sort });
  }

  search(e) {
    this.state.query(e.target.value);

    this.state.loading = true;
    this.searching = () => this.state.load({ query: this.state.query() });

    if (this.searchTimeout) clearTimeout(this.searchTimeout);

    this.searchTimeout = setTimeout(this.searching, 250);
  }
}
