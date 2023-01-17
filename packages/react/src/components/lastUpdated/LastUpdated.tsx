import classNames from 'clsx';
import moment from 'moment';
import {ClassAttributes, PureComponent} from 'react';

export interface ILastUpdatedOwnProps extends ClassAttributes<LastUpdated> {
    /**
     * @deprecated do not use
     */
    id?: string;
    /**
     * The text displayed before the time
     *
     * @default "Last update:"
     */
    label?: string;
    /**
     * Additionnal CSS class to add on the last updated
     */
    className?: string;
}

export interface ILastUpdatedStateProps {
    /**
     * A Date representing when the component last updated
     *
     * @default new Date()
     */
    time?: Date;
}

export interface ILastUpdatedDispatchProps {
    /**
     * A callback function executed when the component mounts
     */
    onRender?: () => void;
    /**
     * A callback function executed when the component unmounts
     */
    onDestroy?: () => void;
}

export interface ILastUpdatedProps extends ILastUpdatedOwnProps, ILastUpdatedStateProps, ILastUpdatedDispatchProps {}

export const LAST_UPDATE_LABEL: string = 'Last update:';

/**
 * @deprecated Use Mantine instead
 */
export class LastUpdated extends PureComponent<ILastUpdatedProps> {
    componentDidMount() {
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
            <div className={classNames('table-last-update', this.props.className)}>
                {label} {lastUpdateTime}
            </div>
        );
    }
}
