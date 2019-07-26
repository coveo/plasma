import * as React from 'react';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router';
import {HashRouter as Router} from 'react-router-dom';
import * as _ from 'underscore';
import {ReactVaporStore} from '../../ReactVaporStore';
import {ComponentCode} from './ComponentCode';
import {IComponent} from './ComponentsInterface';
import {ComponentsMenu} from './ComponentsMenu';

export const ComponentsApp: React.FunctionComponent = () => {
    const req = require.context('../../../src/components/', true, /Examples?\.tsx?$/i);
    const components: IComponent[] = [];
    req.keys().forEach((key) => {
        const component = req(key);
        const code = require('!raw-loader!../../../src/components/' + key.replace('./', '')).default;
        const name = _.keys(component)[0].replace(/Examples?/i, '');
        components.push({name, code, path: key, component: _.values(component)[0]});
    });

    const routes = components.map((c: IComponent) => (
        <Route
            key={c.path}
            path={`/${c.name}`}
            component={() => (
                <>
                    {React.createElement(c.component)}
                    <ComponentCode>{c.code}</ComponentCode>
                </>
            )}
        />
    ));

    return (
        <Provider store={ReactVaporStore}>
            <Router>
                <div className="coveo-form flex full-content">
                    <ComponentsMenu components={components} />
                    <div className="flex-auto mod-header-padding mt2 overflow-auto">
                        <Switch>
                            {routes}
                            <Route
                                key={'/'}
                                component={() => (
                                    <>
                                        {React.createElement(components[0].component)}
                                        <ComponentCode>{components[0].code}</ComponentCode>
                                    </>
                                )}
                            />
                        </Switch>
                    </div>
                </div>
            </Router>
        </Provider>
    );
};
