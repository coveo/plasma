import {Icon, MoreSize24Px} from '@coveord/plasma-react-icons';
import classNames from 'clsx';
import {ClassAttributes, Component} from 'react';

import {TooltipPlacement} from '../../utils/TooltipUtils';
import {Tooltip} from '../tooltip/Tooltip';

export interface IConfirmButtonLabel {
    cancel: string;
    confirm: string;
}

export interface IConfirmData {
    confirmType: string;
    confirmLabel?: string;
    buttonLabels?: IConfirmButtonLabel;
}

export interface IBaseActionOptions {
    enabled: boolean;
    name?: string;
    link?: string;
    target?: string;
    primary?: boolean;
    tooltip?: string;
    tooltipPlacement?: 'left' | 'right' | 'top' | 'bottom';
    hideDisabled?: boolean;
    onClick?: () => void;
}

export interface IActionOptions extends IBaseActionOptions {
    icon?: Icon;
    iconClass?: string;
    id?: string;
    trigger?: () => void;
    unrepeatable?: boolean;
    callOnDoubleClick?: boolean;
    requiresConfirmation?: IConfirmData;
    separator?: boolean;
    grouped?: boolean;
    subActions?: IActionOptions[];
    hidden?: boolean;
}

export interface IBasicActionProps {
    action: IActionOptions;
    simple?: boolean;
}

export interface IActionProps extends ClassAttributes<Action>, IBasicActionProps {}

/**
 * @deprecated Use Mantine instead
 */
export class Action extends Component<IActionProps, any> {
    static defaultProps: Partial<IActionOptions> = {
        hideDisabled: true,
    };

    render() {
        const {icon, iconClass, id, name, tooltipPlacement, tooltip} = this.props.action;
        const ActionIcon = icon;
        const actionIcon: JSX.Element = icon ? (
            <ActionIcon className={classNames(iconClass, 'action-icon')} />
        ) : (
            <MoreSize24Px className={classNames(iconClass, 'action-icon action-icon-more')} />
        );

        const inside: string | JSX.Element = this.props.simple ? (
            name
        ) : (
            <span className="inline-flex flex-center">
                {actionIcon}
                <span className="action-label" data-trigger={id || name}>
                    {name}
                </span>
            </span>
        );
        const placement: string = tooltipPlacement || TooltipPlacement.Right;
        const wholeAction: JSX.Element = tooltip ? (
            <Tooltip title={tooltip} placement={placement}>
                {inside}
            </Tooltip>
        ) : (
            <span>{inside}</span>
        );

        return wholeAction;
    }
}
