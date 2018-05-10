import * as React from 'react';
import {ILinkSvgProps} from '../../svg/LinkSvg';
import {Title} from '../Title';

export class TitleExamples extends React.Component<any, any> {

    render() {
        const defaultText: string = 'Title test';

        const documentationLink: ILinkSvgProps = {
            url: 'https://www.google.ca',
            target: '_blank',
            svg: {
                svgName: 'help',
                svgClass: 'fill-orange icon mod-20',
            },
        };

        return (
            <div className='mt2'>
                <h1 className='text-blue mb1 bold'>Title List</h1>
                <div className='form-group'>
                    <label className='form-control-label'>Default Title</label>
                    <div className='form-control'>
                        <Title text={defaultText} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Title with a prefix</label>
                    <div className='form-control'>
                        <Title text={defaultText} prefix='Edit:' />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Title with a tooltip on title</label>
                    <div className='form-control'>
                        <Title text={defaultText} prefix='Edit:' withTitleTooltip={true} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Title with a documentation link</label>
                    <div className='form-control'>
                        <Title text={defaultText} prefix='Edit:' documentationLink={documentationLink} />
                    </div>
                </div>
            </div>
        );
    }
}
