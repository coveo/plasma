import {FunctionComponent} from 'react';

import {IActionOptions} from './Action';
import {LinkAction} from './LinkAction';
import {TriggerActionConnected} from './TriggerActionConnected';

export interface IActionDropdownItemProps {
    action: IActionOptions;
    parentId?: string;
}

/**
 * @deprecated Use Mantine instead
 */
export const ActionDropdownItem: FunctionComponent<IActionDropdownItemProps> = ({parentId, action}) => {
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

    return (
        <li>
            <TriggerActionConnected action={action} simple={true} parentId={parentId} />
        </li>
    );
};
