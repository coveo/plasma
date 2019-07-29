import * as React from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import * as _ from 'underscore';
import {SubNavigation} from '../../../src/components/subNavigation/SubNavigation';
import {IComponent} from './ComponentsInterface';

export interface IMenuProps extends RouteComponentProps {
    components: IComponent[];
}

const Menu: React.FunctionComponent<IMenuProps> = ({components, match, location, history}) => {
    const selectedLink: IComponent = _.findWhere(components, {name: location.pathname.replace(/^\//, '')});
    return (
        <div className="flex flex-column navigation-wrapper-opened" style={{maxWidth: '245px'}}>
            <SubNavigation
                selected={(selectedLink && selectedLink.path) || components[0].path}
                items={components.map(({path, name, link, component}: IComponent) => ({
                    id: path,
                    label: `${name}${component.deprecated ? ' (deprecated)' : ''}`,
                    link: `#${link}`,
                }))}
                onClickItem={(id: string) => {
                    const {link} = _.findWhere(components, {path: id});
                    history.push(link);
                }}
            />
        </div>
    );
};
export const ComponentsMenu = withRouter<IMenuProps, typeof Menu>(Menu);
