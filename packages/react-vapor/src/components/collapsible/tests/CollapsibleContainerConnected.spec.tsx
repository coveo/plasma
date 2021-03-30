import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {render} from '@testing-library/react';
import {CollapsibleContainerConnected} from '../CollapsibleContainerConnected';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/tests/TestUtils';

describe('CollapsibleContainerConnected', () => {
    let store: Store<IReactVaporState>;

    beforeEach(() => {
        store = TestUtils.buildStore();
    });

    afterEach(() => {
        store.dispatch(clearState());
    });

    describe('if no informationUrl and informationTooltip are passed', () => {
        it('does not render a round contextual help svg in the header', () => {
            const {container} = render(
                <Provider store={store}>
                    <CollapsibleContainerConnected id="👑" title="🥔">
                        PatateKing!
                    </CollapsibleContainerConnected>
                </Provider>
            );

            const svg = container.querySelector('span.round-contextual-help');
            expect(svg).not.toBeInTheDocument();
        });
    });

    describe('if informationUrl is passed', () => {
        it('renders a round contextual help svg in the header', () => {

            const {container} = render(
                <Provider store={store}>
                    <CollapsibleContainerConnected id="👑" title="🥔" informationUrl="http://coveo.github.io/vapor/">
                        PatateKing!
                    </CollapsibleContainerConnected>
                </Provider>
            );

            const svg = container.querySelector('span.round-contextual-help svg.documentation-link');
            expect(svg).toBeInTheDocument();
        });
    });

    describe('if informationTooltip is passed', () => {
        it('renders a round contextual help svg in the header', () => {

            const {container} = render(
                <Provider store={store}>
                    <CollapsibleContainerConnected
                        id="👑"
                        title="🥔"
                        informationTooltip={{
                            title: 'PatateKing',
                            placement: 'top',
                        }}
                    >
                        PatateKing!
                    </CollapsibleContainerConnected>
                </Provider>
            );

            const svg = container.querySelector('span.round-contextual-help svg.icon');
            expect(svg).toBeInTheDocument();
        });
    });
});
