import classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {defaultDropPodPosition, DropPod, IDropPodProps} from './DropPod';
import {DefaultGroupIds, DropActions} from './redux/DropActions';
import {DropSelectors} from './redux/DropReducers';

export interface IDropOwnProps extends Partial<IDropPodProps> {
    id: string;
    groupId?: string;
    renderOpenButton: (onClick: () => void) => React.ReactNode;
    buttonContainerProps?: React.HTMLProps<HTMLDivElement>;
    listContainerProps?: React.HTMLAttributes<HTMLDivElement>;
    closeOnClickOutside?: boolean;
    closeOnClickDrop?: boolean;
}

export type IDropStateProps = ReturnType<typeof mapStateToProps>;
export type IDropDispatchProps = ReturnType<typeof mapDispatchToProps>;

export interface IDropProps extends IDropOwnProps, Partial<IDropStateProps>, Partial<IDropDispatchProps> {}

const mapStateToProps = (state: IReactVaporState, {id, groupId}: IDropOwnProps) => ({
    isOpen: DropSelectors.isOpen(state, {id, groupId}),
});

const mapDispatchToProps = (dispatch: IDispatch, {id, groupId}: IDropOwnProps) => ({
    toggle: (isOpen?: boolean) => dispatch(DropActions.toggle(id, groupId, isOpen)),
});

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class Drop extends React.PureComponent<IDropProps> {
    private readonly button: React.RefObject<HTMLDivElement>;
    private dropRef: React.RefObject<HTMLDivElement>;

    static defaultProps: Partial<IDropProps>;

    constructor(props: IDropProps) {
        super(props);

        this.button = React.createRef();
        this.handleDocumentClick = this.handleDocumentClick.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        if (this.props.isOpen) {
            this.setEventOnClickOnDocument();
        }
    }

    componentWillUnmount() {
        this.removeEventOnClickOnDocument();
        if (this.props.isOpen) {
            this.props.toggle(false);
        }
    }

    componentDidUpdate(prevProps: Readonly<IDropProps>) {
        if (!prevProps.isOpen && this.props.isOpen) {
            this.setEventOnClickOnDocument();
        } else if (prevProps.isOpen && !this.props.isOpen) {
            this.removeEventOnClickOnDocument();
        }
    }

    render() {
        return (
            <>
                <div ref={this.button} {...this.props.buttonContainerProps}>
                    {this.props.renderOpenButton(this.onClick)}
                </div>
                {this.createPortalMenu()}
            </>
        );
    }

    private setEventOnClickOnDocument() {
        document.addEventListener('click', this.handleDocumentClick);
    }

    private removeEventOnClickOnDocument() {
        document.removeEventListener('click', this.handleDocumentClick);
    }

    private createPortalMenu() {
        return (
            <DropPod
                ref={this.button}
                isOpen={this.props.isOpen}
                positions={this.props.positions || []}
                minHeight={this.props.minHeight}
                minWidth={this.props.minWidth}
                hasSameWidth={this.props.hasSameWidth}
                selector={this.props.selector}
                parentSelector={this.props.parentSelector}
                renderDrop={(style: React.CSSProperties, dropRef: React.RefObject<HTMLDivElement>): React.ReactNode => (
                    // Use dropRef as a reference of the drop element because we need to calculate later if the click is inside or not the drop container
                    <div
                        style={style}
                        ref={(this.dropRef = dropRef)}
                        className={classNames('drop', this.props.listContainerProps.className)}
                        {...this.props.listContainerProps}
                        data-open={this.props.isOpen}
                    >
                        {this.props.children}
                    </div>
                )}
            />
        );
    }

    private onClick() {
        this.props.toggle(true);
    }

    private onClickOutside() {
        this.props.toggle(false);
    }

    private handleDocumentClick(e: MouseEvent) {
        if (this.props.isOpen && document.body.contains(e.target as HTMLElement)) {
            const button: Element | Text = ReactDOM.findDOMNode(this.button.current);

            if (this.dropRef.current.contains(e.target as Node)) {
                if (this.props.closeOnClickDrop) {
                    this.onClickOutside();
                }
            } else if (!button.contains(e.target as Node) && this.props.closeOnClickOutside) {
                this.onClickOutside();
            }
        }
    }
}

Drop.defaultProps = {
    groupId: DefaultGroupIds.default,
    positions: defaultDropPodPosition,
    closeOnClickDrop: true,
    closeOnClickOutside: true,
    listContainerProps: {},
    minHeight: 0,
    minWidth: 0,
    hasSameWidth: false,
};
