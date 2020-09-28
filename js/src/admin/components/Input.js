import Component from 'flarum/Component';
import icon from 'flarum/helpers/icon';

export default class Input extends Component {
  view() {
    this.attrs.className = this.attrs.className || '';

    this.attrs.className += ' ActionLog-FormControl';

    if (this.attrs.icon) {
      this.attrs.className += ' hasIcon';
    }

    let className = `ActionLog-input ${this.attrs.parentClassName || ''}`;

    return (
      <div className={className}>
        {this.icon()}
        <input {...this.attrs} />
      </div>
    );
  }

  icon() {
    if (!this.attrs.icon) return;

    const iconValue = this.attrs.icon;

    delete this.attrs.icon;

    return <span class="ActionLog-inputIcon">{icon(iconValue)}</span>;
  }
}
