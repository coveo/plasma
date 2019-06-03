import {mount} from 'enzyme';
import * as React from 'react';

import {ChartContainer} from '../ChartContainer';

describe('<ChartContainer />', () => {
    it('should not throw', () => {
        expect(() => {
            const renderChart = (): any => null;
            const component = mount(<ChartContainer renderChart={renderChart} />);
            component.setProps({renderChart});
            component.unmount();
        }).not.toThrow();
    });

    it('should re-render on window resize', () => {
        spyOn(Element.prototype, 'getBoundingClientRect').and.returnValue({width: 10, height: 50});
        spyOn(Element.prototype, 'querySelectorAll').and.returnValue([{style: {}}]);
        spyOn(window, 'requestAnimationFrame').and.callFake((cb: () => void) => cb());

        const renderSpy = jasmine.createSpy('render').and.returnValue(null);

        const component = mount(<ChartContainer renderChart={renderSpy} />);
        // Need the component to update to get the ref.current
        component.setProps({renderChart: renderSpy});

        renderSpy.calls.reset();

        const resizeEvent = document.createEvent('Event');
        resizeEvent.initEvent('resize', true, true);
        window.dispatchEvent(resizeEvent);

        expect(renderSpy).toHaveBeenCalledTimes(1);
    });
});
