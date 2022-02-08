import * as React from 'react';
import {ILinkSvgProps, ISvgProps, ITooltipProps, LinkSvg} from '@coveord/plasma-react';
import * as _ from 'underscore';

import PlasmaComponent from '../../building-blocs/PlasmaComponent';

const defaultSvgProps: ISvgProps = {
    svgName: 'domainGoogle',
    svgClass: 'icon mod-2x',
};

const defaultTooltipProps: ITooltipProps = {
    title: 'default tooltip description',
};

// start-print

export class LinkSvgExamples extends React.Component<any, any> {
    render() {
        const defaultProps: ILinkSvgProps = {
            url: 'https://www.google.ca',
            target: '_blank',
        };

        return (
            <PlasmaComponent id="LinkSvg" title="Link SVG" withSource>
                <div className="mt2">
                    <div className="form-group">
                        <label className="form-control-label">Default LinkSvg</label>
                        <div className="form-control">
                            <LinkSvg {...defaultProps} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">LinkSvg with a tooltip</label>
                        <div className="form-control">
                            <LinkSvg {..._.extend({}, defaultProps, {tooltip: defaultTooltipProps})} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">LinkSvg with a custom svg</label>
                        <div className="form-control">
                            <LinkSvg {..._.extend({}, defaultProps, {svg: defaultSvgProps})} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">LinkSvg with a tooltip and without a href</label>
                        <div className="form-control">
                            <LinkSvg tooltip={defaultTooltipProps} svg={defaultSvgProps} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">LinkSvg with a custom label</label>
                        <div className="form-control">
                            <LinkSvg
                                url={defaultProps.url}
                                svg={{svgName: 'external', svgClass: 'icon mod-16 ml1'}}
                                linkClasses={['bold', 'caps']}
                            >
                                Learn more on Google
                            </LinkSvg>
                        </div>
                    </div>
                </div>
            </PlasmaComponent>
        );
    }
}
