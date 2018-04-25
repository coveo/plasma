import * as React from 'react';
import {keyCode} from '../../utils/InputUtils';

export interface IModalBackdropOwnProps {
    displayFor?: string[];
    isPrompt?: boolean;
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
        const classes = ['modal-backdrop'];
        if (!this.props.display) {
            classes.push('closed');
        }
        if (this.props.isPrompt) {
            classes.push('prompt-backdrop');
        }

        return (
            <div className={classes.join(' ')} onClick={() => this.handleClick()}>
                <div className='mask'></div>
            </div>
        );
    }

    private onKeyDown = (e: KeyboardEvent) => {
        if (this.canClose && e.keyCode === keyCode.enter) {
            e.stopPropagation();
            e.preventDefault();
            this.handleClick();
        }
    }
}
