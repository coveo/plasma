import {ArrowHeadRightSize24Px} from '@coveord/plasma-react-icons';
import classNames from 'clsx';
import {Component, MouseEvent, ReactNode} from 'react';

export interface IBreadcrumbLinkProps {
    name: ReactNode;
    link?: string;
    classes?: string;
    onClick?: (props: IBreadcrumbLinkProps) => boolean; // return false to cancel the href event
}

/**
 * @deprecated Use Mantine Breadcrumbs instead: https://mantine.dev/core/breadcrumbs/
 */
export class BreadcrumbLink extends Component<IBreadcrumbLinkProps> {
    private handleOnClick(e: MouseEvent<HTMLAnchorElement>): boolean {
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
            },
            this.props.classes
        );
        const TagName = this.props.link ? 'a' : 'span';
        return (
            <li className="breadcrumb-title">
                <TagName
                    className={linkClasses}
                    href={this.props.link}
                    onClick={(e: MouseEvent<HTMLAnchorElement>) => this.handleOnClick(e)}
                >
                    {this.props.name}
                </TagName>
                <ArrowHeadRightSize24Px />
            </li>
        );
    }
}
