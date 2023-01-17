import classNames from 'classnames';
import {ComponentType, FunctionComponent, PropsWithChildren, ReactNode, useEffect} from 'react';
import {connect} from 'react-redux';
import {findWhere} from 'underscore';

import {SlideY} from '../../animations/SlideY.js';
import {IReduxActionsPayload, PlasmaState} from '../../PlasmaState.js';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils.js';
import {addCollapsible, removeCollapsible, setCollapsibleExpanded} from './CollapsibleActions.js';
import {CollapsibleToggle} from './CollapsibleToggle.js';

export interface CollapsibleOwnProps {
    /**
     * Unique identifier for the Collapsible
     */
    id: string;
    /**
     * Whether the collapsible is disabled
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether the collapsible is expanded on mount
     *
     * @default false
     */
    expandedOnMount?: boolean;
    /**
     * Custom JSX inside the header
     */
    headerContent?: ReactNode;
    /**
     * Additionnal CSS classes for the header
     */
    headerClasses?: string;
    /**
     * Additionnal CSS classes for the toggle icon
     */
    toggleIconClassName?: string;
    /**
     * Additionnal CSS classes for the outer most container of the Collapsible
     */
    className?: string;
    /**
     * Whether the collapsible has borders
     *
     * @default false
     */
    withBorders?: boolean;
    /**
     * Set to render a custom toggle icon
     */
    collapsibleToggleIcon?: ReactNode;
    /**
     * Callback called when container is clicked
     */
    onClick?: () => void;
}

const mapStateToProps = (state: PlasmaState, ownProps: CollapsibleOwnProps) => {
    const collapsibleState = findWhere(state.collapsibles, {id: ownProps.id});
    if (collapsibleState) {
        return {expanded: collapsibleState.expanded};
    }

    return {expanded: ownProps.expandedOnMount};
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: CollapsibleOwnProps) => ({
    onMount: () => dispatch(addCollapsible(ownProps.id, !!ownProps.expandedOnMount)),
    onUnmount: () => dispatch(removeCollapsible(ownProps.id)),
    onToggleExpandedState: (currentExpandedState: boolean) =>
        dispatch(setCollapsibleExpanded(ownProps.id, !currentExpandedState)),
});

export const COLLAPSIBLE_EFFECT_DURATION = 150;
export const CollapsibleDisconnected: FunctionComponent<
    React.PropsWithChildren<
        CollapsibleOwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
    >
> = ({
    children,
    id,
    disabled = false,
    className,
    withBorders,
    expanded,
    headerClasses,
    onMount,
    headerContent,
    toggleIconClassName,
    onUnmount,
    onToggleExpandedState,
    collapsibleToggleIcon,
    onClick,
}) => {
    useEffect(() => {
        onMount();
        return void onUnmount;
    }, []);

    const headerClassesCombine = classNames(
        'cursor-pointer flex space-between center-align',
        headerClasses,
        {
            'mod-border-bottom mod-border-top': withBorders,
        },
        {disabled}
    );

    return (
        <div className={classNames(className)}>
            <div
                className={headerClassesCombine}
                onClick={() => {
                    if (!disabled) {
                        onToggleExpandedState(expanded);
                        onClick?.();
                    }
                }}
            >
                {headerContent}
                {collapsibleToggleIcon || (
                    <CollapsibleToggle
                        expanded={expanded}
                        className={classNames('mr2', toggleIconClassName, {disabled})}
                    />
                )}
            </div>
            {!disabled && (
                <SlideY
                    id={id}
                    in={expanded}
                    timeout={COLLAPSIBLE_EFFECT_DURATION}
                    duration={COLLAPSIBLE_EFFECT_DURATION}
                >
                    <div className="collapsible-content">{children}</div>
                </SlideY>
            )}
        </div>
    );
};

/**
 * @deprecated Use Mantine Accordion instead: https://mantine.dev/core/accordion/
 */
export const CollapsibleConnected: ComponentType<PropsWithChildren<CollapsibleOwnProps & IReduxActionsPayload>> =
    connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(CollapsibleDisconnected);
