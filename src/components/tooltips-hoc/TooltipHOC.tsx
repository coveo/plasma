import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {DropPod} from './DropPod';

export interface ITooltipHOCProps {
    buttonContainer?: React.HTMLAttributes<HTMLDivElement>;
    listContainer?: React.HTMLAttributes<HTMLDivElement>;
    renderOpenButton: (onClick: () => void) => React.ReactNode;
    closeOnClick?: boolean;
    positions?: string[];
    selector?: string;
}

export interface ITooltipHOCState {
    isOpen: boolean;
}

export class TooltipHOC extends React.PureComponent<ITooltipHOCProps, ITooltipHOCState> {
    readonly button: React.RefObject<HTMLDivElement>;

    static defaultProps: Partial<ITooltipHOCProps> = {
        closeOnClick: true,
    };

    constructor(props: ITooltipHOCProps, state: ITooltipHOCState) {
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
                    {...this.props.buttonContainer}
                >
                    {this.props.renderOpenButton(() => this.onClick())}
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
                buttonRef={this.button}
                renderTooltip={(style: React.CSSProperties, containerRef: React.RefObject<HTMLDivElement>) => (
                    <div style={style} ref={containerRef} {...this.props.listContainer}>
                        {this.props.children}
                    </div>
                )}
            />
        );
    }

    private onClick() {
        this.setState((state) => ({
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
