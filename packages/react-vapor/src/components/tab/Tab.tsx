import classNames from 'classnames';
import * as React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ConnectedProps, IDispatch, UrlUtils} from '../../utils';
import {TooltipPlacement} from '../../utils/TooltipUtils';
import {Tooltip} from '../tooltip/Tooltip';
import {TabActions} from './TabActions';
import {TabSelectors} from './TabSelectors';

export interface ITabOwnProps {
    groupId?: string;
    id?: string;
    title: string;
    disabled?: boolean;
    tooltip?: string;
    children?: React.ReactNode;
    url?: string;
    onSelect?: (e: React.MouseEvent) => void;
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
export const Tab: React.FunctionComponent<ITabProps> = ({
    children,
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
    React.useEffect(() => {
        onRender?.();
        return onDestroy;
    }, []);

    const handleSelect = (e: React.MouseEvent) => {
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
                className={classNames('tab', {
                    enabled: !disabled,
                    disabled: disabled,
                    active: isActive,
                })}
                onClick={handleSelect}
                disabled={disabled}
            >
                {children}
                {title}
            </button>
            <div
                className={classNames('tab-bottom', {
                    enabled: !disabled,
                    disabled: disabled,
                    active: isActive,
                })}
            ></div>
        </Tooltip>
    );
};

export const TabConnected = enhance(Tab);
