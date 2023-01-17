import classNames from 'classnames';
import {ReactElement, MouseEvent, Children, cloneElement, Component} from 'react';
import {Input} from '../input/Input.js';
import {ChildForm} from './ChildForm.js';

/**
 * @deprecated Use a form or the class coveo-parent for the style instead
 */

export interface IToggleFormProps {
    classes?: string[];
    checked?: boolean;
    children?: ReactElement<Input | typeof ChildForm> | Array<ReactElement<Input | typeof ChildForm>>;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    value?: string;
}

/**
 * @deprecated Use Mantine instead
 */
export class ToggleForm extends Component<IToggleFormProps, any> {
    private handleClick(e: MouseEvent<HTMLElement>) {
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    private getChildren() {
        return Children.map(this.props.children, (child: ReactElement<any>) => {
            if (child.type === ChildForm) {
                return this.cloneChildForm(child);
            } else {
                return this.cloneControl(child);
            }
        });
    }

    private cloneControl(child: ReactElement<any>) {
        return cloneElement(child, {
            checked: this.props.checked,
            onClick: (e: MouseEvent<HTMLElement>) => this.handleClick(e),
        });
    }

    private cloneChildForm(child: ReactElement<any>) {
        return cloneElement(child, {
            disabled: !this.props.checked,
        });
    }

    render() {
        const classes: string = classNames('coveo-parent', this.props.classes);
        const children = this.getChildren();

        return <div className={classes}>{children}</div>;
    }
}
