import {shallow} from 'enzyme';
import * as React from 'react';
import {Tooltip} from '../../tooltip/Tooltip';
import {InputDescription} from '../InputDescription';
import {LabeledInput} from '../LabeledInput';

describe('LabeledInput', () => {
    const SOME_LABEL = '📺📽';
    const SOME_MESSAGE = '📜';
    const SOME_HELP_TEXT = '👞👟👡';
    const SOME_HEADER_CLASS = '🐦🐓🐤🐣';

    describe('<LabeledInput />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(<LabeledInput />);
            }).not.toThrow();
        });
    });

    describe('<LabeledInput />', () => {
        it('should output label when specified', () => {
            const label = shallow(<LabeledInput label={SOME_LABEL} />);
            expect(label.find('header').text()).toContain(SOME_LABEL);
        });

        it('should configure a tooltip with information prop when specified', () => {
            const label = shallow(<LabeledInput optionalInformation={SOME_LABEL} />);
            expect(label.find(Tooltip).props().title).toBe(SOME_LABEL);
        });

        it('should output headerClassName on the header element when specified', () => {
            const label = shallow(<LabeledInput label={SOME_LABEL} headerClassName={SOME_HEADER_CLASS} />);
            expect(label.find('header').hasClass(SOME_HEADER_CLASS)).toBe(true);
        });

        it('should not output a header when both label and information are not specified', () => {
            const label = shallow(<LabeledInput />);
            expect(label.find('header').exists()).toBe(false);
        });

        it('should output message when specified', () => {
            const label = shallow(<LabeledInput message={SOME_MESSAGE} />);
            expect(
                label
                    .find(InputDescription)
                    .dive()
                    .text()
            ).toBe(SOME_MESSAGE);
        });

        it('should output description when specified', () => {
            const label = shallow(<LabeledInput message={SOME_HELP_TEXT} />);
            expect(
                label
                    .find(InputDescription)
                    .dive()
                    .text()
            ).toBe(SOME_HELP_TEXT);
        });

        it('should output both message and description when specified', () => {
            const label = shallow(<LabeledInput helpText={SOME_HELP_TEXT} message={SOME_MESSAGE} />);
            expect(
                label
                    .find(InputDescription)
                    .first()
                    .dive()
                    .text()
            ).toBe(SOME_MESSAGE);
            expect(
                label
                    .find(InputDescription)
                    .last()
                    .dive()
                    .text()
            ).toBe(SOME_HELP_TEXT);
        });

        it('should not output message and description when not specified', () => {
            const label = shallow(<LabeledInput />);
            expect(label.find(InputDescription).exists()).toBe(false);
        });

        it('should render children', () => {
            const SomeComponent = () => <div>COMPONENT</div>;
            const form = shallow(
                <LabeledInput>
                    <SomeComponent />
                </LabeledInput>
            );

            expect(form.find(SomeComponent)).toBeDefined();
        });
    });
});
