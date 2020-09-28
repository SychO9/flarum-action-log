import SettingsModal from 'flarum/components/SettingsModal';
import Switch from 'flarum/components/Switch';
import Button from 'flarum/components/Button';
import icon from 'flarum/helpers/icon';

export default class ActionLogSettingsModal extends SettingsModal {
  oninit(vnode) {
    super.oninit(vnode);

    this.excludedLoggingSetting = this.setting('sycho-action-log.excluded_logging', JSON.stringify([]));
  }

  title() {
    return app.translator.trans('sycho-action-log.admin.settings');
  }

  form() {
    const actions = this.attrs.actions.items;
    const icons = this.attrs.actions.icons;

    return [
      <p>{app.translator.trans('sycho-action-log.admin.action_settings')}</p>,
      Object.keys(actions).map((key) => (
        <div className="ActionLogSettings-logTypes">
          <h3>
            <span>{app.translator.trans(`sycho-action-log.admin.actions.${key}.label`)}</span>
          </h3>
          {Object.keys(actions[key]).map((resourceType) => (
            <div className="ActionLogSettings-resourceTypes">
              <h4>
                {app.translator.trans(`sycho-action-log.admin.actions.${key}.${resourceType}.label`)}
                <span className="ActionLog-titleIcon">{icon(icons.resourceTypes[resourceType])}</span>
              </h4>
              {actions[key][resourceType].map((action) => (
                <div className="Form-group">
                  <Switch
                    state={!this.getExcludedLoggingValue().includes(`${key}.${resourceType}.${action}`)}
                    onchange={this.switch.bind(this, key, resourceType, action)}
                  >
                    {app.translator.trans(`sycho-action-log.admin.actions.${key}.${resourceType}.${action}.label`)}
                    <span className="ActionLog-titleIcon">{icon(icons.actionNames[action])}</span>
                  </Switch>
                </div>
              ))}
            </div>
          ))}
        </div>
      )),
    ];
  }

  getExcludedLoggingValue() {
    return JSON.parse(this.excludedLoggingSetting());
  }

  switch(key, resourceType, action, value) {
    const actionName = `${key}.${resourceType}.${action}`;
    let excludedLogging = this.getExcludedLoggingValue();

    if (!value) excludedLogging.push(actionName);
    else excludedLogging = excludedLogging.filter((item) => item !== actionName);

    this.excludedLoggingSetting(JSON.stringify(excludedLogging));
  }
}
