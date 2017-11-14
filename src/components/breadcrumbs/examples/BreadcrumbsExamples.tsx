import * as React from 'react';
import { Breadcrumb } from '../Breadcrumb';
import { ITitleProps } from '../../title/Title';
import { ILinkSvgProps } from '../../svg/LinkSvg';
import { IBreadcrumbLinkProps } from '../BreadcrumbLink';

export class BreadcrumbsExamples extends React.Component<any, any> {

  render() {
    const documentationLink: ILinkSvgProps = {
      link: {
        url: 'https://www.google.ca',
        target: '_blank',
      },
      svg: {
        svgName: 'help',
        svgClass: 'fill-orange icon mod-20',
      },
    };

    const defaultTitle: ITitleProps = {
      title: 'Pokemon',
      prefix: 'Catch them all:',
      documentationLink,
    };

    const link1: IBreadcrumbLinkProps = {
      name: 'Pikachu',
      link: '#',
    };

    const link2: IBreadcrumbLinkProps = {
      name: 'Squirtle',
      link: '#',
    };

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
          <label className='form-control-label'>Breadscrum with 1 link</label>
          <div className='form-control'>
            <Breadcrumb title={defaultTitle} links={[link1]} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Breadscrum with 2 links</label>
          <div className='form-control'>
            <Breadcrumb title={defaultTitle} links={[link1, link2]} />
          </div>
        </div>
      </div>
    );
  }
}
