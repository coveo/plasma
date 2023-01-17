import {ClassAttributes, Component, ReactNode} from 'react';
import * as _ from 'underscore';

import {ITitleProps, Title} from '../title/Title.js';
import {BreadcrumbLink, IBreadcrumbLinkProps} from './BreadcrumbLink.js';

export interface IBreadcrumbProps extends ClassAttributes<Breadcrumb> {
    /**
     * Array of breadcrumb links to navigate to previous pages
     */
    links?: IBreadcrumbLinkProps[];
    /**
     * The content of the current breadcrumb
     */
    title: ITitleProps;
    children?: ReactNode;
}

/**
 * @deprecated Use Mantine Breadcrumbs instead: https://mantine.dev/core/breadcrumbs/
 */
export class Breadcrumb extends Component<IBreadcrumbProps> {
    static defaultProps: Partial<IBreadcrumbProps> = {
        links: [],
    };

    private getLinks(): JSX.Element[] {
        return _.map(this.props.links, (link: IBreadcrumbLinkProps) => (
            <BreadcrumbLink
                key={link.name}
                {..._.extend(link, {
                    link: link?.link ? `${link.link}` : undefined,
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
