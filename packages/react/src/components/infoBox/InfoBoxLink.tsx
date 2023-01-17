import classNames from 'clsx';
import {HTMLProps, PureComponent} from 'react';

/**
 * @deprecated Use Mantine instead
 */
export class InfoBoxLink extends PureComponent<HTMLProps<HTMLAnchorElement>> {
    render() {
        return (
            <a {...this.props} className={classNames('underline', this.props.className)}>
                {this.props.children}
            </a>
        );
    }
}
