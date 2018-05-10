import * as React from 'react';

export interface ILoadingOwnProps extends React.ClassAttributes<Loading> {
    id?: string;
}

export interface ILoadingDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
}

export interface ILoadingProps extends ILoadingOwnProps, ILoadingDispatchProps {}

export class Loading extends React.Component<ILoadingProps, any> {

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
            <div className='spinner'>
                <div className='bounce1'></div>
                <div className='bounce2'></div>
                <div className='bounce3'></div>
            </div>
        );
    }
}
