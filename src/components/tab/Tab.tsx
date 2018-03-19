import * as React from 'react';

export interface ITabOwnProps {
    groupId?: string;
    id?: string;
    title: string;
}

export interface ITabStateProps {
    isActive?: boolean;
}

export interface ITabDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
    onSelect?: () => void;
}

export interface ITabProps extends ITabOwnProps, ITabStateProps, ITabDispatchProps {}

export class Tab extends React.Component<ITabProps, any> {

    componentWillMount() {
        if (this.props.onRender) {
            this.props.onRender();
        }
    }

    componentWillUnmount() {
        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
    }

    select() {
        if (this.props.onSelect) {
            this.props.onSelect();
        }
    }

    render() {
        const classes = ['tab', 'enabled'];
        if (this.props.isActive) {
            classes.push('active');
        }

        return (
            <div className={classes.join(' ')} onClick={() => this.select()}>
                {this.props.title}
            </div>
        );
    }
}
