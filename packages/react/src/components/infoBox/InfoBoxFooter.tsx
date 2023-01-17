import classNames from 'clsx';
import {HTMLProps, PureComponent} from 'react';

/**
 * @deprecated Use Mantine instead
 */
export class InfoBoxFooter extends PureComponent<HTMLProps<HTMLDivElement>> {
    render() {
        return (
            <div {...this.props} className={classNames(this.props.className, 'info-box__footer')}>
                {this.props.children}
            </div>
        );
    }
}
