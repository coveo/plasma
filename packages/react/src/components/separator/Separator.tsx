import classNames from 'clsx';
import {HTMLAttributes, PureComponent} from 'react';

/**
 * @deprecated Use Mantine Divider instead https://mantine.dev/core/divider/
 */
export class Separator extends PureComponent<HTMLAttributes<HTMLSpanElement>> {
    static defaultClassName = classNames('separator mx1');
    render() {
        return <span className={classNames(this.props.className, Separator.defaultClassName)} />;
    }
}
