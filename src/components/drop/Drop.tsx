import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {DropPod, IDropPodProps} from './DropPod';
import {DefaultGroupIds, DropActions} from './redux/DropActions';
import {DropSelectors} from './redux/DropReducers';

export interface IDropOwnProps extends IDropPodProps {
    id: string;
    groupId?: string;
    renderOpenButton: (onClick: () => void) => React.ReactNode;
    buttonContainerProps?: React.HTMLProps<HTMLDivElement>;
    listContainerProps?: React.HTMLAttributes<HTMLDivElement>;
    closeOnClickOutside?: boolean;
    closeOnClickDrop?: boolean;
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

const mapStateToProps = (state: IReactVaporState, {id, groupId}: IDropOwnProps): IDropStateProps => ({
    isOpen: DropSelectors.isOpen(state, {id, groupId}),
});

const mapDispatchToProps = (
    dispatch: IDispatch,
    ownProps: IDropOwnProps,
): IDropDispatchProps => ({
    toggle: (isOpen?: boolean) => dispatch(DropActions.toggle(ownProps.id, ownProps.groupId, isOpen)),
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

    componentWillUnmount() {
        this.removeEventOnClickOnDocument();
    }

    render() {
        if (this.props.isOpen) {
            this.setEventOnClickOnDocument();
        } else {
            this.removeEventOnClickOnDocument();
        }

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
                positions={this.props.positions}
                selector={this.props.selector}
                minHeight={this.props.minHeight}
                minWidth={this.props.minWidth}
                hasSameWidth={this.props.hasSameWidth}
                renderDrop={(style: React.CSSProperties, dropRef: React.RefObject<HTMLDivElement>): React.ReactNode => (
                    // Use dropRef as a reference of the drop element because we need to calculate later if the click is inside or not the drop container
                    <div style={style} ref={this.dropRef = dropRef} className={classNames('show-on-top', this.props.listContainerProps.className)} {...this.props.listContainerProps} >
                        {this.props.children}
                    </div>
                )}
            />
        );
    }

    private onClick() {
        this.props.toggle(true);
    }

    private onClickOutside(e: MouseEvent) {
        this.props.toggle(false);
    }

    private handleDocumentClick(e: MouseEvent) {
        if (this.props.isOpen && document.body.contains(e.target as HTMLElement)) {
            const button: Element | Text = ReactDOM.findDOMNode(this.button.current);

            if (this.dropRef.current.contains(e.target as Node)) {
                if (this.props.closeOnClickDrop) {
                    this.onClickOutside(e);
                }
            } else if (!button.contains(e.target as Node) && this.props.closeOnClickOutside) {
                this.onClickOutside(e);
            }
        }
    }
}

Drop.defaultProps = {
    groupId: DefaultGroupIds.default,
    closeOnClickDrop: true,
    closeOnClickOutside: true,
    listContainerProps: {},
    minHeight: 0,
    minWidth: 0,
    hasSameWidth: false,
};
