import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {DropPod, IDropPodProps} from './DropPod';
import {DefaultGroups, DropActions} from './redux/DropActions';
import {DropSelectors} from './redux/DropReducers';

export interface IDropOwnProps extends IDropPodProps {
    id: string;
    renderOpenButton: (onClick: () => void) => React.ReactNode;
    buttonContainerProps?: React.HTMLProps<HTMLDivElement>;
    listContainerProps?: React.HTMLAttributes<HTMLDivElement>;
    closeOnClickOutside?: boolean;
    closeOnClickDrop?: boolean;
    group?: string;
    minWidth?: number;
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

const mapStateToProps = (state: IReactVaporState, {id, group}: IDropOwnProps): IDropStateProps => ({
    isOpen: DropSelectors.isOpen(state, {id, group}),
});

const mapDispatchToProps = (
    dispatch: IDispatch,
    ownProps: IDropOwnProps,
): IDropDispatchProps => ({
    toggle: (isOpen?: boolean) => dispatch(DropActions.toggle(ownProps.id, ownProps.group, isOpen)),
});

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class Drop extends React.PureComponent<IDropProps> {
    private readonly button: React.RefObject<HTMLDivElement>;
    private dropRef: React.RefObject<HTMLDivElement>;

    static defaultProps: Partial<IDropProps>;

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
                ref={this.button}
                isOpen={this.props.isOpen}
                positions={this.props.positions}
                selector={this.props.selector}
                renderDrop={(style: React.CSSProperties, dropRef: React.RefObject<HTMLDivElement>): React.ReactNode => (
                    <div style={style} ref={this.dropRef = dropRef} className={classNames('show-on-top', this.props.listContainerProps.className)} {...this.props.listContainerProps} >
                        {this.props.children}
                    </div>
                )}
            />
        );
    }

    private onClick = () => {
        this.props.toggle(true);
    }

    private onClickOutside() {
        this.props.toggle(false);
    }

    private handleDocumentClick = (e: MouseEvent) => {
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
    group: DefaultGroups.default,
    closeOnClickDrop: true,
    closeOnClickOutside: true,
    listContainerProps: {},
    minHeight: 0,
    minWidth: 0,
};
