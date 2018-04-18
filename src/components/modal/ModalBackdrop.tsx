import * as React from 'react';

export interface IModalBackdropOwnProps {
    displayFor?: string[];
    isPrompt?: boolean;
}

export interface IModalBackdropStateProps {
    display?: boolean;
}

export interface IModalBackdropDispatchProps {
    onClick?: (id?: string) => void;
}

export interface IModalBackdropProps extends IModalBackdropOwnProps, IModalBackdropStateProps, IModalBackdropDispatchProps {
}

export class ModalBackdrop extends React.Component<IModalBackdropProps, {}> {

    componentDidMount() {
        document.addEventListener('keydown', this.onKeyDown);
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
        if (e.code === 'Escape') {
            e.stopPropagation();
            e.preventDefault();
            this.handleClick();
        }
    }
}
