import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {DropPod} from './DropPod';

export interface IDropProps {
    renderOpenButton: (onClick: () => void) => React.ReactNode;
    buttonContainerProps?: React.HTMLProps<HTMLDivElement>;
    listContainerProps?: React.HTMLAttributes<HTMLDivElement>;
    closeOnClick?: boolean;
    positions?: string[];
    selector?: string;
}

export interface IDropState {
    isOpen: boolean;
}

export class Drop extends React.PureComponent<IDropProps, IDropState> {
    readonly button: React.RefObject<HTMLDivElement>;

    static defaultProps: Partial<IDropProps> = {
        closeOnClick: true,
    };

    constructor(props: IDropProps, state: IDropState) {
        super(props, state);

        this.button = React.createRef();
        this.state = {
            isOpen: false,
        };
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleDocumentClick);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleDocumentClick);
    }

    render() {
        return (
            <>
                <div
                    ref={this.button}
                    {...this.props.buttonContainerProps}
                >
                    {this.props.renderOpenButton(this.onClick)}
                </div>
                {this.createPortalMenu()}
            </>
        );
    }

    private createPortalMenu() {
        return (
            <DropPod
                positions={this.props.positions}
                isOpen={this.state.isOpen}
                ref={this.button}
                renderDrop={(style: React.CSSProperties, dropRef: React.RefObject<HTMLDivElement>): React.ReactNode => (
                    <div style={style} ref={dropRef} {...this.props.listContainerProps}>
                        {this.props.children}
                    </div>
                )}
            />
        );
    }

    private onClick = () => {
        this.setState((state: IDropState) => ({
            isOpen: !state.isOpen,
        }));
    }

    private onClickMenu() {
        if (this.props.closeOnClick) {
            this.setState({
                isOpen: false,
            });
        }
    }

    private handleDocumentClick = (e: MouseEvent) => {
        if (this.state.isOpen && document.body.contains(e.target as HTMLElement)) {
            const button: Element | Text = ReactDOM.findDOMNode(this.button.current);

            if (!button.contains(e.target as Node)) {
                this.onClickMenu();
            }
        }
    }
}
