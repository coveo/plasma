import * as React from 'react';
import {Redirect, Route, RouteComponentProps, Switch} from 'react-router-dom';
import * as _ from 'underscore';

import ComponentPage from './ComponentPage';
import {IComponent, TabConfig} from './ComponentsInterface';
import SideMenu from './Menu';

const START_STOP = /\/\/ start-print\s*([\s\S]*)\/\/ stop-print/g;
const START_END = /\/\/ start-print\s*([\s\S]*)$/g;
const BEGIN_STOP = /^([\s\S]*)\/\/ stop-print/g;

function chopDownSourceFile(wholeFile: string): string {
    const hasStartDirective = wholeFile.indexOf('// start-print') >= 0;
    const hasStopDirective = wholeFile.indexOf('// stop-print') >= 0;

    if (hasStartDirective && hasStopDirective) {
        return START_STOP.exec(wholeFile)[1];
    } else if (hasStartDirective) {
        return START_END.exec(wholeFile)[1];
    } else if (hasStopDirective) {
        return BEGIN_STOP.exec(wholeFile)[1];
    } else {
        return wholeFile;
    }
}

const markdownFiles = require.context('../../../src/components/', true, /Examples?(\.\d+)?(\.\w+)?\.md$/i);
const tabsDict: Record<string, TabConfig[]> = markdownFiles.keys().reduce((memo: Record<string, TabConfig[]>, path) => {
    const [, componentName, order, tabName] = /(\w+)Examples?(?:\.(\d+))?(?:\.(\w+))?\.md$/.exec(path);
    if (componentName && tabName) {
        const markdown = require('!raw-loader!../../../src/components/' + path.replace('./', '')).default;
        memo[componentName] = [
            ...(memo[componentName] || []),
            {
                tabName,
                markdown,
                order: parseInt(order, 10) || 0,
            },
        ];
    }
    return memo;
}, {});

const componentFiles = require.context('../../../src/components/', true, /Examples?\.tsx?$/i);
const components = componentFiles.keys().map((path) => {
    const component = componentFiles(path);
    const code = chopDownSourceFile(require('!raw-loader!../../../src/components/' + path.replace('./', '')).default);
    const name = _.keys(component)[0].replace(/Examples?/i, '');
    const componentPrototype = _.values(component)[0];
    return {
        name,
        code,
        path,
        component: componentPrototype,
        tabs: tabsDict[name] || [],
    };
});

const Components: React.FunctionComponent<RouteComponentProps> = ({match}) => {
    const routes = components
        .sort((a: IComponent, b: IComponent) => a.name.localeCompare(b.name))
        .map(({path, ...rest}: IComponent) => (
            <Route key={path} path={`${match.url}/${rest.name}`} component={() => <ComponentPage {...rest} />} />
        ));

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
