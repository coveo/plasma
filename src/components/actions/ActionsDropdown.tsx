import * as React from 'react';
import * as _ from 'underscore';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';
import {Dropdown} from '../dropdown/Dropdown';
import {DropdownConnected} from '../dropdown/DropdownConnected';
import {Svg} from '../svg/Svg';
import {IActionOptions} from './Action';
import {LinkAction} from './LinkAction';
import {TriggerAction} from './TriggerAction';
import {TriggerActionConnected} from './TriggerActionConnected';

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
        const actions: JSX.Element[] = _.map(this.props.actions, (action: IActionOptions, index: number): JSX.Element => {
            const actionKey: string = 'action-' + index;
            if (action.separator) {
                return <li className='divider' key={actionKey}></li>;
            }

            if (action.link) {
                return <li key={actionKey}><LinkAction action={action} simple={true} /></li>;
            }

            if (this.props.withReduxState) {
                return <li key={actionKey}><TriggerActionConnected action={action} simple={true} parentId={this.props.id} /></li>;
            }
            return <li key={actionKey}><TriggerAction action={action} simple={true} /></li>;
        });
        const toggleContent: JSX.Element[] = [
            <Svg key='action-dropdown-toggle-icon' svgName='more' className='action-icon' svgClass='icon icon-medium fill-medium-blue' />,
            <span key='action-dropdown-toggle-label' className='action-label'>{moreLabel}</span>,
        ];

        return (
            this.props.withReduxState ?
                <DropdownConnected toggleContent={toggleContent} dropdownItems={actions} id={this.props.id} /> :
                <Dropdown toggleContent={toggleContent} dropdownItems={actions} />
        );
    }
}
