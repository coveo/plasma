import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';

import {TestUtils} from '../../../utils/TestUtils';
import {CollapsibleConnected} from '../CollapsibleConnected';
import {CollapsibleInfoBox, CollapsibleInfoBoxProps} from '../CollapsibleInfoBox';

describe('CollapsibleInfoBox', () => {
    const basicProps: CollapsibleInfoBoxProps = {
        id: 'my-collapsible-info-box',
        title: 'wanna-buy-some-magic?',
    };

    const mountComponent = () => mount(
        <Provider store={TestUtils.buildStore()}>
            <CollapsibleInfoBox {...basicProps}></CollapsibleInfoBox>
        </Provider>,
    );

    it('should render without errors', () => {
        expect(() => shallow(
            <CollapsibleInfoBox id='platano' title='header text'></CollapsibleInfoBox>,
        )).not.toThrow();
    });

    describe('rendering', () => {
        let component: ReactWrapper<any>;

        beforeEach(() => {
            component = mountComponent();
        });

        it('should render a CollapsibleConnected component', () => {
            expect(component.find(CollapsibleConnected).exists()).toBe(true);
        });
    });
});
