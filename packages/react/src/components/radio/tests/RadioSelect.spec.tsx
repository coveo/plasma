import {shallow, ShallowWrapper} from 'enzyme';

import {Radio} from '../Radio';
import {RadioCard} from '../RadioCard';
import {IRadioSelectAllProps, RadioSelect} from '../RadioSelect';

describe('<RadioSelect />', () => {
    it('should mount without errors', () => {
        expect(() => {
            shallow(<RadioSelect />);
        }).not.toThrow();
    });

    it('should unmount without errors', () => {
        const wrapper = shallow(<RadioSelect />);

        expect(() => {
            wrapper.unmount();
        }).not.toThrow();
    });

    describe('once mounted', () => {
        let radioSelect: ShallowWrapper<IRadioSelectAllProps>;
        let spy: jest.Mock<any, any>;

        const firstRadioValue = 'blue';
        const secondRadioValue = 'red';
        const radioName = 'Johnny the almighty magic chicken';
        const specialDisabledTooltip = 'oh no i am disabled';

        const shallowRadioSelect = (props: IRadioSelectAllProps = {}) => {
            spy = jest.fn();
            radioSelect = shallow(
                <RadioSelect {...props}>
                    <Radio id="radio1" value={firstRadioValue} onClick={spy} disabledTooltip={specialDisabledTooltip} />
                    <Radio id="radio2" value={secondRadioValue} name={radioName} />
                </RadioSelect>,
            );
        };

        const shallowRadioSelectWithCard = (props: IRadioSelectAllProps = {}) => {
            spy = jest.fn();
            radioSelect = shallow(
                <RadioSelect {...props}>
                    <RadioCard
                        id="radio1"
                        value={firstRadioValue}
                        onClick={spy}
                        disabledTooltip={specialDisabledTooltip}
                    />
                    <RadioCard id="radio2" value={secondRadioValue} name={radioName} />
                </RadioSelect>,
            );
        };

        const shallowRadioSelectVariations = [
            {
                name: 'RadioSelect',
                creator: shallowRadioSelect,
                radioFC: Radio,
            },
            {
                name: 'RadioSelectWithCard',
                creator: shallowRadioSelectWithCard,
                radioFC: RadioCard,
            },
        ];

        shallowRadioSelectVariations.forEach((variation) => {
            describe(`${variation.name}`, () => {
                it('should call onMount on mount', () => {
                    const spyOnMount = jest.fn();
                    variation.creator({
                        onMount: spyOnMount,
                    });

                    expect(spyOnMount).toHaveBeenCalledTimes(1);
                });

                it('should call onUnmount on unmount', () => {
                    const spyOnUnmount = jest.fn();
                    variation.creator({
                        onUnmount: spyOnUnmount,
                    });
                    radioSelect.unmount();

                    expect(spyOnUnmount).toHaveBeenCalledTimes(1);
                });

                it('should set disabled on child if the props disabled is set to true', () => {
                    variation.creator({
                        disabled: true,
                    });

                    expect(radioSelect.find(variation.radioFC).first().props().disabled).toBe(true);
                });

                it('should set disabled on child if the child value is present in the disabled values list', () => {
                    variation.creator({
                        disabled: false,
                        disabledValues: [firstRadioValue, secondRadioValue],
                    });

                    expect(radioSelect.find(variation.radioFC).first().props().disabled).toBe(true);
                    expect(radioSelect.find(variation.radioFC).last().props().disabled).toBe(true);
                });

                it('should use the name from the child if defined', () => {
                    variation.creator();

                    expect(radioSelect.find(variation.radioFC).last().props().name).toBe(radioName);
                });

                it('should use the name prop instead of the child name if its not defined', () => {
                    variation.creator({
                        name: 'leaf',
                    });

                    expect(radioSelect.find(variation.radioFC).first().props().name).toBe('leaf');
                });

                it('should pass disabledTooltip prop to each option without one specified', () => {
                    const disabledTooltip = 'golf';
                    variation.creator({
                        disabledTooltip,
                    });

                    expect(radioSelect.find(variation.radioFC).first().props().disabledTooltip).toBe(
                        specialDisabledTooltip,
                    );
                    expect(radioSelect.find(variation.radioFC).last().props().disabledTooltip).toBe(disabledTooltip);
                });

                it('should set the prop checked of the children with the same value than the radio select', () => {
                    variation.creator({
                        value: firstRadioValue,
                    });

                    expect(radioSelect.find(variation.radioFC).first().props().checked).toBe(true);
                    expect(radioSelect.find(variation.radioFC).last().props().checked).toBe(false);
                });

                it('should call onClick on children props if defined', () => {
                    variation.creator();

                    expect(radioSelect.find(variation.radioFC).first().props().onClick).toBeDefined();

                    radioSelect
                        .find(variation.radioFC)
                        .first()
                        .props()
                        .onClick({} as any);

                    expect(spy).toHaveBeenCalledTimes(1);
                });

                it('should call onChange prop when the child call onClick', () => {
                    const spyOnChange = jest.fn();
                    variation.creator({
                        onChange: spyOnChange,
                    });

                    radioSelect
                        .find(variation.radioFC)
                        .first()
                        .props()
                        .onClick({} as any);

                    expect(spyOnChange).toHaveBeenCalledTimes(1);
                });

                it('should not call onChange prop when the child call onClick if the component is disabled', () => {
                    const spyOnChange = jest.fn();
                    variation.creator({
                        onChange: spyOnChange,
                        disabled: true,
                    });

                    radioSelect
                        .find(variation.radioFC)
                        .first()
                        .props()
                        .onClick({} as any);

                    expect(spyOnChange).toHaveBeenCalledTimes(0);
                });

                it('should call onChangeCallback prop when the child call onClick', () => {
                    const spyOnChangeCallback = jest.fn();
                    variation.creator({
                        onChangeCallback: spyOnChangeCallback,
                    });

                    radioSelect
                        .find(variation.radioFC)
                        .first()
                        .props()
                        .onClick({} as any);

                    expect(spyOnChangeCallback).toHaveBeenCalledTimes(1);
                });
            });
        });
    });
});
