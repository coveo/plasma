import * as React from 'react';

export interface ITabPaneOwnProps {
    groupId?: string;
    id?: string;
}

export interface ITabPaneStateProps {
    isActive?: boolean;
}

export interface ITabPaneDispatchProps {}

export interface ITabPaneProps extends ITabPaneOwnProps, ITabPaneStateProps, ITabPaneDispatchProps {}

export class TabPane extends React.Component<ITabPaneProps, any> {

    render() {
        const classes = ['tab-pane'];
        if (this.props.isActive) {
            classes.push('active');
        }

        return (
            <div className={classes.join(' ')}>
                {this.props.children}
            </div>
        );
    }
}
