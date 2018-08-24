import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {DeleteInputAction, IDeleteInputActionProps} from '../DeleteInputAction';

describe('DeleteInputAction', () => {

    describe('<DeleteInputAction />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <DeleteInputAction onClick={() => 1} />,
                );
            }).not.toThrow();
        });
    });

    describe('<DeleteInputAction />', () => {
        let deleteInput: ReactWrapper<IDeleteInputActionProps, any>;

        beforeEach(() => {
            deleteInput = mount(
                <DeleteInputAction onClick={() => 1} />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            deleteInput.detach();
        });

        it('should render title prop if prop is set', () => {
            const title = 'a title';
            expect(deleteInput.find(`[title="${title}"]`).length).toBe(0);

            deleteInput.setProps({title}).update();
            expect(deleteInput.find(`[title="${title}"]`).length).toBeGreaterThanOrEqual(1);
        });
    });
});
