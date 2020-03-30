import classNames from 'classnames';
import * as React from 'react';
import {Svg} from '../svg/Svg';

export interface IBreadcrumbLinkProps {
    name: React.ReactNode;
    link?: string;
    classes?: string;
    onClick?: (props: IBreadcrumbLinkProps) => boolean; // return false to cancel the href event
}

export class BreadcrumbLink extends React.Component<IBreadcrumbLinkProps, {}> {
    private handleOnClick(e: React.MouseEvent<HTMLAnchorElement>): boolean {
        if (this.props.onClick && !this.props.onClick(this.props)) {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            e.preventDefault();
            return false;
        }
        return true;
    }

    render() {
        const linkClasses = classNames(
            {
                link: this.props.link,
                'text-blank semi-bold': !this.props.link,
            },
            this.props.classes
        );
        const TagName = this.props.link ? 'a' : 'span';
        return (
            <li className="breadcrumb-title">
                <TagName
                    className={linkClasses}
                    href={this.props.link}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => this.handleOnClick(e)}
                >
                    {this.props.name}
                </TagName>
                <Svg svgName="arrow-right-rounded" className="breadcrumb-arrow" />
            </li>
        );
    }
}
