import {mount, ReactWrapper, ShallowWrapper} from 'enzyme';
import {shallowWithStore} from 'enzyme-redux';
import {Range} from 'rc-slider';
import * as React from 'react';
import {act} from 'react-dom/test-utils';
import {Provider} from 'react-redux';

import {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';
import {AppendedValueSide, MiddleSlider} from '../MiddleSlider';
import {computeStep} from '../SliderUtils';

describe('<MiddleSlider/>', () => {
    let store: ReactVaporMockStore;
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

    const shallowedMiddleSlider = (props = {}) =>
        shallowWithStore(
            <MiddleSlider
                {...middleSliderRequiredProps}
                onChange={(value) => value}
                customTooltip={() => <span>customTooltip</span>}
                hasTooltip
                marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                step={step}
                initialValue={20}
                enabled
                {...props}
            />,
            store
        );
    it('should mount and unmount without error', () => {
        expect(() => {
            shallowedMiddleSlider();
            shallowedMiddleSlider().unmount();
        }).not.toThrow();
    });

    describe('passed props', () => {
        it('should mount with its props', () => {
            const expectedProps = {
                ...middleSliderRequiredProps,
                customTooltip: jasmine.any(Function),
                setOutputValue: jasmine.any(Function),
                onChange: jasmine.any(Function),
                hasTooltip: true,
                marks: {0: '-2000', 33: '2000', 17: '0', 100: '10,000'},
                step,
                enabled: true,
                initialValue: 20,
            };
            middleSlider = shallowedMiddleSlider();
            expect(middleSlider.props()).toEqual(expectedProps);
        });

        it('should show the append value formatted if appendValueFormatter is defined', () => {
            middleSlider = shallowedMiddleSlider({
                appendValueFormatter: (value: number) => `+${value}`,
                appendValue: true,
            }).dive();
            expect(
                middleSlider
                    .find('.slider-value')
                    .first()
                    .text()
            ).toBe('+0');
            expect(
                middleSlider
                    .find('.slider-value')
                    .first()
                    .text()
            ).toBe('+0');
        });

        it('should render a track it with its marks', () => {
            middleSlider = shallowedMiddleSlider()
                .dive()
                .childAt(1)
                .dive();
            const children: any = middleSlider.prop('children');
            const marks = children[2].props.marks;
            expect(marks).toEqual({0: '-2000', 33: '2000', 17: '0', 100: '10,000'});
        });

        it('should apply the computed step prop to the range slider', () => {
            middleSlider = shallowedMiddleSlider()
                .dive()
                .childAt(1)
                .dive();
            const children: any = middleSlider.prop('children');
            const computedStep = computeStep(step, middleSliderRequiredProps.min, middleSliderRequiredProps.max);
            const middleSliderStep = children[2].props.step;
            expect(middleSliderStep).toEqual(computedStep);
        });

        it('should set the handle hasTooltip prop to true when slider hasTooltip his passed', () => {
            middleSlider = shallowedMiddleSlider()
                .dive()
                .childAt(1)
                .dive();
            const children: any = middleSlider.prop('children');
            const firstHandle = children[3][0];
            expect(firstHandle.props.handleCustomProps.hasTooltip).toBeTruthy();
        });

        it('should set the handle hasTooltip prop to false when slider hasTooltip his passed', () => {
            middleSlider = shallowWithStore(
                <MiddleSlider
                    {...middleSliderRequiredProps}
                    onChange={(value) => value}
                    initialValue={20}
                    customTooltip={() => <span>customTooltip</span>}
                    marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                    step={5}
                    enabled
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
            middleSlider = shallowedMiddleSlider()
                .dive()
                .childAt(1)
                .dive();
            const children: any = middleSlider.prop('children');
            const firstHandle = children[3][0];
            expect(firstHandle.props.handleProps.disabled).toBeFalsy();
        });

        it('should pass the disabled props to the handle if the enable prop is set to false', () => {
            middleSlider = shallowWithStore(
                <MiddleSlider
                    {...middleSliderRequiredProps}
                    onChange={(value) => value}
                    initialValue={20}
                    customTooltip={() => <span>customTooltip</span>}
                    marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                    step={5}
                    enabled={false}
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

        it('should append the computed to the right value if the appendedValue prop is passed with a AppendedValueSide at right', () => {
            middleSlider = shallowWithStore(
                <MiddleSlider
                    {...middleSliderRequiredProps}
                    onChange={(value) => value}
                    initialValue={20}
                    customTooltip={() => <span>customTooltip</span>}
                    marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                    step={5}
                    enabled={false}
                    appendValue={AppendedValueSide.right}
                />,
                store
            ).dive();

            expect(middleSlider.childAt(1).prop('className')).toContain('appended-value');
            expect(middleSlider.childAt(0).prop('className')).toContain('hidden');
            expect(middleSlider.childAt(2).prop('className')).not.toContain('hidden');
        });

        it('should append the computed to the left value if the appendedValue prop is passed with a AppendedValueSide at left', () => {
            middleSlider = shallowWithStore(
                <MiddleSlider
                    {...middleSliderRequiredProps}
                    onChange={(value) => value}
                    initialValue={20}
                    customTooltip={() => <span>customTooltip</span>}
                    marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                    step={5}
                    enabled={false}
                    appendValue={AppendedValueSide.left}
                />,
                store
            ).dive();

            expect(middleSlider.childAt(1).prop('className')).toContain('appended-value');
            expect(middleSlider.childAt(0).prop('className')).not.toContain('hidden');
            expect(middleSlider.childAt(2).prop('className')).toContain('hidden');
        });

        it('should append the computed on both sides value if the appendedValue prop is passed with a AppendedValueSide at both', () => {
            middleSlider = shallowWithStore(
                <MiddleSlider
                    {...middleSliderRequiredProps}
                    onChange={(value) => value}
                    initialValue={20}
                    customTooltip={() => <span>customTooltip</span>}
                    marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                    step={5}
                    enabled={false}
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
                <MiddleSlider
                    {...middleSliderRequiredProps}
                    onChange={(value) => value}
                    initialValue={20}
                    customTooltip={() => <span>customTooltip</span>}
                    marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                    step={5}
                    enabled={false}
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
                <MiddleSlider
                    {...middleSliderRequiredProps}
                    onChange={(value) => value}
                    initialValue={20}
                    customTooltip={() => <span>customTooltip</span>}
                    marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                    step={5}
                    enabled={false}
                />,
                store
            ).dive();
            expect(middleSlider.childAt(0).prop('className')).toContain('hidden');
            expect(middleSlider.childAt(1).prop('className')).not.toContain('appended-value');
            expect(middleSlider.childAt(2).prop('className')).toContain('hidden');
        });
    });

    describe('state change', () => {
        it('should set de default value to [50, 50] and should update the MiddleSlider Range value on change', () => {
            const expectedSliderValueInLowRange = [20, 50];
            const expectedSliderValueInHighRange = [50, 80];

            act(() => {
                mountedSlider = mount(
                    <Provider store={store}>
                        <MiddleSlider {...middleSliderRequiredProps} enabled />
                    </Provider>
                );
            });

            mountedSlider.find(Range).prop('onChange')(expectedSliderValueInLowRange);
            mountedSlider.update();
            expect(mountedSlider.find(Range).prop('value')).toEqual(expectedSliderValueInLowRange);

            mountedSlider.find(Range).prop('onChange')(expectedSliderValueInHighRange);
            mountedSlider.update();
            expect(mountedSlider.find(Range).prop('value')).toEqual(expectedSliderValueInHighRange);
        });

        it('should set a different Range value than the default [50, 50] if an initialValue is passed in the props', () => {
            const defaultSliderValue = [50, 50];
            act(() => {
                mountedSlider = mount(
                    <Provider store={store}>
                        <MiddleSlider
                            {...middleSliderRequiredProps}
                            onChange={(value) => value}
                            initialValue={20}
                            customTooltip={() => <span>customTooltip</span>}
                            marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                            step={5}
                            enabled
                        />
                    </Provider>
                );
            });
            mountedSlider.update();
            expect(mountedSlider.find(Range).prop('value')).not.toEqual(defaultSliderValue);
        });

        it('should call the onChange callBack function on state change', () => {
            const callBackSpy = jasmine.createSpy('🥔');
            act(() => {
                mountedSlider = mount(
                    <Provider store={store}>
                        <MiddleSlider
                            {...middleSliderRequiredProps}
                            onChange={callBackSpy}
                            customTooltip={() => <span>customTooltip</span>}
                            marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                            step={5}
                            enabled
                        />
                    </Provider>
                );
            });
            mountedSlider.find(Range).prop('onChange')([40, 50]);
            mountedSlider.update();
            expect(callBackSpy).toHaveBeenCalledTimes(2);
        });
    });
});
