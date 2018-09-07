import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';

import {TestUtils} from '../../../utils/TestUtils';
import {Svg} from '../../svg/Svg';
import {CollapsibleConnected} from '../CollapsibleConnected';
import {CollapsibleInfoBox, CollapsibleInfoBoxProps} from '../CollapsibleInfoBox';

describe('CollapsibleInfoBox', () => {
    const basicProps: CollapsibleInfoBoxProps = {
        id: 'my-collapsible-info-box',
        title: 'wanna-buy-some-magic?',
    };

    it('should render without errors', () => {
        expect(() => shallow(
            <CollapsibleInfoBox {...basicProps} />,
        )).not.toThrow();
    });

    describe('rendering', () => {
        let component: ReactWrapper<CollapsibleInfoBoxProps>;

        const mountComponent = (props?: Partial<CollapsibleInfoBoxProps>) => {
            if (component && component.length) {
                component.unmount();
            }
            component = mount(
                <Provider store={TestUtils.buildStore()}>
                    <CollapsibleInfoBox {...basicProps} {...props} />
                </Provider>,
            );
        };

        beforeEach(() => {
            mountComponent();
        });

        it('should render a CollapsibleConnected component', () => {
            expect(component.find(CollapsibleConnected).exists()).toBe(true);
        });

        it('should display a <h3 /> and a <Svg /> if not a section', () => {
            expect(component.find('h3').exists()).toBe(true);
            expect(component.find(Svg).length).toBe(2);
        });

        it('should display a <h2 /> instead of a <h3 /> and a <Svg /> if it is a section', () => {
            mountComponent({isSection: true});

            expect(component.find('h2').exists()).toBe(true);
            expect(component.find('h3').exists()).toBe(false);
            expect(component.find(Svg).length).toBe(1);
        });

        it('should display the sectionAdditionalContent if there is any and it is a section', () => {
            const sectionAdditionalContent = 'some content';

            mountComponent({isSection: true, sectionAdditionalContent});

            expect(component.html()).toContain(sectionAdditionalContent);
        });

        it('should display the sectionAdditionalContent according to the sectionAdditionalContentCondition if any', () => {
            const sectionAdditionalContent = 'some content';

            mountComponent({isSection: true, sectionAdditionalContent, sectionAdditionalContentCondition: () => false});

            expect(component.find('.hidden').length).toBe(1);

            mountComponent({isSection: true, sectionAdditionalContent, sectionAdditionalContentCondition: () => true});

            expect(component.find('.hidden').length).toBe(0);
        });

        it('should have the class passed as a prop for the additional content', () => {
            const classes: string = 'something';
            const sectionAdditionalContent = 'some content';

            mountComponent({isSection: true, sectionAdditionalContent, sectionAdditionalContentClasses: classes});

            expect(component.find(`.${classes}`).length).toBe(1);
        });
    });
});
