import * as React from 'react';

import {BlankSlate} from '../BlankSlate';

export class BlankSlateExample extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <h1 className="text-blue mb1 bold">BlankSlate List</h1>
                <div className="form-group">
                    <label className="form-control-label">Default BlankSlate</label>
                    <BlankSlate />
                </div>
                <div className="form-group">
                    <label className="form-control-label">BlankSlate with title</label>
                    <BlankSlate title="Title test" />
                </div>
                <div className="form-group">
                    <label className="form-control-label">BlankSlate with title</label>
                    <BlankSlate title="title test" />
                </div>
                <div className="form-group">
                    <label className="form-control-label">BlankSlate with title and description</label>
                    <BlankSlate title="title test" description="description test" />
                </div>
                <div className="form-group">
                    <label className="form-control-label">BlankSlate with title and description with a link</label>
                    <BlankSlate
                        title="title test"
                        description={
                            <span>
                                this is a description with a link to <a href="https//www.google.com">this website</a>
                            </span>
                        }
                    />
                </div>
                <div className="form-group">
                    <label className="form-control-label">BlankSlate to fit in a modal</label>
                    <BlankSlate title="title test" description="description test" withModal={true} />
                </div>
                <div className="form-group">
                    <label className="form-control-label">BlankSlate with a button</label>
                    <BlankSlate
                        title="title test"
                        buttons={[
                            {
                                name: 'button',
                                primary: true,
                                enabled: true,
                            },
                        ]}
                    />
                </div>
                <div className="form-group">
                    <label className="form-control-label">BlankSlate with two button with one disabled</label>
                    <BlankSlate
                        title="title test"
                        buttons={[
                            {
                                name: 'button 1',
                                primary: true,
                                enabled: true,
                            },
                            {
                                name: 'button 2',
                                enabled: false,
                                link: 'link',
                            },
                        ]}
                    />
                </div>
                <div className="form-group">
                    <label className="form-control-label">BlankSlate with an icon</label>
                    <BlankSlate
                        title="Title test"
                        description="description test"
                        svgName="tips"
                        svgClass="fill-orange"
                    />
                </div>
            </div>
        );
    }
}
