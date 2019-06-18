import * as classNames from 'classnames';
import * as React from 'react';
import {borderedLine} from './styles/BorderedLine.scss';

export class BorderedLine extends React.PureComponent<React.HTMLAttributes<HTMLDivElement>> {
    static defaultClassName = classNames(
        borderedLine,
        'bg-light-grey border-medium-grey mod-border-top mod-border-bottom'
    );

    render() {
        return (
            <div {...this.props} className={classNames(this.props.className, BorderedLine.defaultClassName)}>
                {this.props.children}
            </div>
        );
    }
}
