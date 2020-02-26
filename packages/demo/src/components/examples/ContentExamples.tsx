import * as React from 'react';
import {Content, ItemBox, Loading, Svg, Tooltip} from 'react-vapor';

export class ContentExamples extends React.Component<any, any> {
    static deprecated = true;

    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Content with an string</label>
                    <div className="form-control">
                        <Content content="test" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Content with a Svg</label>
                    <div className="form-control">
                        <Content content={() => <Svg svgName="domain-google" svgClass="icon" />} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Content with a tooltip</label>
                    <div className="form-control">
                        <Content content={() => <Tooltip title="test">Tooltip</Tooltip>} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Content with a component Loading</label>
                    <div className="form-control">
                        <Content content={Loading} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Content with a component ItemBox with props</label>
                    <div className="form-control">
                        <Content content={ItemBox} componentProps={{value: 'test'}} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Content with an a tag for container</label>
                    <div className="form-control">
                        <Content content={ItemBox} componentProps={{value: 'test'}} tag={'div'} />
                    </div>
                </div>
            </div>
        );
    }
}
