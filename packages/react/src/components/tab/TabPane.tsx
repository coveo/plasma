import classNames from 'classnames';
import {ReactNode, FunctionComponent, PropsWithChildren} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {IClassName} from '../../utils/ClassNameUtils.js';
import {TabSelectors} from './TabSelectors.js';

export interface ITabPaneProps {
    groupId?: string;
    id?: string;
    className?: IClassName;
    children?: ReactNode;
    isActive?: boolean;
}

const makeMapStateToProps = () => createStructuredSelector({isActive: TabSelectors.getIsTabSelected});

export const TabPane: FunctionComponent<PropsWithChildren<ITabPaneProps>> = ({id, className, isActive, children}) => (
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

/**
 * @deprecated Use Mantine Tabs instead: https://mantine.dev/core/tabs/
 */
export const TabPaneConnected = connect<
    ReturnType<ReturnType<typeof makeMapStateToProps>>,
    Record<string, never>,
    ITabPaneProps
>(makeMapStateToProps)(TabPane as any);
