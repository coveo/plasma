import classNames from 'clsx';
import {HTMLAttributes, Component} from 'react';
import {defer, omit} from 'underscore';

import {keyCode} from '../../utils/InputUtils';

export interface IModalBackdropOwnProps {
    /**
     * @deprecated Do not use
     */
    displayFor?: string[];
    /**
     * Wheter this backdrop is for a prompt or not
     *
     * @default false
     */
    isPrompt?: boolean;
}

export interface IModalBackdropStateProps {
    display?: boolean;
    lastOpened?: boolean;
}

export interface IModalBackdropDispatchProps {
    onClick?: () => void;
}

export interface IModalBackdropProps
    extends IModalBackdropOwnProps,
        IModalBackdropStateProps,
        IModalBackdropDispatchProps {}

const ModalBackdropPropsToOmit = ['displayFor', 'isPrompt', 'display', 'lastOpened', 'onClick'];

export type IModalBackdropAllProps = IModalBackdropProps & HTMLAttributes<HTMLDivElement>;

/**
 * @deprecated Use Mantine Modal instead: https://mantine.dev/core/modal/
 */
export class ModalBackdrop extends Component<IModalBackdropAllProps> {
    static defaultProps: Partial<IModalBackdropProps> = {
        lastOpened: true,
    };

    private canClose: boolean;

    componentDidMount() {
        document.addEventListener('keydown', this.onKeyDown);
        this.canClose = this.props.lastOpened;
    }

    // This is needed so that it does not turn to true before getting to the onKeydown function when becoming
    // the last opened modal after the last one was closed on escape
    componentDidUpdate() {
        this.canClose = false;
        defer(() => (this.canClose = this.props.lastOpened));
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeyDown);
    }

    handleClick() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    render() {
        const classes = classNames('modal-backdrop', {
            closed: !this.props.display,
            'prompt-backdrop': this.props.isPrompt,
        });

        return (
            <div
                {...omit(this.props, ModalBackdropPropsToOmit)}
                className={classNames(this.props.className, classes)}
                onClick={() => this.handleClick()}
            >
                <div className="mask"></div>
            </div>
        );
    }

    private onKeyDown = (e: KeyboardEvent) => {
        if (this.canClose && !e.defaultPrevented && e.keyCode === keyCode.escape) {
            e.stopPropagation();
            e.preventDefault();
            this.handleClick();
        }
    };
}
