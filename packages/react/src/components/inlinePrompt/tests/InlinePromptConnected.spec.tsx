import {mount, ReactWrapper} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';

import {PlasmaState} from '../../../PlasmaState';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/tests/TestUtils';
import {IInlinePromptOptions, InlinePrompt, InlinePromptConnected} from '../InlinePrompt';
import {addPrompt} from '../InlinePromptActions';

describe('InlinePrompt', () => {
    let id: string;
    let options: IInlinePromptOptions;

    describe('InlinePromptView', () => {
        let wrapper: ReactWrapper<any, any>;
        let inlinePrompt: ReactWrapper;
        let store: Store<PlasmaState>;

        beforeEach(() => {
            id = 'filter-box';
            options = {
                onClick: jest.fn(),
                userChoice: {
                    icon: 'icon',
                    description: 'description',
                    cancel: 'cancel',
                    choices: {
                        confirm: 'confirm',
                        other: 'other',
                        newChoice: 'some other choice',
                    },
                },
                isOpened: false,
                className: 'some-class',
            };

            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <InlinePromptConnected id={id} options={options} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            inlinePrompt = wrapper.find(InlinePrompt).first();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper?.unmount();
        });

        it('should remove the prompt from the store on cancel', () => {
            store.dispatch(addPrompt(id, options));

            expect(_.findWhere(store.getState().prompts, {id: id})).toBeDefined();

            (inlinePrompt as any).props().onCancel();

            expect(_.findWhere(store.getState().prompts, {id: id})).not.toBeDefined();
        });
    });
});
