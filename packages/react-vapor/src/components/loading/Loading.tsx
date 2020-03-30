import classNames from 'classnames';
import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import {omit} from 'underscore';

export interface ILoadingOwnProps extends React.ClassAttributes<Loading> {
    id?: string;
    className?: string;
    fullContent?: boolean;
}

export interface ILoadingDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
}

export interface ILoadingProps extends ILoadingOwnProps, ILoadingDispatchProps {}

export class Loading extends React.Component<ILoadingProps & React.HTMLProps<HTMLDivElement>, any> {
    static defaultProps: Partial<ILoadingOwnProps> = {
        fullContent: false,
    };

    componentDidMount() {
        this.props.onRender?.();
    }

    componentWillUnmount() {
        this.props.onDestroy?.();
    }

    render() {
        return (
            <div
                className={classNames('spinner', this.props.className, {
                    'flex center-align flex-auto full-content-y': this.props.fullContent,
                })}
                {...omit(this.props, keys<ILoadingProps>())}
            >
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        );
    }
}
