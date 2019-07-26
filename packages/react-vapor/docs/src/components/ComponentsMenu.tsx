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
                items={components.map((c: IComponent) => ({
                    id: c.path,
                    label: c.name,
                    link: `#/${c.name}`,
                }))}
                onClickItem={(id: string) => {
                    const link: IComponent = _.findWhere(components, {path: id});
                    history.push(`/${link.name}`);
                }}
            />
        </div>
    );
};
export const ComponentsMenu = withRouter<IMenuProps, typeof Menu>(Menu);
