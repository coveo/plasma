import {Icon} from '@coveord/plasma-react-icons';
import classNames from 'classnames';
import {Component, ReactNode} from 'react';

import {Loading} from '../loading/Loading.js';

export interface StatusCardProps {
    title: string;
    className?: string;
    icon?: Icon;
    simple?: boolean;
    loading?: boolean;
    children?: ReactNode;
}

/**
 * @deprecated Use Mantine Card instead: https://mantine.dev/core/card/
 */
export class StatusCard extends Component<StatusCardProps> {
    render() {
        const cardClasses: string = classNames('status-card px3 flex flex-center', this.props.className, {
            simple: this.props.simple,
            loading: this.props.loading,
        });

        return <div className={cardClasses}>{this.getContent()}</div>;
    }

    private getContent(): JSX.Element {
        return this.props.loading ? (
            <Loading key="loading" className="center-align" />
        ) : (
            <>
                {this.props.icon && <this.props.icon height={24} className="mr3" />}
                <div key="status" className="py2">
                    <h6>{this.props.title}</h6>
                    {this.props.children && <div className="mt1">{this.props.children}</div>}
                </div>
            </>
        );
    }
}
