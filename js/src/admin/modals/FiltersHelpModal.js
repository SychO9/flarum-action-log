import Modal from 'flarum/components/Modal';

export default class FiltersHelpModal extends Modal {
  content() {
    return (
      <div className="Modal-body">
        {app.translator.trans('sycho-action-log.admin.gambits.description')}
        <ul>
          {this.gambits().map((gambit) => (
            <li>
              <strong>{gambit}:</strong> {app.translator.trans(`sycho-action-log.admin.gambits.items.${gambit}`)}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  title() {
    return app.translator.trans('sycho-action-log.admin.gambits.label');
  }

  gambits() {
    return ['type', 'action', 'resource', 'actor'];
  }
}
