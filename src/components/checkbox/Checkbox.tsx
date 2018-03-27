import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IInputProps, Input} from '../input/Input';

export interface ICheckboxProps extends IInputProps {
    handleOnClick?: (isChecked: boolean) => void;
}

export class Checkbox extends React.Component<ICheckboxProps, any> {
    private onClick(e: React.MouseEvent<HTMLElement>) {
        if (this.props.onClick) {
            e.preventDefault();
            e.stopPropagation();
            this.props.onClick(e);
        }

        if (this.props.handleOnClick) {
            this.props.handleOnClick(this.props.checked);
        }
    }

    componentDidMount() {
        this.updateIndeterminate();
    }

    componentDidUpdate() {
        this.updateIndeterminate();
    }

    private updateIndeterminate() {
        const inputElements = ReactDOM.findDOMNode(this).getElementsByTagName('input');
        if (inputElements.length) {
            inputElements[0].indeterminate = !!this.props.indeterminate;
        }
    }

    render() {
        const classes: string = classNames('coveo-checkbox-label', this.props.classes);
        const innerInputClasses: string = classNames('coveo-checkbox', this.props.innerInputClasses);
        return (
            <Input
                {...this.props}
                classes={[classes]}
                innerInputClasses={[innerInputClasses]}
                type='checkbox'
                onClick={(e: React.MouseEvent<HTMLElement>) => this.onClick(e)}
                readOnly>
                <button></button>
                {this.props.children}
            </Input>
        );
    }
}
