import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IInputProps, Input} from '../input/Input';

export interface ICheckboxOwnProps {
    handleOnClick?: (isChecked: boolean) => void;
}

export interface ICheckboxStateProps {
    defaultDisabled?: boolean;
}

export interface ICheckboxProps extends ICheckboxOwnProps, ICheckboxStateProps, IInputProps {}

export class Checkbox extends React.Component<ICheckboxProps> {
    componentDidMount() {
        this.updateIndeterminate();
    }

    componentDidUpdate() {
        this.updateIndeterminate();
    }

    private updateIndeterminate() {
        const inputElements = (ReactDOM.findDOMNode(this) as Element).getElementsByTagName('input');
        if (inputElements.length) {
            inputElements[0].indeterminate = !!this.props.indeterminate;
        }
    }

    private handleOnClick(e: React.MouseEvent<HTMLElement>) {
        if (!this.props.disabled) {
            if (this.props.onClick) {
                e.preventDefault();
                e.stopPropagation();
                this.props.onClick(e);
            }
            if (this.props.handleOnClick) {
                this.props.handleOnClick(this.props.checked);
            }
        }
    }

    render() {
        const classes: string = classNames('coveo-checkbox-label', {disabled: !!this.props.disabled}, this.props.classes);
        const innerInputClasses: string = classNames('coveo-checkbox', 'react-vapor-checkbox', this.props.innerInputClasses);
        return (
            <Input
                {...this.props}
                classes={[classes]}
                innerInputClasses={[innerInputClasses]}
                type='checkbox'
                onClick={(e: React.MouseEvent<HTMLElement>) => this.handleOnClick(e)}
                readOnly
            >
                <button type='button' disabled={!!this.props.disabled}></button>
                {this.props.children}
            </Input>
        );
    }
}
