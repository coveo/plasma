import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {Radio} from '../../radio/Radio';
import {ChildForm, IChildFormProps} from '../ChildForm';

describe('ChildForm', () => {
    describe('<ChildForm />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <ChildForm />,
                );
            }).not.toThrow();
        });
    });

    describe('<ChildForm />', () => {
        let childForm: ReactWrapper<IChildFormProps, any>;

        beforeEach(() => {
            childForm = mount(
                <ChildForm>
                    <Radio id='id' />
                </ChildForm>,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            childForm.detach();
        });

        it('should disable children when disabled property is true', () => {
            expect(childForm.find(Radio).first().prop('disabled')).toBe(false);

            childForm.setProps({disabled: false}).mount().update();
            expect(childForm.find(Radio).first().prop('disabled')).toBe(false);

            childForm.setProps({disabled: true}).mount().update();
            expect(childForm.find(Radio).first().prop('disabled')).toBe(true);
        });
    });
});
