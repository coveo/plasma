import {mount, ReactWrapper} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {PlasmaState} from '../../../PlasmaState.js';
import {clearState} from '../../../utils/ReduxUtils.js';
import {TestUtils} from '../../../utils/tests/TestUtils.js';
import {addPrompt} from '../../inlinePrompt/InlinePromptActions.js';
import {IActionOptions} from '../Action.js';
import {ITriggerActionProps, TriggerAction, TriggerActionConnected} from '../TriggerActionConnected.js';

describe('<TriggerActionConnected />', () => {
    let action: IActionOptions;

    const simple: boolean = false;
    const parentId: string = 'parent';

    let wrapper: ReactWrapper<any, any>;
    let triggerAction: ReactWrapper<ITriggerActionProps, any>;
    let store: Store<PlasmaState>;

    beforeAll(() => {
        action = {
            name: 'action',
            trigger: jest.fn(),
            enabled: true,
        };
    });

    beforeEach(() => {
        store = TestUtils.buildStore();

        wrapper = mount(
            <Provider store={store}>
                <TriggerActionConnected action={action} simple={simple} parentId={parentId} />
            </Provider>,
            {attachTo: document.getElementById('App')}
        );
        triggerAction = wrapper.find(TriggerAction).first();
    });

    afterEach(() => {
        store.dispatch(clearState());
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
        triggerAction.props().onTriggerConfirm(jest.fn(), {}, 'someClass');

        expect(store.getState().prompts.length).toBe(1);
    });

    it('should remove the prompt onConfirm', () => {
        store.dispatch(
            addPrompt(parentId, {
                onClick: jest.fn(),
                userChoice: {},
                isOpened: false,
                className: 'someClass',
            })
        );

        expect(store.getState().prompts.length).toBe(1);
        triggerAction.props().onConfirm();

        expect(store.getState().prompts.length).toBe(0);
    });
});
