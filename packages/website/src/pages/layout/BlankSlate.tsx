import React from 'react';
import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import * as React from 'react';
    import {BlankSlate} from '@coveord/plasma-react';

    export default () => (
        <BlankSlate
            svgName="tips"
            title="Title of the blank slate"
            description={
                <span>
                    This is a description with a link to{' '}
                    <a target="_blank" href="http://www.perdu.com/" className="link">
                        this website
                    </a>
                </span>
            }
            buttons={[
                {
                    name: 'button',
                    primary: true,
                    enabled: true,
                },
            ]}
        />
    );
`;

const inError = `
    import * as React from 'react';
    import {BlankSlateWithError} from '@coveord/plasma-react';

    export default () => (
        <BlankSlateWithError
            title="Unable to retrieve X"
            description="Super clear error message localized to ensure a good comprehension about the current error"
        />
    );
`;

const withTable = `
    import * as React from 'react';
    import {BlankSlateWithTable} from '@coveord/plasma-react';

    export default () => (
        <table className="table">
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <BlankSlateWithTable title="Title test" description="description test" svgName="tips" />
            </tbody>
        </table>
    );
`;

const tableInError = `
    import * as React from 'react';
    import {BlankSlateWithTableInError, ButtonWithRefreshCallback} from '@coveord/plasma-react';
    
    export default () => (        
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
                                <span className="small-text">Auto refresh in {count} seconds</span>
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
    );
`;

export const BlankSlateExample = () => (
    <PageLayout
        id="BlankSlate"
        componentSourcePath="/blankSlate/BlankSlate.tsx"
        title="Blank Slate"
        section="Layout"
        description="A blank slate informs users that a section doesn’t contain any data and provides a way to address it."
        thumbnail="placeholder"
        code={code}
        examples={{
            inError: {code: inError, title: 'With error'},
            withTable: {code: withTable, title: 'With table'},
            tableInError: {code: tableInError, title: 'Table in error'},
        }}
    />
);

export default BlankSlateExample;
