import classNames from 'classnames';
import * as React from 'react';

import {TooltipPlacement} from '../../utils/TooltipUtils';
import {Tooltip} from '../tooltip/Tooltip';

export interface ITabOwnProps {
    groupId?: string;
    id?: string;
    title: string;
    disabled?: boolean;
    tooltip?: string;
}

export interface ITabStateProps {
    isActive: boolean;
}

export interface ITabDispatchProps {
    onRender: () => void;
    onDestroy: () => void;
    onSelect: (e: React.MouseEvent) => void;
}

export interface ITabProps extends ITabOwnProps, Partial<ITabStateProps>, Partial<ITabDispatchProps> {}

export class Tab extends React.Component<ITabProps, any> {
    render() {
        const className = classNames('tab', {
            enabled: !this.props.disabled,
            disabled: this.props.disabled,
            active: this.props.isActive,
        });

        return (
            <div className={className} onClick={this.handleSelect}>
                <Tooltip title={this.props.tooltip} placement={TooltipPlacement.Top}>
                    {this.props.title}
                </Tooltip>
            </div>
        );
    }

    componentDidMount() {
        this.props.onRender?.();
    }

    componentWillUnmount() {
        this.props.onDestroy?.();
    }

    private handleSelect = (e: React.MouseEvent) => {
        if (!this.props.disabled) {
            this.props.onSelect?.(e);
        }
    };
}
