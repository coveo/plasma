import {SvgName} from '@coveord/plasma-style';
import classNames from 'classnames';
import {Component} from 'react';

import {Loading} from '../loading/Loading';
import {Svg} from '../svg';

export interface StatusCardProps {
    title: string;
    className?: string;
    icon?: SvgName;
    simple?: boolean;
    loading?: boolean;
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
                {this.props.icon && (
                    <Svg key="icon" className="py3 mr3" svgName={this.props.icon} svgClass="icon mod-2x" />
                )}
                <div key="status" className="py2">
                    <h6>{this.props.title}</h6>
                    {this.props.children && <div className="mt1">{this.props.children}</div>}
                </div>
            </>
        );
    }
}
