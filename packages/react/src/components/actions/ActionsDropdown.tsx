import {FunctionComponent} from 'react';

import {DropdownConnected} from '../dropdown/DropdownConnected';
import {Svg} from '../svg/Svg';
import {IActionOptions} from './Action';
import {ActionDropdownItem} from './ActionDropdownItem';

export interface IActionsDropdownProps {
    actions: IActionOptions[];
    id?: string;
    moreLabel?: string;
    disabled?: boolean;
}

export const MORE_LABEL: string = 'More';

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
        <Svg key="action-dropdown-toggle-icon" svgName="more" className="action-icon" svgClass="icon icon-medium" />,
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
 * @deprecated use ActionsDropdown directly instead
 */
export const ActionsDropdownConnected = ActionsDropdown;
