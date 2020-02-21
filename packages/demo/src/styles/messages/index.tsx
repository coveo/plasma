import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import MessagePopover from './MessagePopover';
import MessagePrompt from './MessagePrompt';

const Messages: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    return (
        <>
            <Route path={`${match.url}/popover`} component={MessagePopover} />
            <Route path={`${match.url}/prompt`} component={MessagePrompt} />
            <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/list`} />} />
        </>
    );
};

export default Messages;
