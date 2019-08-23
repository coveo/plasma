import * as React from 'react';
import {Redirect, Route, RouteComponentProps, Switch} from 'react-router-dom';
import * as _ from 'underscore';

import Code from '../demo-building-blocs/Code';
import {IComponent} from './ComponentsInterface';
import SideMenu from './Menu';

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
                    <div className="mt2">
                        <Code language="tsx">{code}</Code>
                    </div>
                </>
            )}
        />
    ));

    return (
        <div className="coveo-form flex full-content">
            <SideMenu components={components} />
            <div className="flex-auto mod-header-padding overflow-auto p2 relative">
                <Switch>
                    {routes}
                    <Route path="/" component={() => <Redirect to={components[0].link} />} />
                </Switch>
            </div>
        </div>
    );
};

export default Components;
