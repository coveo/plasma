import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import FilterPicker from './FilterPicker';
import ListPopup from './ListPopup';
import Pickers from './Pickers';
import ValuePopup from './ValuePopup';

const Filtering: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    return (
        <>
            <Route path={`${match.url}/picker`} component={FilterPicker} />
            <Route path={`${match.url}/pickers`} component={Pickers} />
            <Route path={`${match.url}/list-popup`} component={ListPopup} />
            <Route path={`${match.url}/value-popup`} component={ValuePopup} />
            <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/picker`} />} />
        </>
    );
};

export default Filtering;
