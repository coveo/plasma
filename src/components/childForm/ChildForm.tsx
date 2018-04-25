import * as React from 'react';
import {ValidComponentChildren} from '../../utils/ValidComponentChildren';

export interface IChildFormProps {
    disabled?: boolean;
}

export class ChildForm extends React.Component<IChildFormProps, any> {
    render() {
        const children = ValidComponentChildren.map(this.props.children, (child: React.ReactElement<any>) => {
            return React.cloneElement(child, {
                disabled: !!this.props.disabled,
            });
        }, null);

        return (
            <div className='coveo-child'>
                {children}
            </div>
        );
    }
}
