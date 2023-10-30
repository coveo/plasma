import classNames from 'clsx';
import {
    Children,
    Fragment,
    HTMLAttributes,
    isValidElement,
    PureComponent,
    ReactChild,
    ReactNode,
    MouseEvent as ReactMouseEvent,
} from 'react';
import * as _ from 'underscore';

import {SlideY} from '../../animations/SlideY';
import {PlasmaState} from '../../PlasmaState';
import {UrlUtils} from '../../utils';
import {EventUtils} from '../../utils/EventUtils';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {IActionOptions} from '../actions/Action';
import {addActionsToActionBar} from '../actions/ActionBarActions';
import {Button} from '../button/Button';
import {COLLAPSIBLE_EFFECT_DURATION} from '../collapsible/CollapsibleConnected';
import {CollapsibleToggle} from '../collapsible/CollapsibleToggle';
import {TableHOCRowActions} from './actions/TableHOCRowActions';
import {TableSelectors} from './TableSelectors';

export interface CollapsibleRowProps {
    content?: ReactNode;
    className?: string;
    expandOnMount?: boolean;
    noBorderBottom?: boolean;
    renderCustomToggleCell?: (opened: boolean) => ReactNode;
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

export type ITableRowStateProps = ReturnType<typeof mapStateToProps>;
export type ITableRowDispatchProps = ReturnType<typeof mapDispatchToProps>;

export interface ITableRowConnectedProps
    extends ITableRowOwnProps,
        Partial<ITableRowStateProps>,
        Partial<ITableRowDispatchProps> {}

const TableRowPropsToOmit = [
    'actions',
    'collapsible',
    'disabled',
    'handleClick',
    'id',
    'isMultiselect',
    'onActionBarActionsChanged',
    'onCollapsibleClick',
    'onMount',
    'onUnmount',
    'onUpdateToCollapsibleRow',
    'opened',
    'selected',
    'tableId',
];

const isCollapsible = (props: ITableRowOwnProps): boolean =>
    props.collapsible &&
    (isValidElement(props.collapsible.content) ||
        _.isString(props.collapsible.content) ||
        _.isNull(props.collapsible.content));

const mapStateToProps = (state: PlasmaState, ownProps: ITableRowOwnProps) => {
    const {selected, opened} = TableSelectors.getTableRow(state, {id: ownProps.id}) || {selected: false, opened: false};
    return {
        selected,
        opened,
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: ITableRowOwnProps) => {
    const refreshActionBarActions = (isMulti: boolean) => {
        console.log('refreshactionbar');
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
        onUnmount: (isSelected?: boolean) => {
            dispatch(TableHOCRowActions.remove(ownProps.id, ownProps.tableId, isSelected));
        },
        handleClick: (isMulti: boolean) => {
            refreshActionBarActions(isMulti);
        },
        onCollapsibleClick: (isOpened: boolean) => {
            ownProps.collapsible.onToggleCollapsible?.(!isOpened);
            dispatch(TableHOCRowActions.toggleCollapsible(ownProps.id));
        },
        onUpdateToCollapsibleRow: () => {
            if (ownProps.collapsible.expandOnMount) {
                dispatch(TableHOCRowActions.toggleCollapsible(ownProps.id, true));
            }
        },
        onActionBarActionsChanged: () => refreshActionBarActions(false),
    };
};

/**
 * @deprecated Use Mantine instead
 */
@ReduxConnect(mapStateToProps, mapDispatchToProps)
class TableRowConnected extends PureComponent<ITableRowConnectedProps & HTMLAttributes<HTMLTableRowElement>> {
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
        this.props.onUnmount(this.props.selected);
    }

    render() {
        const rowIsCollapsible = isCollapsible(this.props);
        let collapsibleContentRow = null;
        let collapsibleRowToggle: ReactNode = null;
        if (rowIsCollapsible) {
            if (_.isNull(this.props.collapsible.content)) {
                collapsibleRowToggle = <td />;
            } else {
                collapsibleContentRow = (
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
                                timeout={COLLAPSIBLE_EFFECT_DURATION}
                                duration={COLLAPSIBLE_EFFECT_DURATION}
                            >
                                {this.props.collapsible.content}
                            </SlideY>
                        </td>
                    </tr>
                );

                const customToggle = this.props.collapsible.renderCustomToggleCell?.(this.props.opened);
                collapsibleRowToggle = isValidElement(customToggle) ? (
                    customToggle
                ) : (
                    <td
                        className={classNames('table-row-collapsible-btn', {
                            'mod-no-border-bottom': this.props.collapsible.noBorderBottom,
                        })}
                    >
                        <Button onClick={this.onToggleCollapsible} classes="mod-no-border right px1">
                            <CollapsibleToggle expanded={this.props.opened} />
                        </Button>
                    </td>
                );
            }
        }

        return (
            <Fragment key={`${this.props.tableId}-${this.props.id}`}>
                <tr
                    key={`${this.props.tableId}-${this.props.id}-heading`}
                    {..._.omit(this.props, TableRowPropsToOmit)}
                    className={classNames(this.props.className, {
                        selected: this.props.selected,
                        opened: this.props.opened,
                        'heading-row': rowIsCollapsible,
                        'row-disabled': this.props.disabled,
                        'no-hover': _.isEmpty(this.props.actions),
                    })}
                    onClick={this.handleClick}
                    onDoubleClick={this.handleDoubleClick}
                    aria-selected={this.props.selected}
                >
                    {this.props.children}
                    {collapsibleRowToggle}
                </tr>
                {collapsibleContentRow}
            </Fragment>
        );
    }

    private get columnCount(): number {
        return Children.toArray(this.props.children).filter((child: ReactChild) => isValidElement(child)).length;
    }

    private handleClick = (e: ReactMouseEvent<HTMLTableRowElement>) => {
        if (!EventUtils.isClickingInsideElementWithClassname(e, 'dropdown')) {
            this.props.onClick?.(e);
            const isMulti = (e.metaKey || e.ctrlKey) && this.props.isMultiselect;
            this.props.handleClick(isMulti);
        }
    };

    private handleDoubleClick = () => {
        _.chain(this.props.actions)
            .filter((action: IActionOptions) => action.callOnDoubleClick)
            .filter((action: IActionOptions) => action.enabled)
            .forEach((action: IActionOptions) => {
                if (action.link) {
                    UrlUtils.redirectToUrl(action.link);
                } else {
                    action.trigger?.();
                }
            });
    };

    private onToggleCollapsible = () => {
        this.props.onCollapsibleClick(this.props.opened);
    };
}

TableRowConnected.defaultProps = {
    actions: [],
    isMultiselect: false,
    collapsible: {},
};

export {TableRowConnected};
