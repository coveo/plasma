import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import ProgressBar from './ProgressBar';
import SlideToggle from './SlideToggle';
import SlideToggleDouble from './SlideToggleDouble';
import SlideToggleModifiers from './SlideToggleModifiers';

const FormControls: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    return (
        <>
            <Route path={`${match.url}/slide-toggle`} component={SlideToggle} />
            <Route path={`${match.url}/slide-toggle-modifiers`} component={SlideToggleModifiers} />
            <Route path={`${match.url}/slide-toggle-double`} component={SlideToggleDouble} />
            <Route path={`${match.url}/progress-bar`} component={ProgressBar} />
            <Route exact path={`${match.url}/`} component={() => <Redirect to={`${match.url}/text-input`} />} />
        </>
    );
};

export default FormControls;
