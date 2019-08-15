import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import MessagePopover from './MessagePopover';
import MessagePrompt from './MessagePrompt';
import MessageToast from './MessageToast';
import MessageTooltip from './MessageTooltip';

const Messages: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    return (
        <>
            <Route path={`${match.url}/popover`} component={MessagePopover} />
            <Route path={`${match.url}/prompt`} component={MessagePrompt} />
            <Route path={`${match.url}/toast`} component={MessageToast} />
            <Route path={`${match.url}/tooltip`} component={MessageTooltip} />
            <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/list`} />} />
        </>
    );
};

export default Messages;
