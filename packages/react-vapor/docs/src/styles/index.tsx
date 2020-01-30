import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import Buttons from './buttons';
import Cards from './cards';
import Colors from './colors';
import Components from './components';
import Filtering from './filtering';
import FormControls from './form';
import FormLayout from './form-layouts';
import GeneralGuidelines from './general-guidelines';
import Headers from './headers';
import Icons from './icons';
import SideMenu from './Menu';
import Messages from './messages';
import Navigation from './navigation';
import Typography from './typography';
import Utility from './utility';

const Styles: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    return (
        <div className="flex full-content">
            <div className="flex flex-column navigation-wrapper navigation-wrapper-opened sg-navigation">
                <SideMenu />
            </div>

            <div className="page-content application-container flex flex-column">
                <div className="wrapper application-main-content m0 flex-auto">
                    <Route path={`${match.url}/general-guidelines`} component={GeneralGuidelines} />
                    <Route path={`${match.url}/buttons`} component={Buttons} />
                    <Route path={`${match.url}/cards`} component={Cards} />
                    <Route path={`${match.url}/colors`} component={Colors} />
                    <Route path={`${match.url}/components`} component={Components} />
                    <Route path={`${match.url}/filtering`} component={Filtering} />
                    <Route path={`${match.url}/form-controls`} component={FormControls} />
                    <Route path={`${match.url}/form-layout`} component={FormLayout} />
                    <Route path={`${match.url}/headers`} component={Headers} />
                    <Route path={`${match.url}/icons`} component={Icons} />
                    <Route path={`${match.url}/messages`} component={Messages} />
                    <Route path={`${match.url}/navigation`} component={Navigation} />
                    <Route path={`${match.url}/typography`} component={Typography} />
                    <Route path={`${match.url}/utility`} component={Utility} />
                    <Route
                        exact
                        path={`${match.url}/`}
                        component={() => <Redirect to={`${match.url}/general-guidelines`} />}
                    />
                </div>
            </div>
        </div>
    );
};

export default Styles;
