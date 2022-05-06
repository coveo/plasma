import {mount, ReactWrapper, shallow} from 'enzyme';

import {RadioCard, RadioCardProps} from '../RadioCard';

describe('RadioCard', () => {
    const anId = 'patate';

    it('should render without errors', () => {
        expect(() => {
            shallow(<RadioCard id={anId} />);
        }).not.toThrow();
    });

    describe('<RadioCard />', () => {
        let radio: ReactWrapper<RadioCardProps, any>;

        beforeEach(() => {
            radio = mount(<RadioCard id={anId} />);
        });

        afterEach(() => {
            radio?.unmount();
        });

        it('should set id prop', () => {
            const innerInput = radio.find('input').first();

            expect(innerInput.prop('id')).toBe(anId);
        });

        it('should set name prop when specified', () => {
            const name = 'salut';

            expect(radio.find('input').prop('name')).toBe(undefined);

            radio.setProps({name}).mount().update();

            expect(radio.find('input').prop('name')).toBe(name);
        });

        it('should set value prop when specified', () => {
            const value = 'blueberry';

            expect(radio.prop('value')).toBe(undefined);

            radio.setProps({value}).mount();

            expect(radio.prop('value')).toBe(value);
        });

        it('should set not disable inner input when disabled prop is not specified', () => {
            const innerInput = radio.find('input').first();

            expect(innerInput.prop('disabled')).toBe(false);
        });

        it('should set not check inner input when checked prop is not specified', () => {
            const innerInput = radio.find('input').first();

            expect(innerInput.prop('checked')).toBe(false);
        });

        it('should set disabled prop when specified', () => {
            radio.setProps({disabled: false}).mount().update();

            expect(radio.find('input').prop('disabled')).toBe(false);

            radio.setProps({disabled: true}).mount().update();

            expect(radio.find('input').prop('disabled')).toBe(true);
        });

        it('should set checked prop when specified', () => {
            radio.setProps({checked: false}).mount().update();

            expect(radio.find('input').prop('checked')).toBe(false);

            radio.setProps({checked: true}).mount().update();

            expect(radio.find('input').prop('checked')).toBe(true);
        });

        it('should set classes when specified', () => {
            const innerClass = 'salut';
            const classes = [innerClass];

            expect(radio.find('div').hasClass(innerClass)).toBe(false);

            radio.setProps({classes}).mount().update();

            expect(radio.find('div').hasClass(innerClass)).toBe(true);
        });

        it('should call prop onChange when specified on click', () => {
            const changeSpy = jest.fn();
            const innerInput = radio.find('input');

            radio.setProps({onChange: changeSpy}).mount();
            innerInput.simulate('change');

            expect(changeSpy.mock.calls.length).toBe(1);
        });
    });
});
