import {mount, ReactWrapper, ShallowWrapper} from 'enzyme';
import {shallowWithStore} from 'enzyme-redux';
import {Range} from 'rc-slider';
import * as React from 'react';
import {act} from 'react-dom/test-utils';
import {Provider} from 'react-redux';

import {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';
import {MiddleSlider} from '../MiddleSlider';

describe('<MiddleSlider/>', () => {
    let store: ReactVaporMockStore;
    const middleSliderRequiredProps = {
        id: 'SOME-ID',
        range: [-100, 100] as [number, number],
    };

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

    const shallowedMiddleSlider = () =>
        shallowWithStore(
            <MiddleSlider
                {...middleSliderRequiredProps}
                onChange={(value) => value}
                customTooltip={() => <span>customTooltip</span>}
                hasTooltip
                marks={{0: '-2000', 33: '2000', 17: '0', 100: '10,000'}}
                step={5}
                initialValue={20}
                enabled
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
                step: 5,
                enabled: true,
                initialValue: 20,
            };
            middleSlider = shallowedMiddleSlider();
            expect(middleSlider.props()).toEqual(expectedProps);
        });

        it('should render a track it with its marks', () => {
            middleSlider = shallowedMiddleSlider()
                .dive()
                .dive();
            const children: any = middleSlider.prop('children');
            const marks = children[2].props.marks;
            expect(marks).toEqual({0: '-2000', 33: '2000', 17: '0', 100: '10,000'});
        });

        it('should apply the step prop', () => {
            middleSlider = shallowedMiddleSlider()
                .dive()
                .dive();
            const children: any = middleSlider.prop('children');
            const step = children[2].props.step;
            expect(step).toEqual(5);
        });

        it('should set the handle hasTooltip prop to true when slider hasTooltip his passed', () => {
            middleSlider = shallowedMiddleSlider()
                .dive()
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
                .dive();
            const children: any = middleSlider.prop('children');
            const firstHandle = children[3][0];
            expect(firstHandle.props.handleCustomProps.hasTooltip).toBeUndefined();
        });

        it('should not pass the disabled props to the handle if the enable prop is set to true', () => {
            middleSlider = shallowedMiddleSlider()
                .dive()
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
                .dive();

            const children: any = middleSlider.prop('children');
            const firstHandle = children[3][0];
            expect(firstHandle.props.handleProps.disabled).toBeTruthy();
        });
    });

    describe('state change', () => {
        it('should set de default value to [50, 50] and should update the MiddleSlider Range value on change', () => {
            const expectedDefaultValue = [50, 50];
            const expectedSliderValueInLowRange = [20, 50];
            const expectedSliderValueInHighRange = [50, 80];

            act(() => {
                mountedSlider = mount(
                    <Provider store={store}>
                        <MiddleSlider {...middleSliderRequiredProps} enabled />
                    </Provider>
                );
            });
            mountedSlider.update();
            expect(mountedSlider.find(Range).prop('value')).toEqual(expectedDefaultValue);

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
            expect(callBackSpy).toHaveBeenCalledTimes(3);
        });
    });
});
