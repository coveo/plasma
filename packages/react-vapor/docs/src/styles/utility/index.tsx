import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import Borders from './Borders';
import ColorDots from './ColorDot';
import Cursor from './Cursor';
import Hover from './Hover';
import LineHeight from './LineHeight';
import Shadows from './Shadow';
import SpacedBoxes from './SpacedBoxes';
import Transparency from './Transparency';
import Whitespace from './Whitespace';

const Utility: React.FunctionComponent<RouteComponentProps> = ({match}) => (
    <>
        <Route path={`${match.url}/line-height`} component={LineHeight} />
        <Route path={`${match.url}/whitespace`} component={Whitespace} />
        <Route path={`${match.url}/spaced-box`} component={SpacedBoxes} />
        <Route path={`${match.url}/cursor`} component={Cursor} />
        <Route path={`${match.url}/color-dots`} component={ColorDots} />
        <Route path={`${match.url}/borders`} component={Borders} />
        <Route path={`${match.url}/transparency`} component={Transparency} />
        <Route path={`${match.url}/hover`} component={Hover} />
        <Route path={`${match.url}/shadow`} component={Shadows} />
        <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/whitespace`} />} />
    </>
);

export default Utility;
