import classNames from 'classnames';
import {MouseEvent, Children, Component} from 'react';
import * as ReactDOM from 'react-dom';
import {IInputProps, Input} from '../input/Input';
import {CheckboxContext} from './CheckboxContext';

export interface ICheckboxOwnProps {
    /**
     * A callback function that gets executed after the checkbox is clicked
     *
     * @param wasChecked Whether the checkbox was checked before it got toggled
     */
    handleOnClick?: (wasChecked: boolean) => void;
    /**
     * Makes the checkbox stand on its own line
     */
    clearSides?: boolean;
    /**
     * The id of the element that gives a label to this checkbox. Not needed when using the Label component in the checkbox's children.
     */
    'aria-labelledby'?: string;
}

export interface ICheckboxStateProps {
    /**
     * Whether the checkbox is disabled initially. Only useful with connected checkboxes because their disabled state is managed by the PlasmaState.
     */
    defaultDisabled?: boolean;
}

export interface ICheckboxProps extends ICheckboxOwnProps, ICheckboxStateProps, IInputProps {}

export class Checkbox extends Component<ICheckboxProps> {
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

    private handleOnClick(e: MouseEvent<HTMLElement>) {
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
        const innerInputClasses: string = classNames(
            {'checkbox checkbox-label': !!this.props.disabledTooltip},
            'react-vapor-checkbox',
            this.props.innerInputClasses
        );
        const hasChildren = Children.count(this.props.children) > 0;
        const labelId = hasChildren && this.props.id ? `checkbox-${this.props.id}` : labeledBy;
        return (
            <Input
                {...attributes}
                classes={[classes]}
                innerInputClasses={[innerInputClasses]}
                type="checkbox"
                onClick={(e: MouseEvent<HTMLElement>) => this.handleOnClick(e)}
                readOnly
                tooltipClasses={this.props.disabledTooltip ? 'flex center-align' : null}
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
