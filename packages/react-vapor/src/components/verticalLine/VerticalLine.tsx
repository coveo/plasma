import * as classNames from 'classnames';
import * as React from 'react';
import {separator} from './styles/VerticalLine.scss';

export class VerticalLine extends React.PureComponent<React.HTMLAttributes<HTMLDivElement>> {
    static defaultClassName = classNames(separator, 'bg-dark-medium-grey mx1');
    render() {
        return <div className={classNames(this.props.className, VerticalLine.defaultClassName)} />;
    }
}
