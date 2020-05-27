import classNames from 'classnames';
import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {IDispatch} from '../../utils/ReduxUtils';
import {Content, IContentProps} from '../content/Content';
import {InlinePromptConnected} from '../inlinePrompt/InlinePrompt';
import {removePrompt} from '../inlinePrompt/InlinePromptActions';
import {IPromptState} from '../inlinePrompt/InlinePromptReducers';
import {ITooltipProps} from '../tooltip/Tooltip';
import {IActionOptions} from './Action';
import {addActionBar, removeActionBar} from './ActionBarActions';
import {IActionBarState} from './ActionBarReducers';
import {ItemFilter} from './filters/ItemFilter';
import {addItemFilter, filterItems, removeItemFilter} from './filters/ItemFilterActions';
import {IItemFilterState} from './filters/ItemFilterReducers';
import {PrimaryAction} from './PrimaryAction';
import {PrimaryActionConnected} from './PrimaryActionConnected';
import {SecondaryActions} from './SecondaryActions';

export interface IActionBarProps {
    id?: string;
    itemFilterLabel?: string;
    itemTooltipProps?: ITooltipProps;
    onClearItemFilter?: () => void;
    extraContainerClasses?: string[];
    removeDefaultContainerClasses?: boolean;
    withSmallActions?: boolean;
    prefixContent?: IContentProps;
    width?: number;
    moreLabel?: string;
    itemFilterCropLength?: number;
    disabled?: boolean;
}

export class ActionBar extends React.PureComponent<
    IActionBarProps & Partial<ReturnType<typeof mapStateToProps>> & Partial<ReturnType<typeof mapDispatchToProps>>
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

    private Actions: React.FunctionComponent = () => {
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

    private Prompt: React.FunctionComponent = () =>
        this.props.prompt?.options ? (
            <div className="prompt">
                <InlinePromptConnected {...this.props.prompt} />
            </div>
        ) : null;

    private Filter: React.FunctionComponent = () =>
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

const mapStateToProps = (state: IReactVaporState, ownProps: IActionBarProps) => {
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

const mapDispatchToProps = (dispatch: IDispatch<IReactVaporState>, ownProps: IActionBarProps) => ({
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

export const ActionBarConnected = connect(mapStateToProps, mapDispatchToProps)(ActionBar);
