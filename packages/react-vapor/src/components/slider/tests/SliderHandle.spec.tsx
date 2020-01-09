import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';

import SliderHandle, {CustomHandleProps, HandleProps} from '../SliderHandle';

describe('<SliderHandle/>', () => {
    let shallowedSliderHandle: ShallowWrapper;

    const handleCustomProps: CustomHandleProps = {
        customTooltip: undefined,
        rangeOutput: 100,
        hasTooltip: true,
    };

    const handleProps: HandleProps = {
        reverse: false,
        value: 75,
        dragging: true,
        vertical: false,
        offset: 75,
    };

    const shallowMountSliderHandle = () =>
        shallow(<SliderHandle handleProps={handleProps} handleCustomProps={handleCustomProps} />);

    afterEach(() => {
        shallowedSliderHandle?.unmount();
    });

    it('Should mount and unmount without trowing', () => {
        expect(() => {
            shallowMountSliderHandle();
            shallowMountSliderHandle().unmount();
        });
    });

    it('should show rangeOutput for the tooltip overlay if hasTooltip prop is passed but customTooltip props is not passed', () => {
        shallowedSliderHandle = shallowMountSliderHandle();
        expect(shallowedSliderHandle.prop('overlay')).toEqual(handleCustomProps.rangeOutput);
    });

    it('should use the customTooltip as overlay if the customTooltip prop is passed', () => {
        const customToolTip = <span>custom</span>;
        shallowedSliderHandle = shallow(
            <SliderHandle
                handleProps={handleProps}
                handleCustomProps={{...handleCustomProps, customTooltip: customToolTip}}
            />
        );
        expect(shallowedSliderHandle.prop('overlay')).toEqual(customToolTip);
    });

    it('should set the tooltip visible prop to true if the hasTooltip prop is passed and the handle is dragging', () => {
        shallowedSliderHandle = shallowMountSliderHandle();
        expect(shallowedSliderHandle.prop('visible')).toBeTruthy();
    });

    it('should set the tooltip visible prop to false if the hasTooltip prop is not passed even if the handle is dragging', () => {
        shallowedSliderHandle = shallow(
            <SliderHandle handleProps={handleProps} handleCustomProps={{...handleCustomProps, hasTooltip: false}} />
        );
        expect(shallowedSliderHandle.prop('visible')).toBeFalsy();
    });
});
