import * as classNames from 'classnames';
import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import {omit} from 'underscore';

export interface ILoadingOwnProps extends React.ClassAttributes<Loading> {
    id?: string;
    className?: string;
}

export interface ILoadingDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
}

export interface ILoadingProps extends ILoadingOwnProps, ILoadingDispatchProps {}

export class Loading extends React.Component<ILoadingProps & React.HTMLProps<HTMLDivElement>, any> {

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

    render() {
        return (
            <div className={classNames('spinner', this.props.className)} {...omit(this.props, keys<ILoadingProps>())} >
                <div className='bounce1'></div>
                <div className='bounce2'></div>
                <div className='bounce3'></div>
            </div>
        );
    }
}
