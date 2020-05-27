import classNames from 'classnames';
import * as React from 'react';
import * as styles from './styles/separator.scss';

export class Separator extends React.PureComponent<React.HTMLAttributes<HTMLSpanElement>> {
    static defaultClassName = classNames(styles.separator, 'mx1');
    render() {
        return <span className={classNames(this.props.className, Separator.defaultClassName)} />;
    }
}
