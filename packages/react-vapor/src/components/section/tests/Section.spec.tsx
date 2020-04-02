import {shallow} from 'enzyme';
import * as React from 'react';

import {Section} from '../Section';

describe('Section', () => {
    const SOME_TITLE = '🎢✨🎊';
    const SOME_DESCRIPTION = '🎀🎁';
    const SOME_CLASS = '💻';

    it('should render without errors', () => {
        expect(() => {
            shallow(<Section />);
        }).not.toThrow();
    });

    describe('<Section />', () => {
        it('should render the title in a h2 tag when defined', () => {
            const section = shallow(<Section title={SOME_TITLE} />);

            expect(section.find('h2').text()).toBe(SOME_TITLE);
        });

        it('should render the title in a h3 tag with level 2', () => {
            const section = shallow(<Section title={SOME_TITLE} level={2} />);

            expect(section.find('h3').text()).toBe(SOME_TITLE);
        });

        it('should render the title node in a h2 tag', () => {
            const section = shallow(<Section title={<div className="title-test">test</div>} level={2} />);

            expect(section.find('div.title-test').length).toBe(1);
        });

        it('should render the title in a h4 tag with level 3', () => {
            const section = shallow(<Section title={SOME_TITLE} level={3} />);

            expect(section.find('h4').text()).toBe(SOME_TITLE);
        });

        it('should not render the title when undefined', () => {
            const section = shallow(<Section />);

            expect(section.find('h2').exists()).toBe(false);
        });

        it('should render the description in a p tag when defined', () => {
            const section = shallow(<Section description={SOME_DESCRIPTION} />);

            expect(section.find('p').text()).toBe(SOME_DESCRIPTION);
        });

        it('should not render the p tag when description is undefined', () => {
            const section = shallow(<Section />);

            expect(section.find('p').exists()).toBe(false);
        });

        it('should render the fieldset with mods and classNames', () => {
            const form = shallow(<Section className={SOME_CLASS} mods="mod-header-padding" />);

            expect(form.hasClass(SOME_CLASS)).toBe(true);
            expect(form.hasClass('mod-header-padding')).toBe(true);
        });

        it('should render children', () => {
            const SomeComponent = () => <div>COMPONENT</div>;
            const form = shallow(
                <Section>
                    <SomeComponent />
                </Section>
            );

            expect(form.find(SomeComponent)).toBeDefined();
        });
    });
});
