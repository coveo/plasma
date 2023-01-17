import {MoreSize24Px} from '@coveord/plasma-react-icons';
import {FunctionComponent} from 'react';

import {DropdownConnected} from '../dropdown/DropdownConnected.js';
import {IActionOptions} from './Action.js';
import {ActionDropdownItem} from './ActionDropdownItem.js';

export interface IActionsDropdownProps {
    actions: IActionOptions[];
    id?: string;
    moreLabel?: string;
    disabled?: boolean;
}

export const MORE_LABEL: string = 'More';

/**
 * @deprecated Use Mantine instead
 */
export const ActionsDropdown: FunctionComponent<IActionsDropdownProps> = ({
    actions,
    moreLabel,
    id,
    disabled = false,
}) => {
    const label = moreLabel || MORE_LABEL;
    const actionItems = actions?.map((action: IActionOptions, index: number) => (
        <ActionDropdownItem key={`action-${action.id ?? index}`} action={action} parentId={id} />
    ));

    const toggleContent: JSX.Element[] = [
        <MoreSize24Px className="action-icon" />,
        <span key="action-dropdown-toggle-label" className="action-label" data-trigger="more">
            {label}
        </span>,
    ];

    return (
        <DropdownConnected
            ariaLabel={label}
            toggleContent={toggleContent}
            dropdownItems={actionItems}
            id={id}
            disabled={disabled}
        />
    );
};

/**
 * @deprecated Use Mantine instead
 */
export const ActionsDropdownConnected = ActionsDropdown;
