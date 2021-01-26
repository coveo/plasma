import {connect} from 'react-redux';
import {findWhere} from 'underscore';

import classNames from 'classnames';
import * as React from 'react';
import {IReactVaporState} from '../../ReactVapor';
import {ReduxUtils} from '../../utils/ReduxUtils';

import {IClassName} from '../../utils/ClassNameUtils';
import {ITooltipProps} from '../tooltip/Tooltip';
import {CollapsibleConnected} from './CollapsibleConnected';
import {CollapsibleHeaderIcon} from './CollapsibleHeaderIcon';
import * as styles from './styles/CollapsibleContainer.scss';

export interface ICollapsibleContainerOwnProps {
    id: string;
    title: React.ReactNode;
    collapsibleToggleIcon?: React.ReactNode;
    expandedOnMount?: boolean;
    informationUrl?: string;
    informationTooltip?: ITooltipProps;
    className?: IClassName;
    collapsibleHeaderClassName?: IClassName;
    collapsibleBodyClassName?: IClassName;
    withoutContentPadding?: boolean;
    disabled?: boolean;
}

const mapStateToProps = (state: IReactVaporState, ownProps: ICollapsibleContainerOwnProps) => {
    const collapsibleState = findWhere(state.collapsibles, {id: ownProps.id});

    return {expanded: collapsibleState && collapsibleState.expanded};
};

export const CollapsibleContainerDisconnected: React.FunctionComponent<
    ICollapsibleContainerOwnProps & ReturnType<typeof mapStateToProps>
> = ({
    children,
    id,
    className,
    expanded,
    title,
    collapsibleHeaderClassName,
    collapsibleBodyClassName,
    withoutContentPadding,
    informationTooltip,
    informationUrl,
    expandedOnMount,
    collapsibleToggleIcon,
    disabled,
}) => {
    const contentClasses = classNames(
        {[styles.content]: !withoutContentPadding},
        collapsibleBodyClassName,
        'mod-border-bottom'
    );

    const headerClasses = classNames(
        'inline-flex flex-center text-medium-blue caps p2 bold ml3',
        collapsibleHeaderClassName
    );

    return (
        <CollapsibleConnected
            id={id}
            className={classNames(className, styles.collapsible)}
            headerContent={
                <div className={headerClasses}>
                    <div>{title}</div>
                    <CollapsibleHeaderIcon
                        informationTooltip={informationTooltip}
                        informationUrl={informationUrl}
                        disabled={disabled}
                    />
                </div>
            }
            expandedOnMount={expandedOnMount}
            headerClasses={classNames(styles.header, expanded ? 'bg-light-grey' : 'bg-white')}
            toggleIconClassName="mr4"
            collapsibleToggleIcon={collapsibleToggleIcon}
            withBorders
            disabled={disabled}
        >
            <div className={contentClasses}>{children}</div>
        </CollapsibleConnected>
    );
};

export const CollapsibleContainerConnected = connect(
    mapStateToProps,
    undefined,
    ReduxUtils.mergeProps
)(CollapsibleContainerDisconnected);
