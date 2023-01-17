import classNames from 'classnames';
import {Component, ReactNode} from 'react';

import {Defaults} from '../../Defaults.js';
import {IClassName} from '../../utils/ClassNameUtils.js';

export interface IModalOwnProps {
    id?: string;
    classes?: IClassName;
    closeCallback?: () => void;
    closeTimeout?: number;
    /**
     * Renders the Modal already opened.
     */
    openOnMount?: boolean;
    contentRef?: (el: HTMLDivElement) => void;
    children?: ReactNode;
}

export interface IModalStateProps {
    isOpened: boolean;
}

export interface IModalDispatchProps {
    onDestroy: () => void;
    onRender: () => void;
}

export interface IModalProps extends IModalOwnProps, Partial<IModalStateProps>, Partial<IModalDispatchProps> {}

/**
 * @deprecated Use Mantine Modal instead: https://mantine.dev/core/modal/
 */
export class Modal extends Component<IModalProps> {
    static defaultProps: Partial<IModalProps> = {
        closeTimeout: Defaults.MODAL_TIMEOUT,
    };

    private timeoutId: number;

    componentDidMount() {
        if (this.props.onRender) {
            this.props.onRender();
        }
    }

    componentWillUnmount() {
        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
        window.clearTimeout(this.timeoutId);
    }

    componentDidUpdate(prevProps: IModalProps) {
        if (prevProps.isOpened && !this.props.isOpened) {
            this.handleCloseCallback();
        }
    }

    private handleCloseCallback() {
        window.clearTimeout(this.timeoutId);
        this.timeoutId = window.setTimeout(() => {
            this.props.closeCallback?.();
        }, this.props.closeTimeout);
    }

    render() {
        const classes = classNames('modal-container', this.props.classes, {
            opened: this.props.isOpened,
        });

        return (
            <div className={classes}>
                <div className="modal-content" ref={this.props.contentRef}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
