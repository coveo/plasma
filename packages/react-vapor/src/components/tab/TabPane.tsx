import classNames from 'classnames';
import * as React from 'react';
import {IClassName} from '../../utils/ClassNameUtils';

export interface ITabPaneOwnProps {
    groupId?: string;
    id?: string;
    className?: IClassName;
}

export interface ITabPaneStateProps {
    isActive?: boolean;
}

export interface ITabPaneDispatchProps {}

export interface ITabPaneProps extends ITabPaneOwnProps, ITabPaneStateProps, ITabPaneDispatchProps {}

export class TabPane extends React.Component<ITabPaneProps, any> {
    render() {
        const classes = classNames('tab-pane', this.props.className, {active: this.props.isActive});

        return <div className={classes}>{this.props.children}</div>;
    }
}
