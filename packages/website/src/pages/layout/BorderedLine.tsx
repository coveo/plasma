import * as React from 'react';
import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import * as React from 'react';
    import {BorderedLine} from '@coveord/plasma-react';

    export default () => (
        <BorderedLine className="full-content-x">
            I am a bordered row and you can fill me with whatever you want!
        </BorderedLine>
    );
`;

const BorderedLineExamples = () => (
    <PageLayout
        id="BorderedLine"
        componentSourcePath="/borderedLine/BorderedLine.tsx"
        title="Bordered Line"
        section="Layout"
        thumbnail="placeholder"
        withPropsTable={false}
        code={code}
    />
);

export default BorderedLineExamples;
