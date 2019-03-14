import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {DropPod} from './DropPod';
import {DropActions} from './redux/DropActions';
import {DropSelectors} from './redux/DropReducers';

export interface IDropOwnProps {
    id: string;
    renderOpenButton: (onClick: () => void) => React.ReactNode;
    buttonContainerProps?: React.HTMLProps<HTMLDivElement>;
    listContainerProps?: React.HTMLAttributes<HTMLDivElement>;
    closeOnClick?: boolean;
    positions?: string[];
    selector?: string;
}

export interface IDropStateProps {
    isOpen: boolean;
}

export interface IDropDispatchProps {
    toggle: (isOpen?: boolean) => void;
}

export interface IDropProps extends IDropOwnProps,
    Partial<IDropStateProps>,
    Partial<IDropDispatchProps> {}

const mapStateToProps = (state: IReactVaporState, {id}: IDropOwnProps): IDropStateProps => ({
    isOpen: DropSelectors.isOpen(state, {id}),
});

const mapDispatchToProps = (
    dispatch: IDispatch,
    ownProps: IDropOwnProps,
): IDropDispatchProps => ({
    toggle: (isOpen?: boolean) => dispatch(DropActions.toggle(ownProps.id, isOpen)),
});

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class Drop extends React.PureComponent<IDropProps> {
    readonly button: React.RefObject<HTMLDivElement>;

    static defaultProps: Partial<IDropProps> = {
        closeOnClick: true,
    };

    constructor(props: IDropProps) {
        super(props);

        this.button = React.createRef();
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
                isOpen={this.props.isOpen}
                ref={this.button}
                renderDrop={(style: React.CSSProperties, dropRef: React.RefObject<HTMLDivElement>): React.ReactNode => (
                    <div style={style} ref={dropRef} {...this.props.listContainerProps} >
                        {this.props.children}
                    </div>
                )}
            />
        );
    }

    private onClick = () => {
        this.props.toggle(true);
    }

    private onClickMenu() {
        if (this.props.closeOnClick) {
            this.props.toggle(true);
        }
    }

    private handleDocumentClick = (e: MouseEvent) => {
        if (this.props.isOpen && document.body.contains(e.target as HTMLElement)) {
            const button: Element | Text = ReactDOM.findDOMNode(this.button.current);

            if (!button.contains(e.target as Node)) {
                this.onClickMenu();
            }
        }
    }
}
