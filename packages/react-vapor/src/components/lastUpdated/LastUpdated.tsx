import classNames from 'classnames';
import * as moment from 'moment';
import * as React from 'react';

export interface ILastUpdatedOwnProps extends React.ClassAttributes<LastUpdated> {
    id?: string;
    label?: string;
    className?: string;
}

export interface ILastUpdatedStateProps {
    time?: Date;
}

export interface ILastUpdatedDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
}

export interface ILastUpdatedProps extends ILastUpdatedOwnProps, ILastUpdatedStateProps, ILastUpdatedDispatchProps {}

export const LAST_UPDATE_LABEL: string = 'Last update:';

export class LastUpdated extends React.Component<ILastUpdatedProps, any> {

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
        const label: string = this.props.label || LAST_UPDATE_LABEL;
        const time: Date = this.props.time || new Date();
        const lastUpdateTime: string = moment(time).format('LTS');

        return (
            <div className={classNames('table-last-update', this.props.className)}>{label} {lastUpdateTime}</div>
        );
    }
}
