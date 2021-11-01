import classNames from 'classnames';
import * as React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {IClassName} from '../../utils/ClassNameUtils';
import {TabSelectors} from './TabSelectors';

export interface ITabPaneOwnProps {
    groupId?: string;
    id?: string;
    className?: IClassName;
    children?: React.ReactNode;
    isActive?: boolean;
}

const makeMapStateToProps = () => createStructuredSelector({isActive: TabSelectors.getIsTabSelected});

export const TabPane: React.FunctionComponent<ITabPaneOwnProps> = ({id, className, isActive, children}) => (
    <div
        id={`panel-${id}`}
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={`tab-${id}`}
        aria-hidden={!isActive}
        className={classNames('tab-pane', className, {active: isActive})}
    >
        {children}
    </div>
);
export const TabPaneConnected = connect<
    ReturnType<ReturnType<typeof makeMapStateToProps>>,
    Record<string, never>,
    ITabPaneOwnProps
>(makeMapStateToProps)(TabPane as any);
