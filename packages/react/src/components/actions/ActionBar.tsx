import classNames from 'classnames';
import {ReactNode, FunctionComponent, PureComponent} from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState.js';
import {IDispatch} from '../../utils/ReduxUtils.js';
import {Content, IContentProps} from '../content/Content.js';
import {InlinePromptConnected} from '../inlinePrompt/InlinePrompt.js';
import {removePrompt} from '../inlinePrompt/InlinePromptActions.js';
import {IPromptState} from '../inlinePrompt/InlinePromptReducers.js';
import {ITooltipProps} from '../tooltip/Tooltip.js';
import {IActionOptions} from './Action.js';
import {addActionBar, removeActionBar} from './ActionBarActions.js';
import {IActionBarState} from './ActionBarReducers.js';
import {ItemFilter} from './filters/ItemFilter.js';
import {addItemFilter, filterItems, removeItemFilter} from './filters/ItemFilterActions.js';
import {IItemFilterState} from './filters/ItemFilterReducers.js';
import {PrimaryAction} from './PrimaryAction.js';
import {PrimaryActionConnected} from './PrimaryActionConnected.js';
import {SecondaryActions} from './SecondaryActions.js';

export interface IActionBarProps {
    /**
     * The unique identifier of the action bar
     */
    id?: string;
    /**
     * List of additionnal CSS classes to add on the container
     *
     * @default []
     */
    extraContainerClasses?: string[];
    /**
     * Whether to remove the default container classes
     */
    removeDefaultContainerClasses?: boolean;
    /**
     * Whether to display smaller actions
     *
     * @default false
     */
    withSmallActions?: boolean;
    /**
     * Content to add before the filter and actions
     */
    prefixContent?: IContentProps;
    /**
     * Override for the width of the action bar. By default, it takes the full width
     *
     * @default null
     */
    width?: number;
    /**
     * Label of the button that displays the actions that aren't primary
     *
     * @default More
     */
    moreLabel?: string;
    /**
     * Whether the action bar is disabled
     */
    disabled?: boolean;
    /**
     * React component to add after the actions
     */
    children?: ReactNode;
    /**
     * @deprecated do not use
     */
    itemFilterLabel?: string;
    /**
     * @deprecated do not use
     */
    itemTooltipProps?: ITooltipProps;
    /**
     * @deprecated do not use
     */
    onClearItemFilter?: () => void;
    /**
     * @deprecated do not use
     */
    itemFilterCropLength?: number;
}

/**
 * @deprecated Use Mantine instead
 */
export class ActionBar extends PureComponent<
    IActionBarProps & Partial<ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>>
> {
    static defaultProps: Partial<IActionBarProps> = {
        extraContainerClasses: [],
        withSmallActions: false,
    };

    static defaultClasses = [
        'coveo-table-actions-container',
        'mod-cancel-header-padding',
        'mod-border-bottom',
        'mod-align-header',
    ];

    componentDidMount() {
        this.props.onRender?.();
    }

    componentWillUnmount() {
        this.props.onDestroy?.();
    }

    render() {
        const containerClasses = classNames(this.defaultClasses, this.props.extraContainerClasses, {
            'mod-deactivate-pointer': !!this.props.isLoading,
            'small-actions-container': this.props.withSmallActions,
        });

        const prefixContentElement = this.props.prefixContent ? <Content {...this.props.prefixContent} /> : null;

        return (
            <div className={containerClasses} style={this.props.width ? {width: this.props.width} : null}>
                {prefixContentElement}
                <this.Filter />
                <this.Actions />
                {this.props.children}
            </div>
        );
    }

    private get defaultClasses(): string {
        return classNames(this.props.removeDefaultContainerClasses ? '' : ActionBar.defaultClasses);
    }

    private Actions: FunctionComponent = () => {
        const primaryActions =
            this.props.actions
                ?.filter(({primary}) => !!primary)
                .map((action: IActionOptions, index: number) => {
                    const primaryAction = this.props.withReduxState ? (
                        <PrimaryActionConnected
                            action={{...action, enabled: action.enabled && !this.props.disabled}}
                            parentId={this.props.id}
                        />
                    ) : (
                        <PrimaryAction action={{...action, enabled: action.enabled && !this.props.disabled}} />
                    );
                    return (
                        <div className="action primary-action" key={`primary-${index}`}>
                            {primaryAction}
                        </div>
                    );
                }) ?? [];

        const secondaryActions: IActionOptions[] =
            this.props.actions
                ?.filter(({primary}) => !primary)
                .map((action: IActionOptions) => ({
                    ...action,
                    enabled: action.enabled && !this.props.disabled,
                })) ?? [];

        let secondaryActionsView: JSX.Element = null;
        if (!_.isEmpty(secondaryActions)) {
            secondaryActionsView = (
                <SecondaryActions
                    id={this.props.id}
                    moreLabel={this.props.moreLabel}
                    actions={secondaryActions}
                    disabled={this.props.disabled}
                />
            );
        }

        const actions = this.props.prompt ? (
            <this.Prompt />
        ) : (
            <>
                {primaryActions}
                {secondaryActionsView}
            </>
        );

        return primaryActions.length || secondaryActionsView || this.props.prompt ? (
            <div className="coveo-table-actions">{actions}</div>
        ) : null;
    };

    private Prompt: FunctionComponent = () =>
        this.props.prompt?.options ? (
            <div className="prompt">
                <InlinePromptConnected {...this.props.prompt} />
            </div>
        ) : null;

    private Filter: FunctionComponent = () =>
        this.props.itemFilter ? (
            <ItemFilter
                label={this.props.itemFilterLabel}
                item={this.props.itemFilter}
                itemTooltipProps={this.props.itemTooltipProps}
                onClear={this.props.clearItemFilter}
                crop={this.props.itemFilterCropLength}
            />
        ) : null;
}

const mapStateToProps = (state: PlasmaState, ownProps: IActionBarProps) => {
    const actionBar: IActionBarState = _.findWhere(state.actionBars, {id: ownProps.id});
    const prompt: IPromptState = _.find(state.prompts, ({id}) => id.indexOf(ownProps.id) >= 0);
    const itemFilter: IItemFilterState = _.findWhere(state.itemFilters, {id: ownProps.id});

    return {
        withReduxState: true,
        actions: actionBar?.actions.filter(({enabled, hideDisabled}) => enabled || hideDisabled === false) ?? [],
        isLoading: actionBar?.isLoading ?? false,
        prompt,
        itemFilter: itemFilter?.item ?? '',
    };
};

const mapDispatchToProps = (dispatch: IDispatch<PlasmaState>, ownProps: IActionBarProps) => ({
    onRender: () => {
        dispatch(addActionBar(ownProps.id));
        if (ownProps.itemFilterLabel) {
            dispatch(addItemFilter(ownProps.id));
        }
    },
    onDestroy: () => {
        dispatch(removeActionBar(ownProps.id));
        dispatch(removeItemFilter(ownProps.id));
        dispatch(removePrompt(ownProps.id));
    },
    clearItemFilter: () => {
        ownProps.onClearItemFilter?.();
        dispatch(filterItems(ownProps.id, ''));
    },
});

export const ActionBarConnected = connect<
    ReturnType<typeof mapStateToProps>,
    ReturnType<typeof mapDispatchToProps>,
    IActionBarProps
>(
    mapStateToProps,
    mapDispatchToProps
)(ActionBar as any);
