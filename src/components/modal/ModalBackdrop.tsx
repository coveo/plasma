import * as classNames from 'classnames';
import * as React from 'react';

import {keyCode} from '../../utils/InputUtils';

export interface IModalBackdropOwnProps {
    displayFor?: string[];
    isPrompt?: boolean;
    layer?: number;
}

export interface IModalBackdropStateProps {
    display?: boolean;
    lastOpened?: boolean;
}

export interface IModalBackdropDispatchProps {
    onClick?: (id?: string) => void;
}

export interface IModalBackdropProps extends IModalBackdropOwnProps, IModalBackdropStateProps, IModalBackdropDispatchProps {
}

export class ModalBackdrop extends React.Component<IModalBackdropProps, {}> {
    private canClose: boolean;

    static defaultProps: Partial<IModalBackdropProps> = {
        layer: 1,
    };

    componentDidMount() {
        document.addEventListener('keydown', this.onKeyDown);
        this.canClose = this.props.lastOpened;
    }

    // This is needed so that it does not turn to true before getting to the onKeydown function when becoming
    // the last opened modal after the last one was closed on escape
    componentDidUpdate() {
        this.canClose = false;
        setTimeout(() => this.canClose = this.props.lastOpened, 1);
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
        const classes = classNames(
            'modal-backdrop',
            {
                'closed': !this.props.display,
                'prompt-backdrop': this.props.isPrompt,
                [`layer-${this.props.layer}`]: this.props.display,
            },
        );

        return (
            <div className={classes} onClick={() => this.handleClick()}>
                <div className='mask'></div>
            </div>
        );
    }

    private onKeyDown = (e: KeyboardEvent) => {
        if (this.canClose && e.keyCode === keyCode.escape) {
            e.stopPropagation();
            e.preventDefault();
            this.handleClick();
        }
    }
}
