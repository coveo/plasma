import * as classNames from 'classnames';
import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';

import {SlideY} from '../../animations/SlideY';
import {IReactVaporState} from '../../ReactVapor';
import {EventUtils} from '../../utils/EventUtils';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {IActionOptions} from '../actions/Action';
import {addActionsToActionBar} from '../actions/ActionBarActions';
import {Collapsible} from '../collapsible/Collapsible';
import {CollapsibleToggle} from '../collapsible/CollapsibleToggle';
import {TableHOCRowActions} from './actions/TableHOCRowActions';
import {TableSelectors} from './TableSelectors';

export interface CollapsibleRowProps {
    content?: React.ReactNode;
    className?: string;
    expandOnMount?: boolean;
    renderCustomToggleCell?: (opened: boolean) => React.ReactNode;
    onToggleCollapsible?: (open: boolean) => void;
}

export interface ITableRowOwnProps {
    id: string;
    tableId: string;
    actions?: IActionOptions[];
    isMultiselect?: boolean;
    collapsible?: CollapsibleRowProps;
    disabled?: boolean;
}

export interface ITableRowStateProps {
    selected: boolean;
    opened: boolean;
}

export interface ITableRowDispatchProps {
    onMount: () => void;
    onUnmount: () => void;
    handleClick: (isMulti: boolean, isOpened: boolean) => void;
    onUpdateToCollapsibleRow: () => void;
    onActionBarActionsChanged: () => void;
}

export interface ITableRowConnectedProps
    extends ITableRowOwnProps,
        Partial<ITableRowStateProps>,
        Partial<ITableRowDispatchProps> {}

const TableRowPropsToOmit = keys<ITableRowConnectedProps>();

const isCollapsible = (props: ITableRowOwnProps): boolean =>
    props.collapsible && (React.isValidElement(props.collapsible.content) || _.isString(props.collapsible.content));

const mapStateToProps = (state: IReactVaporState, ownProps: ITableRowOwnProps) => {
    const {selected, opened} = TableSelectors.getTableRow(state, {id: ownProps.id}) || {selected: false, opened: false};
    return {
        selected,
        opened,
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: ITableRowOwnProps): ITableRowDispatchProps => {
    const refreshActionBarActions = (isMulti: boolean) => {
        if (!_.isEmpty(ownProps.actions)) {
            dispatch(addActionsToActionBar(ownProps.tableId, ownProps.actions));
            dispatch(TableHOCRowActions.select(ownProps.id, isMulti));
        }
    };

    return {
        onMount: () => {
            dispatch(TableHOCRowActions.add(ownProps.id, ownProps.tableId));
            if (isCollapsible(ownProps) && ownProps.collapsible.expandOnMount) {
                dispatch(TableHOCRowActions.toggleCollapsible(ownProps.id, true));
            }
        },
        onUnmount: () => dispatch(TableHOCRowActions.remove(ownProps.id)),
        handleClick: (isMulti: boolean, isOpened: boolean) => {
            refreshActionBarActions(isMulti);
            if (isCollapsible(ownProps)) {
                callIfDefined(ownProps.collapsible.onToggleCollapsible, !isOpened);
                dispatch(TableHOCRowActions.toggleCollapsible(ownProps.id));
            }
        },
        onUpdateToCollapsibleRow: () => {
            if (ownProps.collapsible.expandOnMount) {
                dispatch(TableHOCRowActions.toggleCollapsible(ownProps.id, true));
            }
        },
        onActionBarActionsChanged: () => refreshActionBarActions(false),
    };
};

@ReduxConnect(mapStateToProps, mapDispatchToProps)
class TableRowConnected extends React.PureComponent<
    ITableRowConnectedProps & React.HTMLAttributes<HTMLTableRowElement>
> {
    static defaultProps: Partial<ITableRowOwnProps>;

    componentDidUpdate(prevProps: ITableRowConnectedProps) {
        if (!isCollapsible(prevProps) && isCollapsible(this.props)) {
            this.props.onUpdateToCollapsibleRow();
        }

        if (JSON.stringify(prevProps.actions) !== JSON.stringify(this.props.actions) && this.props.selected) {
            this.props.onActionBarActionsChanged();
        }
    }

    componentDidMount() {
        this.props.onMount();
    }

    componentWillUnmount() {
        this.props.onUnmount();
    }

    render() {
        const rowIsCollapsible = isCollapsible(this.props);
        const collapsibleContentRow = rowIsCollapsible && (
            <tr
                key={`${this.props.tableId}-${this.props.id}-collapsible`}
                className={classNames('collapsible-row', this.props.collapsible.className, {
                    in: this.props.opened,
                })}
            >
                <td colSpan={this.columnCount + 1}>
                    <SlideY
                        id={`${this.props.tableId}-${this.props.id}-collapsible`}
                        in={this.props.opened}
                        timeout={Collapsible.TIMEOUT}
                        duration={Collapsible.TIMEOUT}
                    >
                        {this.props.collapsible.content}
                    </SlideY>
                </td>
            </tr>
        );

        let collapsibleRowToggle: React.ReactNode = [];
        if (rowIsCollapsible) {
            const customToggle = callIfDefined(this.props.collapsible.renderCustomToggleCell, this.props.opened);
            collapsibleRowToggle = React.isValidElement(customToggle) ? (
                customToggle
            ) : (
                <td>
                    <CollapsibleToggle expanded={this.props.opened} svgClassName="mod-12" />
                </td>
            );
        }

        return (
            <React.Fragment key={`${this.props.tableId}-${this.props.id}`}>
                <tr
                    key={`${this.props.tableId}-${this.props.id}-heading`}
                    {..._.omit(this.props, TableRowPropsToOmit)}
                    className={classNames(this.props.className, {
                        selected: this.props.selected,
                        opened: this.props.opened,
                        'heading-row': rowIsCollapsible,
                        'row-disabled': this.props.disabled,
                    })}
                    onClick={this.handleClick}
                    onDoubleClick={this.handleDoubleClick}
                >
                    {this.props.children}
                    {collapsibleRowToggle}
                </tr>
                {collapsibleContentRow}
            </React.Fragment>
        );
    }

    private get columnCount(): number {
        return React.Children.toArray(this.props.children).filter((child: React.ReactChild) =>
            React.isValidElement(child)
        ).length;
    }

    private handleClick = (e: React.MouseEvent<HTMLTableRowElement>) => {
        if (!EventUtils.isClickingInsideElementWithClassname(e, 'dropdown')) {
            callIfDefined(this.props.onClick, e);
            const isMulti = (e.metaKey || e.ctrlKey) && this.props.isMultiselect;
            this.props.handleClick(isMulti, this.props.opened);
        }
    };

    private handleDoubleClick = () => {
        _(this.props.actions).each((action: IActionOptions) =>
            action.callOnDoubleClick && action.link ? window.location.replace(action.link) : action.trigger()
        );
    };
}

TableRowConnected.defaultProps = {
    actions: [],
    isMultiselect: false,
    collapsible: {},
};

export {TableRowConnected};
