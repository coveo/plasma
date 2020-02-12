import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import Colors from './Colors';
import Headings from './Headings';
import Lists from './Lists';
import Utilities from './Utilities';

const Typography: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    return (
        <>
            <Route path={`${match.url}/headings`} component={Headings} />
            <Route path={`${match.url}/colors`} component={Colors} />
            <Route path={`${match.url}/utilities`} component={Utilities} />
            <Route path={`${match.url}/lists`} component={Lists} />
            <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/headings`} />} />
        </>
    );
};

export default Typography;
