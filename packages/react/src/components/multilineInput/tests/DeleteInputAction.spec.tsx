import {mount, ReactWrapper, shallow} from 'enzyme';

import {DeleteInputAction, IDeleteInputActionProps} from '../DeleteInputAction.js';

describe('DeleteInputAction', () => {
    it('should render without errors', () => {
        expect(() => {
            shallow(<DeleteInputAction onClick={() => 1} />);
        }).not.toThrow();
    });

    describe('<DeleteInputAction />', () => {
        let deleteInput: ReactWrapper<IDeleteInputActionProps, any>;

        beforeEach(() => {
            deleteInput = mount(<DeleteInputAction onClick={() => 1} />, {attachTo: document.getElementById('App')});
        });

        afterEach(() => {
            deleteInput?.unmount();
        });

        it('should render title prop if prop is set', () => {
            const title = 'a title';

            expect(deleteInput.find(`[title="${title}"]`).length).toBe(0);

            deleteInput.setProps({title}).update();

            expect(deleteInput.find(`[title="${title}"]`).length).toBeGreaterThanOrEqual(1);
        });
    });
});
