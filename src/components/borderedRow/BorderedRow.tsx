import * as classNames from 'classnames';
import * as React from 'react';
import {borderedRow} from './styles/BorderedRow.scss';

export class BorderedRow extends React.PureComponent<React.HTMLAttributes<HTMLDivElement>> {
    static defaultClassName = classNames(borderedRow, 'bg-light-grey border-medium-grey mod-border-top mod-border-bottom');

    render() {
        return (
            <div
                {...this.props}
                className={classNames(this.props.className, BorderedRow.defaultClassName)}
            >
                {this.props.children}
            </div>
        );
    }
}
