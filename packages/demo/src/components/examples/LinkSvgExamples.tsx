import * as React from 'react';
import {ILinkSvgProps, ISvgProps, ITooltipProps, LinkSvg} from 'react-vapor';
import * as _ from 'underscore';

const defaultSvgProps: ISvgProps = {
    svgName: 'domain-google',
    svgClass: 'icon mod-2x',
};

const defaultTooltipProps: ITooltipProps = {
    title: 'default tooltip description',
    placement: 'bottom',
    container: 'body',
};

export class LinkSvgExamples extends React.Component<any, any> {
    render() {
        const defaultProps: ILinkSvgProps = {
            url: 'https://www.google.ca',
            target: '_blank',
        };

        return (
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
                            svg={{svgName: 'external', svgClass: 'icon mod-16 fill-blue ml1'}}
                            linkClasses={['bold', 'caps']}
                        >
                            Learn more on Google
                        </LinkSvg>
                    </div>
                </div>
            </div>
        );
    }
}
