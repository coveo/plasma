import {loremIpsum} from 'lorem-ipsum';
import * as React from 'react';
import {Button, InputConnected, Section, StickyFooter, withDirtyInputHOC, withDirtyStickyFooterHOC} from 'react-vapor';

import {ExampleComponent} from '../ComponentsInterface';

const lorem = loremIpsum({count: 200});

export const FooterExample: ExampleComponent = () => (
    <>
        <StickyFooterExample />
        <StickyFooterWithDirtyExample />
    </>
);

const StickyFooterExample: React.FunctionComponent = () => {
    const [isOpened, setIsOpened] = React.useState(false);

    return (
        <Section title="A sticky footer example">
            <Button name="toggle sticky footer" onClick={() => setIsOpened(!isOpened)} />
            <div className="mt2">{lorem}</div>
            <StickyFooter className="sticky-footer-mod-header" isOpened={isOpened}>
                <Button primary name="fake button   " />
            </StickyFooter>
        </Section>
    );
};

const InputWithDirty = withDirtyInputHOC(InputConnected);
const StickyFooterWithDirty = withDirtyStickyFooterHOC(StickyFooter);
const INPUT_ID = 'input-for-something';

const StickyFooterWithDirtyExample: React.FunctionComponent = () => (
    <Section title="A sticky footer with dirty implementation example">
        <InputWithDirty id={INPUT_ID} labelTitle="Change something here to trigger the dirty state" />
        <div className="mt2">{lorem}</div>
        <StickyFooterWithDirty className="sticky-footer-mod-header" validationIds={[INPUT_ID]}>
            <Button primary name="fake button   " />
        </StickyFooterWithDirty>
    </Section>
);
