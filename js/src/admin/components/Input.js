import Component from 'flarum/Component';
import icon from 'flarum/helpers/icon';

export default class Input extends Component {
  view() {
    this.props.className = this.props.className || '';

    this.props.className += ' ActionLog-FormControl';

    if (this.props.icon) {
      this.props.className += ' hasIcon';
    }

    let className = `ActionLog-input ${this.props.parentClassName || ''}`;

    return (
      <div className={className}>
        {this.icon()}
        <input {...this.props} />
      </div>
    );
  }

  icon() {
    if (!this.props.icon) return;

    const iconValue = this.props.icon;

    delete this.props.icon;

    return <span class="ActionLog-inputIcon">{icon(iconValue)}</span>;
  }
}
