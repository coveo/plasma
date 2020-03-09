import * as React from 'react';
import * as _ from 'underscore';
import {ITitleProps, Title} from '../title/Title';
import {BreadcrumbLink, IBreadcrumbLinkProps} from './BreadcrumbLink';

export interface IBreadcrumbProps extends React.ClassAttributes<Breadcrumb> {
    links?: IBreadcrumbLinkProps[];
    defaultLinkPath?: string;
    title: ITitleProps;
}

export class Breadcrumb extends React.Component<IBreadcrumbProps, {}> {
    static defaultProps: Partial<IBreadcrumbProps> = {
        links: [],
        defaultLinkPath: '',
    };

    private getLinks(): JSX.Element[] {
        return _.map(this.props.links, (link: IBreadcrumbLinkProps) => (
            <BreadcrumbLink
                key={link.name}
                {..._.extend(link, {
                    link: link?.link ? `${this.props.defaultLinkPath}${link.link}` : undefined,
                })}
            />
        ));
    }

    render() {
        return (
            <nav>
                <ul className="flex">
                    {this.getLinks()}
                    <li className="breadcrumb-title truncate">
                        <Title {...this.props.title}>{this.props.children}</Title>
                    </li>
                </ul>
            </nav>
        );
    }
}
