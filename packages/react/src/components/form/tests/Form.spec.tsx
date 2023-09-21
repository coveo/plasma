import userEvent from '@testing-library/user-event';
import {shallow} from 'enzyme';

import {render, screen} from '@test-utils';
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
            const {container} = render(<Form className={SOME_CLASS} mods="mod-header-padding" />);
            const formCollection = container.firstChild as HTMLFormElement;

            expect(formCollection.getElementsByClassName(SOME_CLASS).length).toBe(1);
            expect(formCollection.getElementsByClassName('mod-header-padding').length).toBe(1);
        });

        it('should render children', () => {
            const SomeComponent = () => <div>COMPONENT</div>;
            const form = shallow(
                <Form>
                    <SomeComponent />
                </Form>,
            );

            expect(form.find(SomeComponent)).toBeDefined();
        });

        it('should set margin top and bottom if "noMargin" prop is set to false', () => {
            const {container} = render(<Form className={SOME_CLASS} mods="mod-header-padding" />);
            const formCollection = container.firstChild as HTMLFormElement;

            expect(formCollection.getElementsByClassName('my2').length).toBe(1);
        });

        it('should not set margin top and bottom if "noMargin" prop is set to true', () => {
            const {container} = render(<Form className={SOME_CLASS} noMargin mods="mod-header-padding" />);
            const formCollection = container.firstChild as HTMLFormElement;

            expect(formCollection.getElementsByClassName('my2').length).toBe(0);
            expect(formCollection.getElementsByClassName('mt2').length).toBe(0);
            expect(formCollection.getElementsByClassName('mb2').length).toBe(0);
        });

        it('does not change the url when the user press enter inside a form', async () => {
            const user = userEvent.setup();
            const initialHREF = window.location.href;

            render(
                <Form>
                    <input defaultValue="" name="patate" />
                    <input type="submit" value="submit" />
                </Form>,
            );

            await user.type(screen.getByRole('textbox'), 'hello world');
            await user.click(screen.getByRole('button'));

            expect(window.location.href).toBe(initialHREF);
        });
    });
});
