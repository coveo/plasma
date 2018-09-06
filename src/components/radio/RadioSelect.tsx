import * as React from 'react';
import * as _ from 'underscore';
import {ToggleForm} from '../childForm/ToggleForm';
import {Radio} from './Radio';

export interface IRadioSelectProps {
    id?: string;
    name?: string;
    disabled?: boolean;
    children?: Array<React.ReactElement<Radio>> | Array<React.ReactElement<ToggleForm>>;
    onChangeCallback?: (value?: string, e?: React.MouseEvent<HTMLElement>) => any;
    /**
     * used in RadioSelectConnected component only
     */
    valueOnMount?: string;
    disabledValuesOnMount?: string[];
}

export interface IRadioSelectDispatchProps {
    onMount?: (id: string, valueOnMount: string, disabledValues: string[]) => void;
    onUnmount?: (id: string) => void;
    onChange?: (value: string, id?: string, e?: React.MouseEvent<HTMLElement>) => void;
}

export interface IRadioSelectStateProps {
    value?: string;
    disabledValues?: string[];
}

export interface IRadioSelectAllProps extends IRadioSelectProps, IRadioSelectDispatchProps, IRadioSelectStateProps {}

export class RadioSelect extends React.Component<IRadioSelectAllProps, any> {
    private handleToggle(value: string, e: React.MouseEvent<HTMLElement>) {
        if (this.props.onChange) {
            this.props.onChange(value, this.props.id, e);
        }

        if (this.props.onChangeCallback) {
            this.props.onChangeCallback(value, e);
        }
    }

    componentWillMount() {
        if (this.props.onMount) {
            this.props.onMount(this.props.id, this.props.valueOnMount, this.props.disabledValuesOnMount);
        }
    }

    componentWillUnmount() {
        if (this.props.onUnmount) {
            this.props.onUnmount(this.props.id);
        }
    }

    render() {
        const children = React.Children.map(this.props.children, (child: React.ReactElement<any>) => {
            return React.cloneElement(child, {
                name: child.props.name || this.props.name,
                checked: this.props.value === child.props.value,
                disabled: this.isValueDisabled(child.props.value),
                onClick: (e: React.MouseEvent<HTMLElement>) => {
                    child.props.onClick && child.props.onClick(e);
                    this.handleToggle(child.props.value, e);
                },
            });
        });

        return (
            <div className='form-control radio-select'>
                {children}
            </div>
        );
    }

    private isValueDisabled(childValue: string): boolean {
        return this.props.disabled || (!!this.props.disabledValues && _.contains(this.props.disabledValues, childValue));
    }
}
