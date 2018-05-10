import * as React from 'react';
import {ToggleForm} from '../childForm/ToggleForm';
import {Radio} from './Radio';

export interface IRadioSelectProps {
    name?: string;
    value?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
    children?: Array<React.ReactElement<Radio>> | Array<React.ReactElement<ToggleForm>>;
}

export class RadioSelect extends React.Component<IRadioSelectProps, any> {
    private handleToggle(value: string) {
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }

    render() {
        const children = React.Children.map(this.props.children, (child: React.ReactElement<any>) => {
            return React.cloneElement(child, {
                name: child.props.name || this.props.name,
                checked: this.props.value === child.props.value,
                disabled: this.props.disabled,
                onClick: (e: React.MouseEvent<HTMLElement>) => {
                    child.props.onClick && child.props.onClick(e);
                    this.handleToggle(child.props.value);
                },
            });
        });

        return (
            <div className='form-control radio-select'>
                {children}
            </div>
        );
    }
}
