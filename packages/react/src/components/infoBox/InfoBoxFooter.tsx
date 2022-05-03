import classNames from 'classnames';
import {HTMLProps, PureComponent} from 'react';

export class InfoBoxFooter extends PureComponent<HTMLProps<HTMLDivElement>> {
    render() {
        return (
            <div {...this.props} className={classNames(this.props.className, 'info-box__footer')}>
                {this.props.children}
            </div>
        );
    }
}
