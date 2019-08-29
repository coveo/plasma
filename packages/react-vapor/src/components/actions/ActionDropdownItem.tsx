import * as React from 'react';
import {IActionOptions} from './Action';
import {LinkAction} from './LinkAction';
import {TriggerAction} from './TriggerAction';
import {TriggerActionConnected} from './TriggerActionConnected';

export interface IActionDropdownItemProps {
    action: IActionOptions;
    withReduxState: boolean;
    parentId?: string;
}

export const ActionDropdownItem: React.FunctionComponent<IActionDropdownItemProps> = ({
    parentId,
    action,
    withReduxState,
}) => {
    if (action.separator) {
        return <li className="divider" />;
    }

    if (action.link) {
        return (
            <li>
                <LinkAction action={action} simple={true} />
            </li>
        );
    }

    if (withReduxState) {
        return (
            <li>
                <TriggerActionConnected action={action} simple={true} parentId={parentId} />
            </li>
        );
    }
    return (
        <li>
            <TriggerAction action={action} simple={true} />
        </li>
    );
};
