import {shallow} from 'enzyme';

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
