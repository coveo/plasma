import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import {ToggleForm} from '../childForm/ToggleForm';
import {Radio} from './Radio';

export interface IRadioSelectOnChangeCallback {
    onChange?: (value: string, id?: string, e?: React.MouseEvent<HTMLElement>) => void;
}

export interface IRadioSelectProps extends IRadioSelectOnChangeCallback {
    id?: string;
    name?: string;
    className?: string;
    value?: string;
    disabled?: boolean;
    disabledTooltip?: string;
    children?: Array<React.ReactElement<Radio>> | Array<React.ReactElement<ToggleForm>>;
    onChangeCallback?: (value: string, id?: string, e?: React.MouseEvent<HTMLElement>) => void;
}

export interface IRadioSelectConnectedProps {
    valueOnMount?: string;
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

export class RadioSelect extends React.PureComponent<IRadioSelectAllProps> {
    componentDidMount() {
        this.props.onMount?.(this.props.id, this.props.valueOnMount, this.props.disabledValuesOnMount);
    }

    componentWillUnmount() {
        this.props.onUnmount?.(this.props.id);
    }

    render() {
        const children = React.Children.map(this.props.children, (child: React.ReactElement<any>) => {
            return React.cloneElement(child, {
                name: child.props.name || this.props.name,
                checked: this.props.value === child.props.value,
                disabled: this.isValueDisabled(child.props.value),
                disabledTooltip: this.props.disabledTooltip,
                onClick: (e: React.MouseEvent<HTMLElement>) => {
                    child.props.onClick && child.props.onClick(e);
                    this.handleToggle(child.props.value, e);
                },
            });
        });

        return <div className={classNames('form-control radio-select', this.props.className)}>{children}</div>;
    }

    private handleToggle(value: string, e: React.MouseEvent<HTMLElement>) {
        this.props.onChange?.(value, this.props.id, e);
        this.props.onChangeCallback?.(value, this.props.id, e);
    }

    private isValueDisabled(childValue: string): boolean {
        return (
            this.props.disabled || (!!this.props.disabledValues && _.contains(this.props.disabledValues, childValue))
        );
    }
}
