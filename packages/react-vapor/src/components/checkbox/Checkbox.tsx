import classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IInputProps, Input} from '../input/Input';
import {CheckboxContext} from './CheckboxContext';

export interface ICheckboxOwnProps {
    handleOnClick?: (wasChecked: boolean) => void;
    clearSides?: boolean;
    'aria-labelledby'?: string;
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
        const {clearSides, children, 'aria-labelledby': labeledBy, handleOnClick, ...attributes} = this.props;
        const classes: string = classNames(
            'checkbox checkbox-label',
            {disabled: !!this.props.disabled, 'checkbox-clear': this.props.clearSides},
            this.props.classes
        );
        const innerInputClasses: string = classNames('react-vapor-checkbox', this.props.innerInputClasses);
        const hasChildren = React.Children.count(this.props.children) > 0;
        const labelId = hasChildren && this.props.id ? `checkbox-${this.props.id}` : labeledBy;
        return (
            <Input
                {...attributes}
                classes={[classes]}
                innerInputClasses={[innerInputClasses]}
                type="checkbox"
                onClick={(e: React.MouseEvent<HTMLElement>) => this.handleOnClick(e)}
                readOnly
            >
                <button
                    type="button"
                    role="checkbox"
                    aria-checked={this.props.checked}
                    aria-labelledby={labelId}
                    tabIndex={0}
                    disabled={!!this.props.disabled}
                />
                <CheckboxContext.Provider value={{labelId}}>{this.props.children}</CheckboxContext.Provider>
            </Input>
        );
    }
}
