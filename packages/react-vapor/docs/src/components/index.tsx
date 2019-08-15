import * as React from 'react';
import {Redirect, Route, RouteComponentProps, Switch} from 'react-router-dom';
import * as _ from 'underscore';

import {ComponentCode} from './ComponentCode';
import {IComponent} from './ComponentsInterface';
import {ComponentsMenu} from './ComponentsMenu';

const Components: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    const req = require.context('../../../src/components/', true, /Examples?\.tsx?$/i);
    const components: IComponent[] = req
        .keys()
        .map((path) => {
            const component = req(path);
            const code = require('!raw-loader!../../../src/components/' + path.replace('./', '')).default;
            const name = _.keys(component)[0].replace(/Examples?/i, '');
            const link = `${match.url}/${name}`;
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
        <div className="coveo-form flex full-content">
            <ComponentsMenu components={components} />
            <div className="flex-auto mod-header-padding overflow-auto p2">
                <Switch>
                    {routes}
                    <Route path="/" component={() => <Redirect to={components[0].link} />} />
                </Switch>
            </div>
        </div>
    );
};

export default Components;
