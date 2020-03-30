import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import {ValidComponentChildren} from '../../utils/ValidComponentChildren';

export interface IChildFormProps extends React.HTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
}

export class ChildForm extends React.Component<IChildFormProps> {
    render() {
        const children = ValidComponentChildren.map(
            this.props.children,
            (child: React.ReactElement<any>) => {
                return React.cloneElement(child, {
                    disabled: !!this.props.disabled,
                });
            },
            null
        );

        return (
            <div {..._.omit(this.props, 'disabled')} className={classNames('coveo-child', this.props.className)}>
                {children}
            </div>
        );
    }
}
