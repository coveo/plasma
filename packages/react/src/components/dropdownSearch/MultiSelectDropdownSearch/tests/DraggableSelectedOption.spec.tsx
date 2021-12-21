import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';

import {TestUtils} from '../../../../utils/tests/TestUtils';
import {Svg} from '../../../svg';
import {Tooltip} from '../../../tooltip/Tooltip';
import {DraggableSelectedOption, IDraggableSelectedOptionProps} from '../DraggableSelectedOption';

describe('DraggableSelectedOption', () => {
    const props: Partial<IDraggableSelectedOptionProps> = {
        value: 'test',
        label: '',
        index: 0,
    };

    describe('<DraggableSelectedOption />', () => {
        const WrappedDraggableSelectedOption = TestUtils.wrapComponentInDnDContext(DraggableSelectedOption);
        let selectedOption: ReactWrapper<IDraggableSelectedOptionProps, any>;
        let dndBackend: any;
        let dndMonitor: any;

        const getHandlerId = (isSource = true) => {
            const char = isSource ? 'S' : 'T';
            return _.chain(dndMonitor.registry.types)
                .keys()
                .filter((k: string) => k[0] === char)
                .value();
        };

        const mountOption = (currentProps: Partial<IDraggableSelectedOptionProps> = {}) => {
            selectedOption = mount(<WrappedDraggableSelectedOption {...props} {...currentProps} />);
            const manager = (selectedOption.instance() as any).getManager();
            dndBackend = manager.getBackend();
            dndMonitor = manager.monitor;
        };

        afterEach(() => {
            dndMonitor.registry.types = {};
        });

        it('should render the display value in the selectedOption', () => {
            const label: string = 'displayTest';
            mountOption({label});

            expect(selectedOption.find('.selected-option-value').first().text()).toBe(label);
        });

        it('should render a custom value for the tooltip in the selectedOption', () => {
            const customValue: string = 'Bananas';
            mountOption({selectedTooltip: {title: customValue}});

            expect(selectedOption.find(Tooltip).prop('title')).toBe(customValue);
        });

        it('should render a custom tooltip value instead of the label prop in the selectedOption', () => {
            const customValue: string = 'Bananas';
            mountOption({label: 'helloworld', selectedTooltip: {title: customValue}});

            expect(selectedOption.find(Tooltip).prop('title')).toBe(customValue);
        });

        it('should render the tooltip placement to be at the top for the selectedOption by default', () => {
            const customValue: string = 'Bananas';
            mountOption({label: 'helloworld', selectedTooltip: {title: customValue}});

            expect(selectedOption.find(Tooltip).prop('placement')).toBe('top');
        });

        it('should render the tooltip placement to be at the bottom for the selectedOption', () => {
            const customValue: string = 'Bananas';
            mountOption({label: 'helloworld', selectedTooltip: {title: customValue, placement: 'bottom'}});

            expect(selectedOption.find(Tooltip).prop('placement')).toBe('bottom');
        });

        it('should render the draggable icon and X icon if readOnly is false', () => {
            mountOption();

            expect(selectedOption.find(Svg).length).toBe(2);
        });

        it('should not render the draggable icon if readOnly is true', () => {
            mountOption({readOnly: true});

            expect(selectedOption.find(Svg).length).toBe(0);
        });

        it('should change the opacity when the element is dragged', () => {
            mountOption();

            dndBackend.simulateBeginDrag([getHandlerId()[0]]);
            selectedOption.update();

            expect(selectedOption.find('.selected-option-wrapper').prop('style').opacity).toBe(0);

            dndBackend.simulateEndDrag();
        });

        it('should not switch elements if they are on the same index', () => {
            const spy = jest.fn();
            mountOption({move: spy});

            dndBackend.simulateBeginDrag([getHandlerId()[0]]);
            dndBackend.simulateHover([getHandlerId(false)[0]]);

            expect(spy).not.toHaveBeenCalled();
            dndBackend.simulateEndDrag();
        });

        it('should reset the label on drop', () => {
            const label = 'H3110 W0R1D';
            mountOption({label});

            dndBackend.simulateBeginDrag([getHandlerId()[0]]);
            dndBackend.simulateHover([getHandlerId(false)[0]]);

            expect(dndMonitor.getItem().label).toBe(label);

            dndBackend.simulateDrop();
            dndBackend.simulateEndDrag();

            expect(dndMonitor.getItem()).toBe(null);
        });

        it('should switch elements if they are on different index and the dragged item is above another item', () => {
            const spy = jest.fn();

            mountOption({move: spy});

            jest.spyOn(dndMonitor, 'getItem').mockReturnValue({index: 5});
            jest.spyOn(dndMonitor, 'getClientOffset').mockReturnValue({y: 0});

            dndBackend.simulateBeginDrag([getHandlerId()[0]]);
            dndBackend.simulateHover([getHandlerId(false)[1]]);

            expect(spy).toHaveBeenCalledTimes(1);
            dndBackend.simulateEndDrag();
        });

        it('should not switch elements if they are on different index but the dragged item is above the first item of the list', () => {
            const spy = jest.fn();

            mountOption({move: spy});

            jest.spyOn(dndMonitor, 'getItem').mockReturnValue({index: 5});
            jest.spyOn(dndMonitor, 'getClientOffset').mockReturnValue({y: 30});
            jest.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({bottom: 0, top: 50} as DOMRect); // middle is 25

            dndBackend.simulateBeginDrag([getHandlerId()[0]]);
            dndBackend.simulateHover([getHandlerId(false)[1]]);

            expect(spy).not.toHaveBeenCalled();
            dndBackend.simulateEndDrag();
        });

        it('should not switch elements if they are on different index but the dragged item is below the first item of the list', () => {
            const spy = jest.fn();
            const top = 50;
            const bottom = 0;

            mountOption({move: spy, index: 1});

            jest.spyOn(dndMonitor, 'getItem').mockReturnValue({index: 0});
            jest.spyOn(dndMonitor, 'getClientOffset').mockReturnValue({y: (top + bottom) / 2 - 1});
            jest.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({bottom, top} as DOMRect);

            dndBackend.simulateBeginDrag([getHandlerId()[0]]);
            dndBackend.simulateHover([getHandlerId(false)[1]]);

            expect(spy).not.toHaveBeenCalled();
            dndBackend.simulateEndDrag();
        });
    });
});
