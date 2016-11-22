import { mount, ReactWrapper } from 'enzyme';
import { InlinePromptConnected } from '../InlinePromptConnected';
import { Provider } from 'react-redux';
import { TestUtils } from '../../../utils/TestUtils';
import { Store } from 'react-redux';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { IInlinePromptProps, InlinePrompt, IInlinePromptOptions } from '../InlinePrompt';
import { addPrompt } from '../InlinePromptActions';
import * as _ from 'underscore';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('InlinePrompt', () => {
  let id: string;
  let options: IInlinePromptOptions;

  describe('InlinePromptView', () => {
    let wrapper: ReactWrapper<any, any>;
    let inlinePrompt: ReactWrapper<IInlinePromptProps, any>;
    let store: Store<IReactVaporState>;

    beforeEach(() => {
      id = 'filter-box';
      options = {
        onClick: jasmine.createSpy('onClick'),
        userChoice: {
          icon: 'icon',
          description: 'description',
          cancel: 'cancel',
          choices: {
            confirm: 'confirm',
            other: 'other',
            newChoice: 'some other choice'
          }
        },
        isOpened: false,
        className: 'some-class'
      };

      store = TestUtils.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <InlinePromptConnected
            id={id}
            options={options}
            />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      inlinePrompt = wrapper.find(InlinePrompt).first();
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get its id as a prop', () => {
      let idProp = inlinePrompt.props().id;

      expect(idProp).toBeDefined();
      expect(idProp).toBe(id);
    });

    it('should get its options as a prop', () => {
      let optionsProp = inlinePrompt.props().options;

      expect(optionsProp).toBeDefined();
      expect(optionsProp).toEqual(jasmine.objectContaining(options));
    });

    it('should get what to do on cancel as a prop', () => {
      let onCancelProp = inlinePrompt.props().onCancel;

      expect(onCancelProp).toBeDefined();
    });

    it('should remove the prompt from the store on cancel', () => {
      store.dispatch(addPrompt(id, options));
      expect(_.findWhere(store.getState().prompts, { id: id })).toBeDefined();

      inlinePrompt.props().onCancel();
      expect(_.findWhere(store.getState().prompts, { id: id })).not.toBeDefined();
    });
  });
});
