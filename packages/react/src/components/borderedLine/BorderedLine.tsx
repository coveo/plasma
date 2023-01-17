import classNames from 'clsx';
import {HTMLAttributes, PureComponent} from 'react';

/**
 * @deprecated Use Mantine instead
 */
export class BorderedLine extends PureComponent<HTMLAttributes<HTMLDivElement>> {
    static defaultClassName = 'bordered-line mod-border-top mod-border-bottom';

    render() {
        return (
            <div {...this.props} className={classNames(this.props.className, BorderedLine.defaultClassName)}>
                {this.props.children}
            </div>
        );
    }
}
