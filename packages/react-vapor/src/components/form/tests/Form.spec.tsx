import {shallow} from 'enzyme';
import * as React from 'react';

import {Form} from '../Form';

describe('Form', () => {
    const SOME_TITLE = '🥝&👬';
    const SOME_CLASS = '📚';

    it('should render without errors', () => {
        expect(() => {
            shallow(<Form />);
        }).not.toThrow();
    });

    describe('<Form />', () => {
        it('should render the title in a h2 tag when defined', () => {
            const form = shallow(<Form title={SOME_TITLE} />);

            expect(form.find('h2').text()).toBe(SOME_TITLE);
        });

        it('should not render an h2 tag when the title is not defined', () => {
            const form = shallow(<Form />);

            expect(form.find('h2').exists()).toBe(false);
        });

        it('should render the fieldset with mods and classNames', () => {
            const form = shallow(<Form className={SOME_CLASS} mods="mod-header-padding" />);

            expect(form.hasClass(SOME_CLASS)).toBe(true);
            expect(form.hasClass('mod-header-padding')).toBe(true);
        });

        it('should render children', () => {
            const SomeComponent = () => <div>COMPONENT</div>;
            const form = shallow(
                <Form>
                    <SomeComponent />
                </Form>
            );

            expect(form.find(SomeComponent)).toBeDefined();
        });

        it('should set margin top and bottom if "noMargin" prop is set to false', () => {
            const form = shallow(<Form>Whatever</Form>);

            expect(form.hasClass('my2')).toBe(true);
        });

        it('should not set margin top and bottom if "noMargin" prop is set to true', () => {
            const form = shallow(<Form noMargin>Whatever</Form>);

            expect(form.hasClass('my2')).toBe(false);
            expect(form.hasClass('mt2')).toBe(false);
            expect(form.hasClass('mb2')).toBe(false);
        });
    });
});
