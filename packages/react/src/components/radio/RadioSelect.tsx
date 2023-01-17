import classNames from 'classnames';
import {Children, cloneElement, MouseEvent, PureComponent, ReactElement} from 'react';
import * as _ from 'underscore';

import {ToggleForm} from '../childForm/ToggleForm.js';
import {Radio} from './Radio.js';
import {RadioCard} from './RadioCard.js';

export interface IRadioSelectOnChangeCallback {
    /**
     * A callback function executed when the selected Radio option changes
     *
     * @param value The value of the selected option
     * @param id The unique identifier of the radio select
     * @param e The change event
     */
    onChange?: (value: string, id?: string, e?: MouseEvent<HTMLElement>) => void;
}

export interface IRadioSelectProps extends IRadioSelectOnChangeCallback {
    /**
     * A unique identifier used to indentify the RadioSelect in the PlasmaState
     */
    id?: string;
    /**
     * See [input's name attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-name)
     */
    name?: string;
    /**
     * Additional CSS classes to set on the outermost element
     */
    className?: string;
    /**
     * When disabled, the RadioButtons cannot be selected or unselected
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * The text displayed when hovering over a disabled Radio button
     */
    disabledTooltip?: string;
    /**
     * Radio options of the RadioSelect. Each child must be a Radio or a RadioCard
     */
    children?: Array<ReactElement<typeof Radio | typeof RadioCard>> | Array<ReactElement<ToggleForm>>;
    /**
     * A callback function executed when the selected Radio option changes
     *
     * @param value The value of the selected option
     * @param id The unique identifier of the radio select
     * @param e The change event
     */
    onChangeCallback?: (value: string, id?: string, e?: MouseEvent<HTMLElement>, disabled?: boolean) => void;
}

export interface IRadioSelectConnectedProps {
    /**
     * Value of the initially selected radio option
     */
    valueOnMount?: string;
    /**
     * Value of the initially disabled radio options
     */
    disabledValuesOnMount?: string[];
}

export interface IRadioSelectDispatchProps extends IRadioSelectOnChangeCallback {
    onMount?: (id: string, valueOnMount: string, disabledValues: string[]) => void;
    onUnmount?: (id: string) => void;
}

export interface IRadioSelectStateProps {
    value?: string;
    disabledValues?: string[];
}

export interface IRadioSelectAllProps
    extends IRadioSelectProps,
        IRadioSelectConnectedProps,
        IRadioSelectDispatchProps,
        IRadioSelectStateProps {}

/**
 * @deprecated Use Mantine Radio instead
 */
export class RadioSelect extends PureComponent<IRadioSelectAllProps> {
    static defaultProps: Partial<IRadioSelectAllProps> = {
        disabled: false,
    };

    componentDidMount() {
        this.props.onMount?.(this.props.id, this.props.valueOnMount, this.props.disabledValuesOnMount);
    }

    componentWillUnmount() {
        this.props.onUnmount?.(this.props.id);
    }

    render() {
        const children = Children.map(this.props.children, (child: ReactElement<any>) =>
            cloneElement(child, {
                name: child.props.name || this.props.name,
                checked: this.props.value === child.props.value,
                disabled: this.isValueDisabled(child.props.value),
                disabledTooltip: child.props.disabledTooltip || this.props.disabledTooltip,
                outerContainerClass: child.props.outerContainerClass,
                outerElementInContainer: child.props.outerElementInContainer,
                onClick: (e: MouseEvent<HTMLElement>) => {
                    child.props.onClick && child.props.onClick(e);
                    this.handleToggle(child.props.value, e);
                },
            })
        );

        return <div className={classNames('form-control radio-select', this.props.className)}>{children}</div>;
    }

    private handleToggle(value: string, e: MouseEvent<HTMLElement>) {
        if (!this.props.disabled) {
            this.props.onChange?.(value, this.props.id, e);
        }
        this.props.onChangeCallback?.(value, this.props.id, e, this.props.disabled);
    }

    private isValueDisabled(childValue: string): boolean {
        return (
            this.props.disabled || (!!this.props.disabledValues && _.contains(this.props.disabledValues, childValue))
        );
    }
}
