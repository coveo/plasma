import {shallow} from 'enzyme';
import * as React from 'react';
import {ModalLoading} from './ModalLoading';

describe('ModalLoading tests', () => {
    const id: string = 'modal';

    describe('<ModalLoading />', () => {
        it('should mount and unmount without error', () => {
            expect(() => {
                const component = shallow(<ModalLoading id={id} />);

                component.unmount();
            }).not.toThrow();
        });
    });
});
