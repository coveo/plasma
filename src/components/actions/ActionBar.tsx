import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';
import {Content, IContentProps} from '../content/Content';
import {ITooltipProps} from '../tooltip/Tooltip';
import {IActionOptions} from './Action';
import {ItemFilter} from './filters/ItemFilter';
import {PrimaryAction} from './PrimaryAction';
import {PrimaryActionConnected} from './PrimaryActionConnected';
import {SecondaryActions} from './SecondaryActions';
import {SecondaryActionsConnected} from './SecondaryActionsConnected';

export const DEFAULT_ACTIONS_CONTAINER_CLASSES = [
    'coveo-table-actions-container',
    'mod-cancel-header-padding',
    'mod-border-bottom',
    'mod-align-header',
];

export interface IActionBarOwnProps extends React.ClassAttributes<ActionBar> {
    id?: string;
    itemFilterLabel?: string;
    itemTooltipProps?: ITooltipProps;
    onClearItemFilter?: () => void;
    extraContainerClasses?: string[];
    removeDefaultContainerClasses?: boolean;
    withSmallActions?: boolean;
    prefixContent?: IContentProps;
    width?: number;
    maxScroll?: number;
}

export interface IActionBarStateProps extends IReduxStatePossibleProps {
    actions?: IActionOptions[];
    prompt?: JSX.Element;
    itemFilter?: string;
    isLoading?: boolean;
    tableYPosition?: number;
}

export interface IActionBarDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
    clearItemFilter?: () => void;
}

export interface IActionBarChildrenProps {
    moreLabel?: string;
    itemFilterCropLength?: number;
}

export interface IActionBarProps extends
    IActionBarOwnProps,
    IActionBarStateProps,
    IActionBarDispatchProps,
    IActionBarChildrenProps {}

export class ActionBar extends React.Component<IActionBarProps, any> {
    static defaultProps: Partial<IActionBarOwnProps> = {
        extraContainerClasses: [],
        withSmallActions: false,
        maxScroll: 0,
    };

    private handleClear() {
        if (this.props.clearItemFilter) {
            this.props.clearItemFilter();
        }
    }

    componentWillMount() {
        if (this.props.onRender) {
            this.props.onRender();
        }
    }

    componentWillUnmount() {
        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
    }

    render() {
        const itemFilter: JSX.Element = this.props.itemFilter
            ? <ItemFilter
                label={this.props.itemFilterLabel}
                item={this.props.itemFilter}
                itemTooltipProps={this.props.itemTooltipProps}
                onClear={() => this.handleClear()} crop={this.props.itemFilterCropLength}
            />
            : null;

        const primaryActions: JSX.Element[] = !this.props.prompt && _.map(this.props.actions, (action: IActionOptions, index: number): JSX.Element => {
            if (action.primary) {
                const primaryAction = this.props.withReduxState
                    ? <PrimaryActionConnected action={action} parentId={this.props.id} />
                    : <PrimaryAction action={action} />;
                return <div className='dropdown action primary-action' key={'primary-' + index}>{primaryAction}</div>;
            }
        });

        const secondaryActions: IActionOptions[] = !this.props.prompt && _.map(this.props.actions, (action: IActionOptions) => {
            if (!action.primary) {
                return action;
            }
        }).filter(Boolean);

        let secondaryActionsView: JSX.Element = null;
        if (secondaryActions.length) {
            secondaryActionsView = this.props.withReduxState
                ? <SecondaryActionsConnected moreLabel={this.props.moreLabel} actions={secondaryActions} id={this.props.id} />
                : <SecondaryActions moreLabel={this.props.moreLabel} actions={secondaryActions} />;
        }

        const actions = primaryActions.length || secondaryActionsView || this.props.prompt
            ? (<div className='coveo-table-actions'>
                {primaryActions}
                {secondaryActionsView}
                {this.props.prompt}
            </div>)
            : null;

        const defaultContainerClasses = !this.props.removeDefaultContainerClasses
            ? DEFAULT_ACTIONS_CONTAINER_CLASSES
            : [];

        const containerClasses = classNames(
            defaultContainerClasses,
            this.props.extraContainerClasses,
            {
                'mod-deactivate-pointer': !!this.props.isLoading,
                'small-actions-container': this.props.withSmallActions,
                'fixed-actions': this.props.tableYPosition && this.props.tableYPosition <= this.props.maxScroll,
            },
        );

        const prefixContentElement: JSX.Element = this.props.prefixContent ? <Content {...this.props.prefixContent} /> : null;

        const divProps: React.HTMLProps<HTMLDivElement> = {
            className: containerClasses,
        };
        if (this.props.width) {
            divProps.style = {width: this.props.width};
        }

        return (
            <div {...divProps}>
                {prefixContentElement}
                {itemFilter}
                {actions}
                {this.props.children}
            </div>
        );
    }
}
