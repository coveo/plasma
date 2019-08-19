import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import Badge from './Badge';
import Banner from './Banner';
import BlankSlate from './BlankSlate';
import Breadcrumbs from './Breadcrumbs';
import Calendar from './Calendar';
import Card from './Card';
import Collapsible from './Collapsible';
import ContentPlaceholder from './ContentPlaceholder';
import CornerRibbon from './CornerRibbon';
import Facet from './Facet';
import FieldSearch from './FieldSearch';
import ListBox from './ListBox';
import Loading from './Loading';
import Member from './Member';
import Modal from './Modal';
import MultiStepBar from './MultiStepBar';
import SyncFeedback from './SyncFeedback';
import Tab from './Tab';

const Components: React.FunctionComponent<RouteComponentProps> = ({match}) => (
    <>
        <Route path={`${match.url}/badge`} component={Badge} />
        <Route path={`${match.url}/banner`} component={Banner} />
        <Route path={`${match.url}/blank-slate`} component={BlankSlate} />
        <Route path={`${match.url}/breadcrumbs`} component={Breadcrumbs} />
        <Route path={`${match.url}/calendar-date-picker`} component={Calendar} />
        <Route path={`${match.url}/collapsible`} component={Collapsible} />
        <Route path={`${match.url}/content-placeholder`} component={ContentPlaceholder} />
        <Route path={`${match.url}/corner-ribbon`} component={CornerRibbon} />
        <Route path={`${match.url}/facet`} component={Facet} />
        <Route path={`${match.url}/card`} component={Card} />
        <Route path={`${match.url}/search-field`} component={FieldSearch} />
        <Route path={`${match.url}/list-box`} component={ListBox} />
        <Route path={`${match.url}/loading`} component={Loading} />
        <Route path={`${match.url}/member`} component={Member} />
        <Route path={`${match.url}/modal`} component={Modal} />
        <Route path={`${match.url}/multi-step-bar`} component={MultiStepBar} />
        <Route path={`${match.url}/sync-feedback`} component={SyncFeedback} />
        <Route path={`${match.url}/tabs`} component={Tab} />
        <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/badge`} />} />
    </>
);

export default Components;
