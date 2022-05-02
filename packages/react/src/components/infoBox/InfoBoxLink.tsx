import classNames from 'classnames';
import {HTMLProps, PureComponent} from 'react';

export class InfoBoxLink extends PureComponent<HTMLProps<HTMLAnchorElement>> {
    render() {
        return (
            <a {...this.props} className={classNames('underline', this.props.className)}>
                {this.props.children}
            </a>
        );
    }
}
