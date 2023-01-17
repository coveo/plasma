import classNames from 'classnames';
import {ReactNode, HTMLProps, HTMLAttributes, RefObject, CSSProperties, createRef, PureComponent} from 'react';
import * as ReactDOM from 'react-dom';

import {PlasmaState} from '../../PlasmaState.js';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils.js';
import {defaultDropPodPosition, DropPod, IDropPodProps} from './DropPod.js';
import {DefaultGroupIds, DropActions} from './redux/DropActions.js';
import {DropSelectors} from './redux/DropReducers.js';

export interface IDropOwnProps extends Partial<IDropPodProps> {
    id: string;
    groupId?: string;
    renderOpenButton: (onClick: () => void, isOpen: boolean) => ReactNode;
    buttonContainerProps?: HTMLProps<HTMLDivElement>;
    listContainerProps?: HTMLAttributes<HTMLDivElement>;
    closeOnClickOutside?: boolean;
    closeOnClickDrop?: boolean;
    children?: ReactNode;
}

export type IDropStateProps = ReturnType<typeof mapStateToProps>;
export type IDropDispatchProps = ReturnType<typeof mapDispatchToProps>;

export interface IDropProps extends IDropOwnProps, Partial<IDropStateProps>, Partial<IDropDispatchProps> {}

const mapStateToProps = (state: PlasmaState, {id, groupId}: IDropOwnProps) => ({
    isOpen: DropSelectors.isOpen(state, {id, groupId}),
});

const mapDispatchToProps = (dispatch: IDispatch, {id, groupId}: IDropOwnProps) => ({
    toggle: (isOpen?: boolean) => dispatch(DropActions.toggle(id, groupId, isOpen)),
});

/**
 * @deprecated Use Mantine instead
 */
@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class Drop extends PureComponent<IDropProps> {
    private readonly button: RefObject<HTMLDivElement>;
    private dropContent: HTMLDivElement | null;

    static defaultProps: Partial<IDropProps>;

    constructor(props: IDropProps) {
        super(props);

        this.dropContent = null;

        this.button = createRef();
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
                    {this.props.renderOpenButton(this.onClick, this.props.isOpen)}
                </div>
                {this.createPortalMenu()}
            </>
        );
    }

    private setEventOnClickOnDocument() {
        if (typeof document !== 'undefined') {
            document.addEventListener('click', this.handleDocumentClick);
        }
    }

    private removeEventOnClickOnDocument() {
        if (typeof document !== 'undefined') {
            document.removeEventListener('click', this.handleDocumentClick);
        }
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
                renderDrop={(style: CSSProperties): ReactNode => (
                    // Use dropRef as a reference of the drop element because we need to calculate later if the click is inside or not the drop container
                    <div
                        style={style}
                        ref={(ref) => (this.dropContent = ref)}
                        className={classNames('drop', this.props.listContainerProps.className)}
                        {...this.props.listContainerProps}
                        data-open={this.props.isOpen}
                        aria-hidden={!this.props.isOpen}
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

            if (this.dropContent?.contains(e.target as Node)) {
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
