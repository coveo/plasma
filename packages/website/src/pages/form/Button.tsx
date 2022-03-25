import React from 'react';
import {PageLayout} from '../../building-blocs/PageLayout';

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

const iconAndLink = `
    import * as React from "react";
    import {Button} from "@coveord/plasma-react";
    import {ZombieSize24Px} from '@coveord/plasma-react-icons';

    export default () => <Button link="https://www.coveo.com"><ZombieSize24Px height={24} aria-label="zombie" /></Button>;
`;

const disabled = `
    import * as React from "react";
    import {Button} from "@coveord/plasma-react";

    export default () => <Button primary enabled={false}>Hello World!</Button>;
    `;

const prepend = `
    import * as React from 'react';
    import { Button, Svg } from '@coveord/plasma-react';

    export default () => (
        <Button classes={['mod-prepend']}>
            <span className="btn-prepend">P</span>
            Hello World!
        </Button>
    );
`;

export const ButtonExamples: React.FunctionComponent = () => (
    <PageLayout
        id="Button"
        title="Button"
        section="Form"
        thumbnail="actionButton"
        description="A button draws attention to an important action and initializes this action when clicked."
        code={code}
        examples={{
            primary: {code: primary, title: 'Primary, Default size'},
            small: {code: small, title: 'Secondary, Small size'},
            disabled: {code: disabled, title: 'Disabled'},
            prepend: {code: prepend, title: 'Prepended icon'},
            iconAndLink: {code: iconAndLink, title: 'Icon only with an hyperlkink'},
        }}
        componentSourcePath="/button/Button.tsx"
    />
);
export default ButtonExamples;
