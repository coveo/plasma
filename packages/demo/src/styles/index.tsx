import * as React from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';

import Borders from './Borders';
import Cards from './cards';
import Colors from './colors';
import Components from './components';
import Filtering from './filtering';
import FormControls from './form';
import GeneralGuidelines from './general-guidelines';
import Headers from './headers';
import Icons from './icons';
import Layout from './Layout';
import SideMenu from './Menu';
import Shadow from './Shadow';
import Transparency from './transparency';
import Typography from './typography';
import Utility from './utility';

const Styles: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    return (
        <>
            <SideMenu />
            <div className="coveo-form flex-auto relative bg-pure-white shadow-2 ml4 overflow-auto demo-content">
                <Route path={`${match.url}/general-guidelines`} component={GeneralGuidelines} />
                <Route path={`${match.url}/borders`} component={Borders} />
                <Route path={`${match.url}/cards`} component={Cards} />
                <Route path={`${match.url}/colors`} component={Colors} />
                <Route path={`${match.url}/components`} component={Components} />
                <Route path={`${match.url}/filtering`} component={Filtering} />
                <Route path={`${match.url}/form-controls`} component={FormControls} />
                <Route path={`${match.url}/headers`} component={Headers} />
                <Route path={`${match.url}/icons`} component={Icons} />
                <Route path={`${match.url}/layout`} component={Layout} />
                <Route path={`${match.url}/shadow`} component={Shadow} />
                <Route path={`${match.url}/transparency`} component={Transparency} />
                <Route path={`${match.url}/typography`} component={Typography} />
                <Route path={`${match.url}/utility`} component={Utility} />
                <Route
                    exact
                    path={`${match.url}/`}
                    component={() => <Redirect to={`${match.url}/general-guidelines`} />}
                />
            </div>
        </>
    );
};

export default Styles;
