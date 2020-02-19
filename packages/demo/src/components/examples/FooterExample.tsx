import {loremIpsum} from 'lorem-ipsum';
import * as React from 'react';
import {Button, Section, StickyFooter} from 'react-vapor';

import {ExampleComponent} from '../ComponentsInterface';

const lorem = loremIpsum({count: 200});

export const FooterExample: ExampleComponent = () => <StickyFooterExample />;

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
