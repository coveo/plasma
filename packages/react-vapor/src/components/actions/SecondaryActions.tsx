import * as React from 'react';
import {isEmpty} from 'underscore';

import {IActionOptions} from './Action';
import {ActionsDropdown} from './ActionsDropdown';
import {PrimaryActionConnected} from './PrimaryActionConnected';

export interface ISecondaryActionsProps {
    actions: IActionOptions[];
    id?: string;
    moreLabel?: string;
    disabled?: boolean;
}

export const SecondaryActions: React.FunctionComponent<ISecondaryActionsProps> = ({
    actions,
    id,
    moreLabel,
    disabled = false,
}) => {
    let lastFilteredAction: IActionOptions = null;
    const filteredActions = actions
        // filter out disabled actions
        .filter((action: IActionOptions) => action.separator || action.enabled || action.hideDisabled === false)
        // Filter out all separator that are preceded by another separator
        .filter((action: IActionOptions) => {
            if (!action.separator || (action.separator && lastFilteredAction && !lastFilteredAction.separator)) {
                lastFilteredAction = action;
                return true;
            }
            return false;
        })
        // Filter out the last action if it's a separator
        .filter((action: IActionOptions, index: number, actionItems: IActionOptions[]) => {
            return index < actionItems.length - 1 || !action.separator;
        });

    if (isEmpty(filteredActions)) {
        return null;
    } else {
        const actionsItems: JSX.Element =
            filteredActions?.length === 1 ? (
                <PrimaryActionConnected action={filteredActions[0]} parentId={id} />
            ) : (
                <ActionsDropdown
                    moreLabel={moreLabel}
                    actions={filteredActions}
                    id={`${id}_actionsDropdown`}
                    disabled={disabled}
                />
            );
        return (
            <div className="dropdown action primary-action" style={{cursor: disabled ? 'default' : 'pointer'}}>
                {actionsItems}
            </div>
        );
    }
};

/**
 * @deprecated use SecondaryActions directly
 */
export const SecondaryActionsConnected = SecondaryActions;
