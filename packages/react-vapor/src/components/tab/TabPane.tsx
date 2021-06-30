import classNames from 'classnames';
import * as React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ConnectedProps} from '../../utils';
import {IClassName} from '../../utils/ClassNameUtils';
import {TabSelectors} from './TabSelectors';

export interface ITabPaneOwnProps {
    groupId?: string;
    id?: string;
    className?: IClassName;
    children?: React.ReactNode;
}

const enhance = connect(createStructuredSelector({isActive: TabSelectors.getIsTabSelected}));

export interface ITabPaneProps extends ITabPaneOwnProps, Partial<ConnectedProps<typeof enhance>> {}

export const TabPane: React.FunctionComponent<ITabPaneProps> = ({id, className, isActive, children}) => (
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
export const TabPaneConnected = enhance(TabPane);
