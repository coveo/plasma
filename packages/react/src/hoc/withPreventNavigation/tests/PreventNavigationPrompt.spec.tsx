import {shallow, ShallowWrapper} from 'enzyme';
import * as _ from 'underscore';
import {ModalComposite} from '../../../components/modal/ModalComposite.js';

import {PreventNavigationPrompt, PreventNavigationPromptProps} from '../PreventNavigationPrompt.js';

describe('Modal with Prevent Navigation', () => {
    let component: ShallowWrapper<any, any>;

    const defaultProps: PreventNavigationPromptProps = {
        id: 'hello',
        title: 'Unsaved Changes',
        content: 'Are you sure you want to leave this page without saving? All unsaved changes will be lost.',
        exit: 'Exit without applying changes',
        stay: 'Cancel',
        onStay: _.noop,
        onClose: _.noop,
        isOpen: true,
    };

    const shallowWithProps = (props: Partial<PreventNavigationPromptProps> = {}) => {
        component = shallow(<PreventNavigationPrompt {...defaultProps} {...props} />);
    };

    it('should mount and unmount without error', () => {
        expect(() => {
            shallowWithProps();
            component.unmount();
        }).not.toThrow();
    });

    it('should call onStay when the user close the modal', () => {
        const spy = jest.fn();
        shallowWithProps({onStay: spy});

        component.find(ModalComposite).prop('onClose')();

        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should call onStay when the user click on the stay button of the footer', () => {
        const spy = jest.fn();
        shallowWithProps({onStay: spy});

        const footer = shallow(
            <div>{component.find(ModalComposite).prop<React.ReactElement>('modalFooterChildren')}</div>
        );
        footer.find('.js-stay').simulate('click');

        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should call onClose when the user click on the exit button of the footer', () => {
        const spy = jest.fn();
        shallowWithProps({onClose: spy});

        const footer = shallow(
            <div>{component.find(ModalComposite).prop<React.ReactElement>('modalFooterChildren')}</div>
        );
        footer.find('.js-exit').simulate('click');

        expect(spy).toHaveBeenCalledTimes(1);
    });
});
