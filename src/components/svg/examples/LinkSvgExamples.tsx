import * as React from 'react';
import * as _ from 'underscore';
import {defaultSvgProps, defaultTooltipProps} from '../../../utils/TestUtils';
import {ILinkSvgProps, LinkSvg} from '../LinkSvg';

export class LinkSvgExamples extends React.Component<any, any> {

    render() {
        const defaultProps: ILinkSvgProps = {
            url: 'https://www.google.ca',
            target: '_blank',
        };

        return (
            <div className='mt2'>
                <h1 className='text-blue mb1 bold'>LinkSvg List</h1>
                <div className='form-group'>
                    <label className='form-control-label'>Default LinkSvg</label>
                    <div className='form-control'>
                        <LinkSvg {...defaultProps} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>LinkSvg with a tooltip</label>
                    <div className='form-control'>
                        <LinkSvg {..._.extend({}, defaultProps, {tooltip: defaultTooltipProps})} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>LinkSvg with a custom svg</label>
                    <div className='form-control'>
                        <LinkSvg {..._.extend({}, defaultProps, {svg: defaultSvgProps})} />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>LinkSvg with a tooltip and without a href</label>
                    <div className='form-control'>
                        <LinkSvg tooltip={defaultTooltipProps} svg={defaultSvgProps} />
                    </div>
                </div>
            </div>
        );
    }
}
