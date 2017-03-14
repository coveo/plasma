import { shallow } from 'enzyme';
import { SyncFeedback, SyncFeedbackState } from './SyncFeedback';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { each } from 'underscore';

describe('<SyncFeedback>', () => {
  it('should render without errors', () => {
    expect(() => shallow(<SyncFeedback state={SyncFeedbackState.NONE} />)).not.toThrow();
    expect(() => shallow(<SyncFeedback state={SyncFeedbackState.SYNCING} />)).not.toThrow();
    expect(() => shallow(<SyncFeedback state={SyncFeedbackState.SUCCESS} />)).not.toThrow();
    expect(() => shallow(<SyncFeedback state={SyncFeedbackState.ERROR} />)).not.toThrow();
    expect(() => shallow(<SyncFeedback state={SyncFeedbackState.NONE} feedback='none' />)).not.toThrow();
    expect(() => shallow(<SyncFeedback state={SyncFeedbackState.SYNCING} feedback='Syncing' />)).not.toThrow();
    expect(() => shallow(<SyncFeedback state={SyncFeedbackState.SUCCESS} feedback='Success!' />)).not.toThrow();
    expect(() => shallow(<SyncFeedback state={SyncFeedbackState.ERROR} feedback='NOOOOO!!!!' />)).not.toThrow();
  });

  it('should be empty if the state is none', () => {
    let shallowed = shallow(<SyncFeedback state={SyncFeedbackState.NONE} />);
    let shallowedWithFeedback = shallow(<SyncFeedback state={SyncFeedbackState.NONE} feedback='Not empty' />);

    expect(shallowed.text()).toBe('');
    expect(shallowedWithFeedback.text()).toBe('');
  });

  it('should contain the exact text passed to feedback prop', () => {
    let expectedFeedback = 'this is the expected value';

    each([SyncFeedbackState.SYNCING, SyncFeedbackState.SUCCESS, SyncFeedbackState.ERROR], (state: string) => {
      let wrapper = shallow(<SyncFeedback state={state} feedback={expectedFeedback} />);
      expect(wrapper.find('.sync-feedback-text').length).toBe(1);
      expect(wrapper.find('.sync-feedback-text').text()).toBe(expectedFeedback);
    });
  });
});
