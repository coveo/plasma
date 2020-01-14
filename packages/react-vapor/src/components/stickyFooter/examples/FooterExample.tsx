import * as loremIpsum from 'lorem-ipsum';
import * as React from 'react';

import {ExampleComponent} from '../../../../docs/src/components/ComponentsInterface';
import {Button} from '../../button/Button';
import {Section} from '../../section/Section';
import {StickyFooter} from '../StickyFooter';

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
