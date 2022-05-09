import classNames from 'classnames';
import {HTMLAttributes, PureComponent} from 'react';

export class Separator extends PureComponent<HTMLAttributes<HTMLSpanElement>> {
    static defaultClassName = classNames('separator mx1');
    render() {
        return <span className={classNames(this.props.className, Separator.defaultClassName)} />;
    }
}
