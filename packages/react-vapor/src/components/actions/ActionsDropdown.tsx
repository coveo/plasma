import * as React from 'react';
import * as _ from 'underscore';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';
import {Dropdown} from '../dropdown/Dropdown';
import {DropdownConnected} from '../dropdown/DropdownConnected';
import {Svg} from '../svg/Svg';
import {IActionOptions} from './Action';
import {ActionDropdownItem} from './ActionDropdownItem';

export interface IActionsDropdownOwnProps extends React.ClassAttributes<ActionsDropdown> {
    actions: IActionOptions[];
    id?: string;
    moreLabel?: string;
}

export interface IActionsDropdownStateProps extends IReduxStatePossibleProps {
    isOpened?: boolean;
}

export interface IActionsDropdownProps extends IActionsDropdownOwnProps, IActionsDropdownStateProps {}

export const MORE_LABEL: string = 'More';

export class ActionsDropdown extends React.Component<IActionsDropdownProps, any> {
    render() {
        const moreLabel: string = this.props.moreLabel || MORE_LABEL;

        let lastFilteredAction: IActionOptions = null;
        const actions: JSX.Element[] = _.chain(this.props.actions)
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
            .filter((action: IActionOptions, index: number, filteredActions: IActionOptions[]) => {
                return index < filteredActions.length - 1 || !action.separator;
            })
            .map((action: IActionOptions, index: number) => (
                <ActionDropdownItem
                    key={`action-${action.id || index}`}
                    action={action}
                    parentId={this.props.id}
                    withReduxState={this.props.withReduxState}
                />
            ))
            .value();
        const toggleContent: JSX.Element[] = [
            <Svg
                key="action-dropdown-toggle-icon"
                svgName="more"
                className="action-icon"
                svgClass="icon icon-medium fill-medium-blue"
            />,
            <span key="action-dropdown-toggle-label" className="action-label" data-trigger="more">
                {moreLabel}
            </span>,
        ];

        return this.props.withReduxState ? (
            <DropdownConnected toggleContent={toggleContent} dropdownItems={actions} id={this.props.id} />
        ) : (
            <Dropdown toggleContent={toggleContent} dropdownItems={actions} />
        );
    }
}
