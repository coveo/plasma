import { shallow, mount, ReactWrapper } from 'enzyme';
import { IInlinePromptOptions, InlinePrompt, IInlinePromptProps } from '../InlinePrompt';
import { Svg } from '../../svg/Svg';
import * as _ from 'underscore';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('InlinePrompt', () => {
  let options: IInlinePromptOptions;

  describe('<InlinePrompt />', () => {
    it('should render without errors', () => {
      options = {
        onClick: jasmine.createSpy('onClick'),
        userChoice: {}
      };

      expect(() => {
        shallow(
          <InlinePrompt options={options} />
        );
      }).not.toThrow();
    });
  });

  describe('<InlinePrompt />', () => {
    let inlinePrompt: ReactWrapper<IInlinePromptProps, any>;
    let onClickSpy: jasmine.Spy;

    beforeEach(() => {
      onClickSpy = jasmine.createSpy('onClick');
      options = {
        onClick: onClickSpy,
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

      inlinePrompt = mount(
        <InlinePrompt options={options} />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      inlinePrompt.unmount();
      inlinePrompt.detach();
    });

    it('should get its options as a prop', () => {
      let optionsProp = inlinePrompt.props().options;

      expect(optionsProp).toBeDefined();
      expect(optionsProp).toEqual(jasmine.objectContaining(options));
    });

    it('should have the className as a class if defined', () => {
      let newOptions: IInlinePromptOptions = _.extend({}, options, { className: undefined });

      expect(inlinePrompt.find('.prompt-' + options.className).length).toBe(1);

      inlinePrompt.setProps({ options: newOptions });
      expect(inlinePrompt.find('.prompt-' + options.className).length).toBe(0);
      expect(inlinePrompt.find('.prompt-info').length).toBe(1);
    });

    it('should have the opened as a class if opened', () => {
      let newOptions = _.extend({}, options, { isOpened: true });

      expect(inlinePrompt.find('.opened').length).toBe(0);

      inlinePrompt.setProps({ options: newOptions });
      expect(inlinePrompt.find('.opened').length).toBe(1);
    });

    it('should display an icon if there is one set in the user choice', () => {
      let newUserChoice = _.extend({}, options.userChoice, { icon: undefined });
      let newOptions = _.extend({}, options, { userChoice: newUserChoice });

      expect(inlinePrompt.find(Svg).length).toBe(1);

      inlinePrompt.setProps({ options: newOptions });
      expect(inlinePrompt.find(Svg).length).toBe(0);
    });

    it('should render as many choice buttons as there are choices', () => {
      expect(inlinePrompt.find('.prompt-action.action').length).toBe(_.size(options.userChoice.choices));
    });

    it('should display the description if there is one set in the user choice', () => {
      let newUserChoice = _.extend({}, options.userChoice, { description: undefined });
      let newOptions = _.extend({}, options, { userChoice: newUserChoice });

      expect(inlinePrompt.find('.description').length).toBe(1);

      inlinePrompt.setProps({ options: newOptions });
      expect(inlinePrompt.find('.description').length).toBe(0);
    });

    it('should have a cancel button if there is one set in the user choice', () => {
      let newUserChoice = _.extend({}, options.userChoice, { cancel: undefined });
      let newOptions = _.extend({}, options, { userChoice: newUserChoice });

      expect(inlinePrompt.find('.cancel').length).toBe(1);

      inlinePrompt.setProps({ options: newOptions });
      expect(inlinePrompt.find('.cancel').length).toBe(0);
    });

    it('should call the onClick prop when choice is clicked', () => {
      inlinePrompt.find('.prompt-action').first().simulate('click');
      expect(onClickSpy.calls.count()).toBe(1);
    });

    it('should call the onCancel prop if set when clicking the cancel button', () => {
      let onCancelSpy = jasmine.createSpy('onCancel');
      let inlinePromptInstance = inlinePrompt.instance() as InlinePrompt;

      expect(() => inlinePromptInstance['onCancelClick'].call(inlinePromptInstance)).not.toThrow();

      inlinePrompt.setProps({ options: options, onCancel: onCancelSpy });
      inlinePrompt.find('.cancel').first().simulate('click');
      expect(onCancelSpy.calls.count()).toBe(1);
    });
  });
});
