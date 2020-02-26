import * as React from 'react';
import {
    BlankSlate,
    BlankSlateWithError,
    BlankSlateWithTable,
    BlankSlateWithTableInError,
    ButtonWithRefreshCallback,
} from 'react-vapor';

export class BlankSlateExample extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Default BlankSlate</label>
                    <BlankSlate />
                </div>
                <div className="form-group">
                    <label className="form-control-label">BlankSlate with title</label>
                    <BlankSlate title="Title test" />
                </div>
                <div className="form-group">
                    <label className="form-control-label">BlankSlate with title and description</label>
                    <BlankSlate title="Title test" description="description test" />
                </div>
                <div className="form-group">
                    <label className="form-control-label">BlankSlate with title and description with a link</label>
                    <BlankSlate
                        title="Title test"
                        description={
                            <span>
                                This is a description with a link to <a href="https//www.google.com">this website</a>
                            </span>
                        }
                    />
                </div>
                <div className="form-group">
                    <label className="form-control-label">BlankSlate to fit in a modal</label>
                    <BlankSlate title="Title test" description="Description test" withModal={true} />
                </div>
                <div className="form-group">
                    <label className="form-control-label">BlankSlate with a button</label>
                    <BlankSlate
                        title="Title test"
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
                        title="Title test"
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
                <div className="form-group">
                    <label className="form-control-label">BlankSlate in error</label>
                    <BlankSlateWithError
                        title="Unable to retrieve X"
                        description="Super clear error message localized to ensure a good comprehension about the current error"
                    />
                </div>
                <div className="form-group">
                    <label className="form-control-label">BlankSlate for a table row</label>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <BlankSlateWithTable
                                title="Title test"
                                description="description test"
                                svgName="tips"
                                svgClass="fill-orange"
                            />
                        </tbody>
                    </table>
                </div>
                <div className="form-group">
                    <label className="form-control-label">BlankSlate for a table in error</label>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <BlankSlateWithTableInError
                                title="Unable to retrieve X"
                                description="Super clear error message localized to ensure a good comprehension about the current error"
                            />
                        </tbody>
                    </table>
                </div>
                <div className="form-group">
                    <label className="form-control-label">BlankSlate for a table in error</label>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <BlankSlateWithTableInError
                                title="Unable to retrieve X"
                                description="Super clear error message localized to ensure a good comprehension about the current error"
                                additionalSection={
                                    <ButtonWithRefreshCallback
                                        id="refresh"
                                        delay={10}
                                        callback={(start) => setTimeout(start, 2000)}
                                        renderCount={(count: number) => (
                                            <span className="text-black small-text">
                                                Auto refresh in {count} seconds
                                            </span>
                                        )}
                                        button={{
                                            name: 'Refresh',
                                            enabled: true,
                                        }}
                                        buttonContainerProps={{
                                            className: 'mb2',
                                        }}
                                    />
                                }
                            />
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
