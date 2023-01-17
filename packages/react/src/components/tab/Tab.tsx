import {Icon} from '@coveord/plasma-react-icons';
import classNames from 'classnames';
import {ReactNode, MouseEvent, FunctionComponent, useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ConnectedProps, IDispatch, UrlUtils} from '../../utils/index.js';
import {TooltipPlacement} from '../../utils/TooltipUtils.js';
import {Tooltip} from '../tooltip/Tooltip.js';
import {TabActions} from './TabActions.js';
import {TabSelectors} from './TabSelectors.js';

export interface ITabOwnProps {
    /**
     * Id to group tabs and tabContents together
     */
    groupId?: string;
    /**
     * Id of the Tab
     */
    id?: string;
    /**
     * The title of the Tab
     */
    title: string;
    /**
     * Whether the Tab is disabled or not
     */
    disabled?: boolean;
    /**
     * Additional text to display as tooltip when hovering over the Tab
     */
    tooltip?: string;
    /**
     * Add an icon to the Tab
     */
    icon?: Icon;
    /**
     * Add a Badge to the Tab
     */
    badge?: ReactNode;
    /**
     * Add an url to the Tab. Will navigate on click.
     */
    url?: string;
    onSelect?: (e: MouseEvent) => void;
}

const enhance = connect(
    createStructuredSelector({isActive: TabSelectors.getIsTabSelected}),
    (dispatch: IDispatch, ownProps: ITabOwnProps) => ({
        onRender: (): void => void dispatch(TabActions.addTab(ownProps.id, ownProps.groupId)),
        onDestroy: (): void => void dispatch(TabActions.removeTab(ownProps.id, ownProps.groupId)),
        selectTab: (): void => void dispatch(TabActions.selectTab(ownProps.id, ownProps.groupId)),
    })
);

export interface ITabProps extends ITabOwnProps, Partial<ConnectedProps<typeof enhance>> {}

/**
 * @deprecated Use Mantine Tabs instead: https://mantine.dev/core/tabs/
 */
export const Tab: FunctionComponent<ITabProps> = ({
    icon: IconName,
    badge,
    tooltip,
    disabled,
    isActive,
    title,
    url,
    id,
    onRender,
    onDestroy,
    onSelect,
    selectTab,
}) => {
    useEffect(() => {
        onRender?.();
        return onDestroy;
    }, []);

    const handleSelect = (e: MouseEvent) => {
        if (!disabled) {
            selectTab?.();
            onSelect?.(e);
            if (url) {
                UrlUtils.redirectToUrl(url);
            }
        }
    };
    return (
        <Tooltip
            title={tooltip}
            placement={TooltipPlacement.Top}
            className={classNames('inline-block', {'cursor-not-allowed': disabled})}
        >
            <button
                role="tab"
                aria-selected={!!isActive}
                aria-controls={`panel-${id}`}
                id={`tab-${id}`}
                tabIndex={isActive ? 0 : -1}
                className={classNames('tab body-m', {
                    enabled: !disabled,
                    disabled: disabled,
                })}
                onClick={handleSelect}
                disabled={disabled}
            >
                {IconName ? <IconName height={16} className={'tab-icon'} /> : null}
                {title}
                {badge ?? null}
            </button>
            <div
                className={classNames('active-tab-bottom-line', {
                    active: isActive,
                })}
            ></div>
        </Tooltip>
    );
};

/**
 * @deprecated Use Mantine Tabs instead: https://mantine.dev/core/tabs/
 */
export const TabConnected = enhance(Tab);
