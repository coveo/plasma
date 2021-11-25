import {loremIpsum} from 'lorem-ipsum';
import * as React from 'react';
import * as _ from 'underscore';
import {
    Button,
    InputConnected,
    Section,
    StickyFooter,
    withDirtyInputHOC,
    withDirtyStickyFooterHOC,
    withDirty,
    SplitLayout,
    IWithDirty,
    ISplitLayoutProps,
} from 'react-vapor';

import {ExampleComponent} from '../../../utils/ExamplesUtils';
import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

const lorem = loremIpsum({count: 200});
const lorem1 = loremIpsum({count: 50});

// start-print
export const FooterExample: ExampleComponent = () => (
    <VaporComponent id="footer" title="Footer" usage="" withSource>
        <StickyFooterExample />
        <StickyFooterWithDirtyExample />
    </VaporComponent>
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

const ContentWithStickyFooter: React.FunctionComponent<Partial<IWithDirty> & ISplitLayoutProps> = _.compose(
    withDirty()
)(SplitLayout);

const StickyFooterWithDirtyExample: React.FunctionComponent = () => (
    <Section title="A sticky footer with dirty implementation example">
        <ContentWithStickyFooter
            id="FooterWithContent"
            leftChildren={
                <div>
                    <InputWithDirty id={INPUT_ID} labelTitle="Change something here to trigger the dirty state" />
                    <div className="mt2">{lorem1}</div>
                </div>
            }
            rightChildren={<div>Right Children</div>}
            showDirty={() => (
                <StickyFooterWithDirty className="sticky-footer-mod-header" validationIds={[INPUT_ID]}>
                    <Button primary name="fake button" />
                </StickyFooterWithDirty>
            )}
            isDirty
        />
    </Section>
);
// stop-print
