import * as React from 'react';
import {Redirect, Route, RouteComponentProps, Switch} from 'react-router-dom';
import * as _ from 'underscore';
import {Loading} from '../../../src/components/loading/Loading';

import ComponentPage from './ComponentPage';
import {IComponent} from './ComponentsInterface';
import SideMenu from './Menu';

const Components: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    const [components, setComponents] = React.useState([]);
    React.useEffect(() => {
        const load = async (path: string, ctx: any) => {
            const component = await ctx(path);
            const name = _.keys(component)[0].replace(/Examples?/i, '');
            const componentPrototype = _.values(component)[0];
            const c: IComponent = {
                name,
                path,
                component: componentPrototype,
            };
            return c;
        };
        const loadAll = () => {
            const componentFiles = require.context('../../../src/', true, /Examples?\.tsx?$/i, 'lazy');
            return Promise.all(componentFiles.keys().map((path) => load(path, componentFiles)));
        };
        loadAll().then((all) => setComponents(all.filter(Boolean)));
    }, [match]);
    const routes = components
        .sort((a: IComponent, b: IComponent) => a.name.localeCompare(b.name))
        .map(({path, ...rest}: IComponent) => (
            <Route
                key={path}
                path={`${match.url}/${rest.name}`}
                component={() => <ComponentPage path={path} {...rest} />}
            />
        ));
    if (components.length === 0) {
        return <Loading fullContent />;
    }

    return (
        <div className="coveo-form flex full-content">
            <SideMenu components={components} />
            <div className="flex-auto overflow-auto relative">
                <Switch>
                    {routes}
                    <Route path="/" component={() => <Redirect to={`${match.url}/${components[0].name}`} />} />
                </Switch>
            </div>
        </div>
    );
};

export default Components;
