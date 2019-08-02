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
    const components: IComponent[] = req
        .keys()
        .map((path) => {
            const component = req(path);
            const code = require('!raw-loader!../../../src/components/' + path.replace('./', '')).default;
            const name = _.keys(component)[0].replace(/Examples?/i, '');
            const link = `/${name}`;
            const componentPrototype = _.values(component)[0];
            return {name, link, code, path, component: componentPrototype};
        })
        .sort((a: IComponent, b: IComponent) => a.name.localeCompare(b.name));

    const routes = components.map(({path, link, code, component}: IComponent) => (
        <Route
            key={path}
            path={link}
            component={() => (
                <>
                    {React.createElement(component)}
                    <ComponentCode>{code}</ComponentCode>
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
