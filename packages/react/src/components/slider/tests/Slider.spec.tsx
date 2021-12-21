import {mount, ReactWrapper, ShallowWrapper} from 'enzyme';
import {shallowWithStore} from '@helpers/enzyme-redux';
import {Range} from 'rc-slider';
import * as React from 'react';
import {act} from 'react-dom/test-utils';
import {Provider} from 'react-redux';

import {getStoreMock} from '../../../utils/tests/TestUtils';
import {AppendedValueSide, Slider} from '../Slider';

describe('<Slider/>', () => {
    let store: ReturnType<typeof getStoreMock>;
    const middleSliderRequiredProps = {
        id: 'SOME-ID',
        max: 100,
        min: -100,
    };
    const step = 50;

    beforeEach(() => {
        store = getStoreMock({
            sliders: [],
        });
    });

    afterEach(() => {
        middleSlider?.unmount();
        mountedSlider?.unmount();
    });

    let middleSlider: ShallowWrapper;
    let mountedSlider: ReactWrapper;

    const shallowedSlider = (props = {}) =>
        shallowWithStore(
            <Slider
                {...middleSliderRequiredProps}
                hasTooltip
                marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                step={step}
                initialValue={20}
                {...props}
            />,
            store
        );
    it('should mount and unmount without error', () => {
        expect(() => {
            shallowedSlider();
            shallowedSlider().unmount();
        }).not.toThrow();
    });

    describe('passed props', () => {
        it('should show the append value formatted if appendValueFormatter is defined', () => {
            middleSlider = shallowedSlider({
                appendValueFormatter: (value: number) => `+${value}`,
                appendValue: true,
            }).dive();

            expect(middleSlider.find('.slider-value').first().text()).toBe('+0');
            expect(middleSlider.find('.slider-value').first().text()).toBe('+0');
        });

        it('should render a track it with its marks', () => {
            middleSlider = shallowedSlider().dive().childAt(1).dive();
            const children: any = middleSlider.prop('children');
            const marks = children[2].props.marks;

            expect(marks).toEqual({0: '-2000', 33: '2000', 17: '0', 100: '10,000'});
        });

        it('should apply step prop to the range slider', () => {
            middleSlider = shallowedSlider().dive().childAt(1).dive();

            expect((middleSlider.prop('children') as any)[2].props.step).toEqual(step);
        });

        it('should set the handle hasTooltip prop to true when slider hasTooltip his passed', () => {
            middleSlider = shallowedSlider().dive().childAt(1).dive();
            const children: any = middleSlider.prop('children');
            const firstHandle = children[3][0];

            expect(firstHandle.props.handleCustomProps.hasTooltip).toBeTruthy();
        });

        it('should set the handle hasTooltip prop to false when slider hasTooltip his passed', () => {
            middleSlider = shallowWithStore(
                <Slider
                    {...middleSliderRequiredProps}
                    onChange={(value) => value}
                    initialValue={20}
                    customTooltip={() => <span>customTooltip</span>}
                    marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                    step={5}
                />,
                store
            )
                .dive()
                .childAt(1)
                .dive();
            const children: any = middleSlider.prop('children');
            const firstHandle = children[3][0];

            expect(firstHandle.props.handleCustomProps.hasTooltip).toBeUndefined();
        });

        it('should not pass the disabled props to the handle if the enable prop is set to true', () => {
            middleSlider = shallowedSlider().dive().childAt(1).dive();
            const children: any = middleSlider.prop('children');
            const firstHandle = children[3][0];

            expect(firstHandle.props.handleProps.disabled).toBeFalsy();
        });

        it('should pass the disabled props to the handle if the enable prop is set to false', () => {
            middleSlider = shallowWithStore(
                <Slider
                    {...middleSliderRequiredProps}
                    onChange={(value) => value}
                    initialValue={20}
                    customTooltip={() => <span>customTooltip</span>}
                    marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                    step={5}
                    disabled
                />,
                store
            )
                .dive()
                .childAt(1)
                .dive();

            const children: any = middleSlider.prop('children');
            const firstHandle = children[3][0];

            expect(firstHandle.props.handleProps.disabled).toBeTruthy();
        });

        it('should append the value to the right value if the appendedValue prop is passed with a AppendedValueSide at right', () => {
            middleSlider = shallowWithStore(
                <Slider
                    {...middleSliderRequiredProps}
                    onChange={(value) => value}
                    initialValue={20}
                    customTooltip={() => <span>customTooltip</span>}
                    marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                    step={5}
                    disabled
                    appendValue={AppendedValueSide.right}
                />,
                store
            ).dive();

            expect(middleSlider.childAt(1).prop('className')).toContain('appended-value');
            expect(middleSlider.childAt(0).prop('className')).toContain('hidden');
            expect(middleSlider.childAt(2).prop('className')).not.toContain('hidden');
        });

        it('should append the value to the left value if the appendedValue prop is passed with a AppendedValueSide at left', () => {
            middleSlider = shallowWithStore(
                <Slider
                    {...middleSliderRequiredProps}
                    onChange={(value) => value}
                    initialValue={20}
                    customTooltip={() => <span>customTooltip</span>}
                    marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                    step={5}
                    disabled
                    appendValue={AppendedValueSide.left}
                />,
                store
            ).dive();

            expect(middleSlider.childAt(1).prop('className')).toContain('appended-value');
            expect(middleSlider.childAt(0).prop('className')).not.toContain('hidden');
            expect(middleSlider.childAt(2).prop('className')).toContain('hidden');
        });

        it('should append the value on both sides value if the appendedValue prop is passed with a AppendedValueSide at both', () => {
            middleSlider = shallowWithStore(
                <Slider
                    {...middleSliderRequiredProps}
                    onChange={(value) => value}
                    initialValue={20}
                    customTooltip={() => <span>customTooltip</span>}
                    marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                    step={5}
                    disabled
                    appendValue={AppendedValueSide.both}
                />,
                store
            ).dive();

            expect(middleSlider.childAt(1).prop('className')).toContain('appended-value');
            expect(middleSlider.childAt(0).prop('className')).not.toContain('hidden');
            expect(middleSlider.childAt(2).prop('className')).not.toContain('hidden');
        });

        it('should append the computed to the right value if the appendedValue prop is passed with a TRUE value', () => {
            middleSlider = shallowWithStore(
                <Slider
                    {...middleSliderRequiredProps}
                    onChange={(value) => value}
                    initialValue={20}
                    customTooltip={() => <span>customTooltip</span>}
                    marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                    step={5}
                    disabled
                    appendValue
                />,
                store
            ).dive();

            expect(middleSlider.childAt(1).prop('className')).toContain('appended-value');
            expect(middleSlider.childAt(0).prop('className')).toContain('hidden');
            expect(middleSlider.childAt(2).prop('className')).not.toContain('hidden');
        });

        it('should NOT append the computed  value if the appendedValue prop is passed', () => {
            middleSlider = shallowWithStore(
                <Slider
                    {...middleSliderRequiredProps}
                    onChange={(value) => value}
                    initialValue={20}
                    customTooltip={() => <span>customTooltip</span>}
                    marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                    step={5}
                    disabled
                />,
                store
            ).dive();

            expect(middleSlider.childAt(0).prop('className')).toContain('hidden');
            expect(middleSlider.childAt(1).prop('className')).not.toContain('appended-value');
            expect(middleSlider.childAt(2).prop('className')).toContain('hidden');
        });
    });

    describe('state change', () => {
        it('should set a different Range value than the default [50, 50] if an initialValue is passed in the props', () => {
            const defaultSliderValue = [50, 50];
            mountedSlider = mount(
                <Provider store={store}>
                    <Slider
                        {...middleSliderRequiredProps}
                        onChange={(value) => value}
                        initialValue={20}
                        customTooltip={() => <span>customTooltip</span>}
                        step={5}
                    />
                </Provider>
            );

            expect(mountedSlider.find(Range).prop('value')).not.toEqual(defaultSliderValue);
        });

        it('should call the onChange callBack function on state change', () => {
            const callBackSpy = jest.fn();
            mountedSlider = mount(
                <Provider store={store}>
                    <Slider
                        {...middleSliderRequiredProps}
                        onChange={callBackSpy}
                        customTooltip={() => <span>customTooltip</span>}
                        marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                        step={5}
                    />
                </Provider>
            );

            callBackSpy.mockReset();
            act(() => {
                mountedSlider.find(Range).prop('onChange')([40, 50]);
            });

            expect(callBackSpy).toHaveBeenCalledTimes(1);
        });
    });
});
