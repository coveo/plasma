import * as React from 'react';

const DEFAULT_TITLE = 'Add a new entry';

export interface IAddInputActionProps {
    title?: string;
    onClick?: () => void;
}

export class AddInputAction extends React.Component<IAddInputActionProps, any> {
    private handleClick() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    render() {
        const title = this.props.title ? this.props.title : DEFAULT_TITLE;
        return (
            <div className="input-actions" onClick={() => this.handleClick()}>
                <button className="js-add-value-button">
                    <i className="add-action" title={title}></i>
                </button>
            </div>
        );
    }
}
