import classNames from 'classnames';
import * as React from 'react';
import {Input} from '../input/Input';
import {ChildForm} from './ChildForm';

export interface IToggleFormProps {
    classes?: string[];
    checked?: boolean;
    children?: React.ReactElement<Input | ChildForm> | Array<React.ReactElement<Input | ChildForm>>;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    value?: string;
}

export class ToggleForm extends React.Component<IToggleFormProps, any> {
    private handleClick(e: React.MouseEvent<HTMLElement>) {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    private getChildren() {
        return React.Children.map(this.props.children, (child: React.ReactElement<any>) => {
            if (child.type === ChildForm) {
                return this.cloneChildForm(child);
            } else {
                return this.cloneControl(child);
            }
        });
    }

    private cloneControl(child: React.ReactElement<any>) {
        return React.cloneElement(child, {
            checked: this.props.checked,
            onClick: (e: React.MouseEvent<HTMLElement>) => this.handleClick(e),
        });
    }

    private cloneChildForm(child: React.ReactElement<any>) {
        return React.cloneElement(child, {
            disabled: !this.props.checked,
        });
    }

    render() {
        const classes: string = classNames('coveo-parent', this.props.classes);
        const children = this.getChildren();

        return <div className={classes}>{children}</div>;
    }
}
