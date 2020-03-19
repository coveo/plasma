import * as classNames from 'classnames';
import * as React from 'react';
import {separator} from './styles/separator.scss';

export class Separator extends React.PureComponent<React.HTMLAttributes<HTMLSpanElement>> {
    static defaultClassName = classNames(separator, 'mx1');
    render() {
        return <span className={classNames(this.props.className, Separator.defaultClassName)} />;
    }
}
