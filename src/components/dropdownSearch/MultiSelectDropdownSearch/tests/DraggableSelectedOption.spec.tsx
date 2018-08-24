import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';
import {TestUtils} from '../../../../utils/TestUtils';
import {UUID} from '../../../../utils/UUID';
import {DraggableSelectedOption, IDraggableSelectedOptionProps} from '../DraggableSelectedOption';

describe('DraggableSelectedOption', () => {
    const key: string = UUID.generate();
    const props: Partial<IDraggableSelectedOptionProps> = {
        key,
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

            expect(selectedOption.find('.selected-option-value').text()).toBe(label);
        });

        it('should change the opacity when the element is dragged', () => {
            mountOption();

            dndBackend.simulateBeginDrag([getHandlerId()[0]]);
            selectedOption.update();
            expect(selectedOption.find('.selected-option-wrapper').prop('style').opacity).toBe(0);

            dndBackend.simulateEndDrag();
        });

        it('should not switch elements if they are on the same index', () => {
            const spy = jasmine.createSpy('move');
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
            const spy = jasmine.createSpy('move');

            mountOption({move: spy});

            spyOn(dndMonitor, 'getItem').and.returnValue({index: 5});
            spyOn(dndMonitor, 'getClientOffset').and.returnValue({y: 0});

            dndBackend.simulateBeginDrag([getHandlerId()[0]]);
            dndBackend.simulateHover([getHandlerId(false)[1]]);

            expect(spy).toHaveBeenCalledTimes(1);
            dndBackend.simulateEndDrag();
        });

        it('should not switch elements if they are on different index but the dragged item is above the first item of the list', () => {
            const spy = jasmine.createSpy('move');

            mountOption({move: spy});

            spyOn(dndMonitor, 'getItem').and.returnValue({index: 5});
            spyOn(dndMonitor, 'getClientOffset').and.returnValue({y: 30});
            spyOn(Element.prototype, 'getBoundingClientRect').and.returnValue({bottom: 0, top: 50}); // middle is 25

            dndBackend.simulateBeginDrag([getHandlerId()[0]]);
            dndBackend.simulateHover([getHandlerId(false)[1]]);

            expect(spy).not.toHaveBeenCalled();
            dndBackend.simulateEndDrag();
        });

        it('should not switch elements if they are on different index but the dragged item is above the first item of the list', () => {
            const spy = jasmine.createSpy('move');
            const top = 50;
            const bottom = 0;

            mountOption({move: spy, index: 1});

            spyOn(dndMonitor, 'getItem').and.returnValue({index: 0});
            spyOn(dndMonitor, 'getClientOffset').and.returnValue({y: (top + bottom) / 2 - 1});
            spyOn(Element.prototype, 'getBoundingClientRect').and.returnValue({bottom, top});

            dndBackend.simulateBeginDrag([getHandlerId()[0]]);
            dndBackend.simulateHover([getHandlerId(false)[1]]);

            expect(spy).not.toHaveBeenCalled();
            dndBackend.simulateEndDrag();
        });
    });
});
