import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import FormChildSection from './FormChildSection';

const FormLayout: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    return (
        <>
            <Route path={`${match.url}/child-section-element`} component={FormChildSection} />
            <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/groups`} />} />
        </>
    );
};

export default FormLayout;
