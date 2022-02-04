import React from 'react';
import {ExampleLayout} from '../../building-blocs/ExampleLayout';

const code = `
    import * as React from "react";
    import {Button} from "@coveord/plasma-react";

    export default () => <Button>Hello World!</Button>;
`;

const primary = `
    import * as React from "react";
    import {Button} from "@coveord/plasma-react";

    export default () => <Button primary>Hello World!</Button>;
`;

const small = `
    import * as React from "react";
    import {Button} from "@coveord/plasma-react";

    export default () => <Button small>Hello World!</Button>;
`;

const disabled = `
    import * as React from "react";
    import {Button} from "@coveord/plasma-react";

    export default () => <Button primary enabled={false}>Hello World!</Button>;
    `;

const prepend = `
    import * as React from 'react';
    import {Button, Svg} from '@coveord/plasma-react';

    export default () => (
        <Button classes={['mod-prepend']}>
            <span className="btn-prepend">
                <Svg svgName="copy" svgClass="icon mod-14" />
            </span>
            Copy to clipboard
        </Button>
    );
`;

export const ButtonExamples: React.FunctionComponent = () => (
    <ExampleLayout
        id="Button"
        title="Button"
        section="Form"
        thumbnail="actionButton"
        description="Buttons communicate actions, and, when clicked, initialize those actions."
        code={code}
        examples={{
            primary: {code: primary, title: 'Primary, Default size'},
            small: {code: small, title: 'Secondary, Small size'},
            disabled: {code: disabled, title: 'Disabled'},
            prepend: {code: prepend, title: 'Prepended icon'},
        }}
        componentSourcePath="/button/Button.tsx"
    />
);
