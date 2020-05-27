import classNames from 'classnames';
import * as React from 'react';
import * as styles from './styles/BorderedLine.scss';

export class BorderedLine extends React.PureComponent<React.HTMLAttributes<HTMLDivElement>> {
    static defaultClassName = classNames(
        styles.borderedLine,
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
