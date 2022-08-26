import {Component} from 'react';

const DEFAULT_TITLE = 'Delete this entry';

export interface IDeleteInputActionProps {
    title?: string;
    onClick: () => void;
}

/**
 * @deprecated Use Mantine instead
 */
export class DeleteInputAction extends Component<IDeleteInputActionProps, any> {
    render() {
        const title = this.props.title ? this.props.title : DEFAULT_TITLE;
        return (
            <div className="input-actions" onClick={() => this.props.onClick()}>
                <button className="js-add-value-button" type="button">
                    <i className="delete-action" title={title}></i>
                </button>
            </div>
        );
    }
}
