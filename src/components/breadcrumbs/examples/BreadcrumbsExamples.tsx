import * as React from 'react';
import {link1, link2} from '../../headers/examples/ExamplesUtils';
import {ILinkSvgProps} from '../../svg/LinkSvg';
import {ITitleProps} from '../../title/Title';
import {Breadcrumb} from '../Breadcrumb';
import {IBreadcrumbLinkProps} from '../BreadcrumbLink';

export class BreadcrumbsExamples extends React.Component<any, any> {

    render() {
        const documentationLink: ILinkSvgProps = {
            url: 'https://www.google.ca',
            target: '_blank',
            svg: {
                svgName: 'help',
                svgClass: 'fill-orange icon mod-20',
            },
        };

        const defaultTitle: ITitleProps = {
            text: 'Pokemon',
            prefix: 'Catch them all:',
            documentationLink,
        };

        const link3: IBreadcrumbLinkProps = {
            name: 'Pikachu',
            link: 'pikachu',
        };

        const link4: IBreadcrumbLinkProps = {
            name: 'Squirtle',
            link: 'squirtle',
        };

        const link5: IBreadcrumbLinkProps = {
            name: 'Raichu',
            link: 'Raichu',
            onClick: (props: IBreadcrumbLinkProps) => {
                alert('this link will navigate');
                return true;
            },
        };

        const link6: IBreadcrumbLinkProps = {
            name: 'Pichu',
            link: 'Pichu',
            onClick: (props: IBreadcrumbLinkProps) => {
                alert('this link will not navigate');
                return false;
            },
        };

        const defaultLinkPath: string = 'https://www.google.ca/?q=pokemon/';

        return (
            <div className='mt2'>
                <h1 className='text-blue mb1 bold'>Breadcrumbs List</h1>
                <div className='form-group'>
                    <label className='form-control-label'>Default breadcrumb</label>
                    <div className='form-control'>
                        <Breadcrumb title={defaultTitle} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Breadcrumb with 1 link</label>
                    <div className='form-control'>
                        <Breadcrumb title={defaultTitle} links={[link1]} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Breadcrumb with 2 links</label>
                    <div className='form-control'>
                        <Breadcrumb title={defaultTitle} links={[link1, link2]} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Breadcrumb with 2 links and a defaultPath</label>
                    <div className='form-control'>
                        <Breadcrumb title={defaultTitle} defaultLinkPath={defaultLinkPath} links={[link3, link4]} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Breadcrumb with 2 links and onClick event</label>
                    <div className='form-control'>
                        <Breadcrumb title={defaultTitle} defaultLinkPath={defaultLinkPath} links={[link5, link6]} />
                    </div>
                </div>
            </div>
        );
    }
}
