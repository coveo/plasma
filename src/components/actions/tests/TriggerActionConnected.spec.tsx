import {mount, ReactWrapper} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {addPrompt} from '../../inlinePrompt/InlinePromptActions';
import {IActionOptions} from '../Action';
import {ITriggerActionProps, TriggerAction} from '../TriggerAction';
import {TriggerActionConnected} from '../TriggerActionConnected';

describe('Actions', () => {
    describe('<TriggerActionConnected />', () => {
        const action: IActionOptions = {
            name: 'action',
            trigger: jasmine.createSpy('triggerMethod'),
            enabled: true,
        };
        const simple: boolean = false;
        const parentId: string = 'parent';

        let wrapper: ReactWrapper<any, any>;
        let triggerAction: ReactWrapper<ITriggerActionProps, any>;
        let store: Store<IReactVaporState>;

        beforeEach(() => {
            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <TriggerActionConnected
                        action={action}
                        simple={simple}
                        parentId={parentId}
                    />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            triggerAction = wrapper.find(TriggerAction).first();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
        });

        it('should get parentId as a prop', () => {
            const parentIdProp = triggerAction.props().parentId;

            expect(parentIdProp).toBeDefined();
            expect(parentIdProp).toBe(parentId);
        });

        it('should get what to do when an action needs confirmation as a prop', () => {
            const onTriggerConfirmProp = triggerAction.props().onTriggerConfirm;

            expect(onTriggerConfirmProp).toBeDefined();
        });

        it('should get what to do after the confirmation of an action as a prop', () => {
            const onConfirmProp = triggerAction.props().onConfirm;

            expect(onConfirmProp).toBeDefined();
        });

        it('should get what to do onCloseDropdown', () => {
            expect(triggerAction.props().onCloseDropdown).toBeDefined();
            expect(() => triggerAction.props().onCloseDropdown()).not.toThrow();
        });

        it('should add a prompt onTriggerConfirm', () => {
            expect(store.getState().prompts.length).toBe(0);
            triggerAction.props().onTriggerConfirm(jasmine.createSpy('onClick'), {}, 'someClass');
            expect(store.getState().prompts.length).toBe(1);
        });

        it('should remove the prompt onConfirm', () => {
            store.dispatch(addPrompt(parentId,
                {onClick: jasmine.createSpy('onClick'), userChoice: {}, isOpened: false, className: 'someClass'}));
            expect(store.getState().prompts.length).toBe(1);
            triggerAction.props().onConfirm();
            expect(store.getState().prompts.length).toBe(0);
        });
    });
});
