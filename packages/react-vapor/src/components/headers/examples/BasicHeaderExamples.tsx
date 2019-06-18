import * as React from 'react';
import {BasicHeader} from '../BasicHeader';
import {actions, defaultTabs, defaultTitle, documentationLink} from './ExamplesUtils';

export class BasicHeaderExamples extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <h1 className="text-blue mb1 bold">Basic header List</h1>
                <div className="form-group">
                    <label className="form-control-label">Default basic header</label>
                    <div className="form-control">
                        <BasicHeader title={defaultTitle} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Basic header with description</label>
                    <div className="form-control">
                        <BasicHeader title={defaultTitle} description="Simple description for the title" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Basic header with long description</label>
                    <div className="form-control">
                        <BasicHeader
                            title={defaultTitle}
                            description="Simple description Simple description Simple description Simple description Simple description Simple description Simple description Simple description Simple description Simple description Simple description"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Basic header with actions</label>
                    <div className="form-control">
                        <BasicHeader
                            title={defaultTitle}
                            description="Simple description for the title"
                            actions={actions}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Basic header with a long title</label>
                    <div className="form-control">
                        <BasicHeader
                            title={{
                                text:
                                    'Pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika ',
                                prefix: 'Catch this pokemon:',
                                documentationLink,
                            }}
                            description="Simple description for the title"
                            actions={actions}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Basic header with tabs</label>
                    <div className="form-control">
                        <BasicHeader
                            title={defaultTitle}
                            description="Simple description for the title"
                            actions={actions}
                            tabs={defaultTabs}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
