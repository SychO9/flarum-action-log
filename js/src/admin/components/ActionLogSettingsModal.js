import SettingsModal from 'flarum/components/SettingsModal';
import Switch from 'flarum/components/Switch';
import Button from 'flarum/components/Button';

export default class ActionLogSettingsModal extends SettingsModal {
  init() {
    super.init();

    this.excludedLoggingSetting = this.setting('sycho-action-log.excluded_logging', JSON.stringify([]));
  }

  title() {
    return app.translator.trans('sycho-action-log.admin.settings');
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

    return items;
  }

  form() {
    const actions = this.actions();

    return Object.keys(actions).map(key => (
      <div className="ActionLogSettings-logTypes">
        <h3>
          <span>{app.translator.trans(`sycho-action-log.admin.actions.${key}.label`)}</span>
        </h3>
        {Object.keys(actions[key]).map(resourceType => (
          <div className="ActionLogSettings-resourceTypes">
            <h4>{app.translator.trans(`sycho-action-log.admin.actions.${key}.${resourceType}.label`)}</h4>
            {actions[key][resourceType].map(action => (
              <div className="Form-group">
                <Switch
                  state={!this.getExcludedLoggingValue().includes(`${key}.${resourceType}.${action}`)}
                  onchange={this.switch.bind(this, key, resourceType, action)}
                >
                  {app.translator.trans(`sycho-action-log.admin.actions.${key}.${resourceType}.${action}.label`)}
                </Switch>
              </div>
            ))}
          </div>
        ))}
      </div>
    ));
  }

  getExcludedLoggingValue() {
    return JSON.parse(this.excludedLoggingSetting());;
  }

  switch(key, resourceType, action, value) {
    const actionName = `${key}.${resourceType}.${action}`;
    let excludedLogging = this.getExcludedLoggingValue();

    if (!value)
      excludedLogging.push(actionName);
    else
      excludedLogging = excludedLogging.filter(item => item !== actionName);

    this.excludedLoggingSetting(JSON.stringify(excludedLogging));
  }
}
