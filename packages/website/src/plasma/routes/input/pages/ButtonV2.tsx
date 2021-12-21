import React from 'react';
import {ExampleLayout} from '../../../../demo-building-blocs/ExampleLayout';

export const ButtonV2: React.FunctionComponent = () => {
    const code = `
        import * as React from "react";
        import {Button} from "@coveord/plasma-react";

        export default () => <Button>Hello World!</Button>
    `;
    const primary = `
        import * as React from "react";
        import {Button} from "@coveord/plasma-react";

        export default () => <Button primary>Hello World!</Button>
    `;
    const small = `
        import * as React from "react";
        import {Button} from "@coveord/plasma-react";

        export default () => <Button small>Hello World!</Button>
    `;
    return (
        <ExampleLayout
            id="Button"
            title="Buttons"
            section="inputs"
            description={<Description />}
            code={code}
            examples={{primary: {code: primary, title: 'Primary button'}, small: {code: small, title: 'Small button'}}}
            componentSourcePath="/button/Button.tsx"
        />
    );
};

const Description = () => (
    <>
        <p className="body-m-book">
            Small paragraph about what the component does... Text fields are text boxes that allow users to input custom
            text entries with a keyboard. Various options can be shown with the field to communicate the input
            requirements.
        </p>
        <p className="body-m-book">
            Small paragraph about the usage guidelines of the components, this will help a little before we have the tab
            with more information about the usage guideline, but at least just a small paragraph should be helpful.
        </p>
    </>
);
