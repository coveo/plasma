import * as React from 'react';
import {Svg} from '../svg/Svg';
import {Tooltip} from '../tooltip/Tooltip';

export interface IConfirmButtonLabel {
    cancel: string;
    confirm: string;
}

export interface IConfirmData {
    confirmType: string;
    buttonLabels?: IConfirmButtonLabel;
}

export interface IBaseActionOptions {
    enabled: boolean;
    name?: string;
    link?: string;
    target?: string;
    primary?: boolean;
    tooltip?: string;
    tooltipPlacement?: string;
    hideDisabled?: boolean;
    onClick?: () => void;
}

export interface IActionOptions extends IBaseActionOptions {
    icon?: string;
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

export interface IActionProps extends React.ClassAttributes<Action>, IBasicActionProps {}

export class Action extends React.Component<IActionProps, any> {
    static defaultProps: Partial<IActionOptions> = {
        hideDisabled: true,
    };

    render() {
        const actionIcon: JSX.Element = this.props.action.icon
            ? <Svg svgName={this.props.action.icon} className='action-icon' svgClass='icon fill-medium-blue' />
            : <Svg svgName='more' className='action-icon action-icon-more' svgClass='icon icon-medium fill-medium-blue' />;
        const inside: string | JSX.Element = this.props.simple ? this.props.action.name :
            <span className='inline-flex flex-center'>
                {actionIcon}
                <span className='action-label'>{this.props.action.name}</span>
            </span>;
        const tooltipPlacement: string = this.props.action.tooltipPlacement || 'right';
        const wholeAction: JSX.Element = this.props.action.tooltip
            ? (
                <Tooltip title={this.props.action.tooltip} placement={tooltipPlacement}>
                    {inside}
                </Tooltip>
            )
            : (
                <span>
                    {inside}
                </span>
            );

        return wholeAction;
    }
}
