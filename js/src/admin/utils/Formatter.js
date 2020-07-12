import ActionLogEntry from '../models/ActionLogEntry';
import tagsLabel from 'flarum/tags/helpers/tagsLabel';
import Tag from 'flarum/tags/models/Tag';
import icon from 'flarum/helpers/icon';

/**
 * Finds the appropriate language string
 * and builds the name of the action taken
 */
export default class Formatter {
  static tagsText = 'sycho-action-log.admin.actions.moderation.discussion.tagged.action.tags_text';

  /**
   * @param entry {ActionLogEntry}
   */
  constructor(entry) {
    this.entry = entry;
    this.langKey = `sycho-action-log.admin.actions.${entry.type()}`;
  }

  /**
   * @returns {string}
   */
  handle() {
    if (this.entry.resourceType().length) {
      this.langKey += `.${this.entry.resourceType()}`;
    }

    this.langKey += `.${this.entry.name()}.action`;

    const uniqueHandler = this.entry.resourceType() + this.entry.name().charAt(0).toUpperCase() + this.entry.name().slice(1);

    if (this[uniqueHandler]) return this[uniqueHandler]();

    return this.genericHandler();
  }

  /**
   * @returns {string}
   */
  genericHandler() {
    let format = this.entry.format();

    // If there are any objects, convert them to strings using the buildResourceName() method
    Object.keys(format).map((key, index) => {
      if (typeof format[key] !== 'object') return;

      let type = format[key].type || key;

      if (!this[type]) type = 'guessResourceName';

      // The core code tries to get the displayName attribute when the
      // translation parameter key is named 'user', even if the value is a string
      // so we have no choice but to add some ugly hackish code here
      format[key === 'user' ? 'u' : key] = this[type](key);

      if (key === 'user') delete format.user;
    });

    Object.keys(format).map((key, index) => {
      format[key] = <strong>{format[key]}</strong>;
    });

    return app.translator.trans(this.langKey, format);
  }

  /**
   * Tries to build JSX representing the resource
   *
   * @param key
   * @returns {string}
   */
  guessResourceName(key) {
    const format = this.entry.format()[key] || {};
    let name = format.title || '';

    if (format.id) {
      format.version = `#${format.id}`;
    }

    if (format.version) {
      name = [name, <i> ({format.version})</i>];
    }

    if (format.icon) {
      name = [
        <span className="Badge ActionLogExtensionIcon" style={format.icon}>
          {icon(format.icon.name)}
        </span>,
        name,
      ];
    }

    if (format.link) {
      name = <a href={format.link}>{name}</a>;
    }

    return name;
  }

  /**
   * Special handler for discussion tagging actions
   */
  discussionTagged() {
    const format = this.entry.format();

    if (format.tags.items.length && format.oldTags.items.length) this.langKey += '.add_remove';
    else if (format.tags.items.length) this.langKey += '.add';
    else this.langKey += '.remove';

    const tagTextConstructor = (tags) =>
      app.translator.transChoice(Formatter.tagsText, tags.length, {
        tags: tagsLabel(
          tags.map((attributes) => {
            return new Tag({ attributes });
          })
        ),
      });

    format.tags = tagTextConstructor(format.tags.items);
    format.oldTags = tagTextConstructor(format.oldTags.items);
    format.discussion = <strong>{this.guessResourceName('discussion')}</strong>;

    return app.translator.trans(this.langKey, format);
  }

  tag(key) {
    return tagsLabel([new Tag({ attributes: this.entry.format()[key] })]);
  }
}
