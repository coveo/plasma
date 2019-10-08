import {shallow} from 'enzyme';
import * as React from 'react';

import {FormGroup} from '../FormGroup';

describe('FormGroup', () => {
    const SOME_TITLE = '🎢✨🎊';
    const SOME_DESCRIPTION = '🎀🎁';
    const SOME_CLASS = '💻';

    it('should render without errors', () => {
        expect(() => {
            shallow(<FormGroup />);
        }).not.toThrow();
    });

    describe('<FormGroup />', () => {
        it('should render the title in a h2 tag when defined', () => {
            const formGroup = shallow(<FormGroup title={SOME_TITLE} />);

            expect(formGroup.find('h2').text()).toBe(SOME_TITLE);
        });

        it('should render the title in a h3 tag with level 2', () => {
            const formGroup = shallow(<FormGroup title={SOME_TITLE} level={2} />);

            expect(formGroup.find('h3').text()).toBe(SOME_TITLE);
        });

        it('should render the title in a h4 tag with level 3', () => {
            const formGroup = shallow(<FormGroup title={SOME_TITLE} level={3} />);

            expect(formGroup.find('h4').text()).toBe(SOME_TITLE);
        });

        it('should not render the title when undefined', () => {
            const formGroup = shallow(<FormGroup />);

            expect(formGroup.find('h2').exists()).toBe(false);
        });

        it('should render the description in a p tag when defined', () => {
            const formGroup = shallow(<FormGroup description={SOME_DESCRIPTION} />);

            expect(formGroup.find('p').text()).toBe(SOME_DESCRIPTION);
        });

        it('should not render the p tag when description is undefined', () => {
            const formGroup = shallow(<FormGroup />);

            expect(formGroup.find('p').exists()).toBe(false);
        });

        it('should render the fieldset with mods and classNames', () => {
            const form = shallow(<FormGroup className={SOME_CLASS} mods="mod-header-padding" />);

            expect(form.hasClass(SOME_CLASS)).toBe(true);
            expect(form.hasClass('mod-header-padding')).toBe(true);
        });

        it('should render children', () => {
            const SomeComponent = () => <div>COMPONENT</div>;
            const form = shallow(
                <FormGroup>
                    <SomeComponent />
                </FormGroup>
            );

            expect(form.find(SomeComponent)).toBeDefined();
        });
    });
});
