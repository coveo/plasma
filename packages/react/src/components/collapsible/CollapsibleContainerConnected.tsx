import classNames from 'clsx';
import {FunctionComponent, PropsWithChildren, ReactNode} from 'react';
import {connect} from 'react-redux';
import {findWhere} from 'underscore';

import {PlasmaState} from '../../PlasmaState';
import {IClassName} from '../../utils/ClassNameUtils';
import {ITooltipProps} from '../tooltip/Tooltip';
import {CollapsibleConnected} from './CollapsibleConnected';
import {CollapsibleHeaderIcon} from './CollapsibleHeaderIcon';

export interface ICollapsibleContainerOwnProps {
    id: string;
    title: ReactNode;
    collapsibleToggleIcon?: ReactNode;
    expandedOnMount?: boolean;
    informationUrl?: string;
    informationTooltip?: ITooltipProps;
    className?: IClassName;
    collapsibleHeaderClassName?: IClassName;
    collapsibleBodyClassName?: IClassName;
    withoutContentPadding?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

const mapStateToProps = (state: PlasmaState, ownProps: ICollapsibleContainerOwnProps) => {
    const collapsibleState = findWhere(state.collapsibles, {id: ownProps.id});

    return {expanded: collapsibleState && collapsibleState.expanded};
};

export const CollapsibleContainerDisconnected: FunctionComponent<
    React.PropsWithChildren<ICollapsibleContainerOwnProps & ReturnType<typeof mapStateToProps>>
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
    onClick,
}) => {
    const contentClasses = classNames(
        {'collapsible-container content': !withoutContentPadding},
        collapsibleBodyClassName,
        'mod-border-bottom'
    );

    const headerClasses = classNames('caps p2 bold ml3', collapsibleHeaderClassName);

    return (
        <CollapsibleConnected
            id={id}
            className={classNames(className, 'collapsible-container')}
            headerContent={
                <div className={headerClasses}>
                    {title}
                    <CollapsibleHeaderIcon
                        informationTooltip={informationTooltip}
                        informationUrl={informationUrl}
                        disabled={disabled}
                        className="ml1"
                    />
                </div>
            }
            expandedOnMount={expandedOnMount}
            headerClasses={classNames('collapsible-header', {expanded, collapsed: !expanded})}
            toggleIconClassName="mr4"
            collapsibleToggleIcon={collapsibleToggleIcon}
            withBorders
            disabled={disabled}
            onClick={onClick}
        >
            <div className={contentClasses}>{children}</div>
        </CollapsibleConnected>
    );
};

/**
 * @deprecated Use Mantine Accordion instead: https://mantine.dev/core/accordion/
 */
export const CollapsibleContainerConnected = connect<
    ReturnType<typeof mapStateToProps>,
    null,
    PropsWithChildren<ICollapsibleContainerOwnProps>
>(mapStateToProps)(CollapsibleContainerDisconnected);
