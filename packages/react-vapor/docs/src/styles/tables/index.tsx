import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import ActionsContainer from './ActionsContainer';
import AlternatingColorRows from './AlternatingColorRows';
import Base from './Base';
import CollapsibleRows from './CollapsibleRows';
import DragAndDrop from './DragAndDrop';
import FixedHeader from './FixedHeader';
import Loading from './Loading';
import Pagination from './Pagination';
import SmallActionsContainer from './SmallActionsContainer';
import SmallerRows from './SmallerRows';

const Tables: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    return (
        <>
            <Route path={`${match.url}/base`} component={Base} />
            <Route path={`${match.url}/drag-and-drop`} component={DragAndDrop} />
            <Route path={`${match.url}/fixed-header`} component={FixedHeader} />
            <Route path={`${match.url}/actions-container`} component={ActionsContainer} />
            <Route path={`${match.url}/small-actions-container`} component={SmallActionsContainer} />
            <Route path={`${match.url}/collapsible-rows`} component={CollapsibleRows} />
            <Route path={`${match.url}/alternating-color-rows`} component={AlternatingColorRows} />
            <Route path={`${match.url}/pagination`} component={Pagination} />
            <Route path={`${match.url}/smaller-rows`} component={SmallerRows} />
            <Route path={`${match.url}/loading`} component={Loading} />
            <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/base`} />} />
        </>
    );
};

export default Tables;
