import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import ColorDots from './ColorDot';
import Cursor from './Cursor';
import Hover from './Hover';
import LineHeight from './LineHeight';
import Whitespace from './Whitespace';

const Utility: React.FunctionComponent<RouteComponentProps> = ({match}) => (
    <>
        <Route path={`${match.url}/line-height`} component={LineHeight} />
        <Route path={`${match.url}/whitespace`} component={Whitespace} />
        <Route path={`${match.url}/cursor`} component={Cursor} />
        <Route path={`${match.url}/color-dots`} component={ColorDots} />
        <Route path={`${match.url}/hover`} component={Hover} />
        <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/whitespace`} />} />
    </>
);

export default Utility;
