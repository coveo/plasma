import * as React from 'react';
import {BreadcrumbHeader} from '../BreadcrumbHeader';
import {actions, defaultBreadcrumb, defaultBreadcrumbLongTitle, defaultTabs} from './ExamplesUtils';

export class BreadcrumbHeaderExample extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <h1 className="text-blue mb1 bold">Breadcrumb header List</h1>
                <div className="form-group">
                    <label className="form-control-label">Default basic header</label>
                    <div className="form-control">
                        <BreadcrumbHeader breadcrumb={defaultBreadcrumb} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-control-label">Breadcrumb header with description</label>
                    <div className="form-control">
                        <BreadcrumbHeader
                            breadcrumb={defaultBreadcrumb}
                            description="Simple description for the title"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Breadcrumb header with long description</label>
                    <div className="form-control">
                        <BreadcrumbHeader
                            breadcrumb={defaultBreadcrumb}
                            description="Simple description Simple description Simple description Simple description Simple description Simple description Simple description Simple description Simple description Simple description Simple description"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Breadcrumb header without border bottom</label>
                    <div className="form-control">
                        <BreadcrumbHeader
                            breadcrumb={defaultBreadcrumb}
                            description="Simple description for the title"
                            hasBorderBottom={false}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Breadcrumb header without padding</label>
                    <div className="form-control">
                        <BreadcrumbHeader
                            breadcrumb={defaultBreadcrumb}
                            description="Simple description for the title"
                            hasPadding={false}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Breadcrumb header with actions</label>
                    <div className="form-control">
                        <BreadcrumbHeader
                            breadcrumb={defaultBreadcrumb}
                            description="Simple description for the title"
                            actions={actions}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-control-label">Breadcrumb header with tabs</label>
                    <div className="form-control">
                        <BreadcrumbHeader
                            breadcrumb={defaultBreadcrumbLongTitle}
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
