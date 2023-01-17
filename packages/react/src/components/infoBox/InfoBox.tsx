import classNames from 'clsx';
import {HTMLProps, PureComponent} from 'react';

/**
 * @deprecated Use Mantine instead
 */
export class InfoBox extends PureComponent<HTMLProps<HTMLDivElement>> {
    render() {
        return (
            <div {...this.props} className={classNames('label info-box', this.props.className)}>
                {this.props.children}
            </div>
        );
    }
}
