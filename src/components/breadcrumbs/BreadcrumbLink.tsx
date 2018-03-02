import * as React from 'react';
import {Svg} from '../svg/Svg';

export interface IBreadcrumbLinkProps {
    name: string;
    link: string;
}

export class BreadcrumbLink extends React.Component<IBreadcrumbLinkProps, {}> {
    render() {
        return (<li className='breadcrumb-title'>
            <a className='link' href={this.props.link}>{this.props.name}</a>
            <Svg svgName='arrow-right-rounded' svgClass='breadcrumb-arrow' />
        </li>);
    }
}
