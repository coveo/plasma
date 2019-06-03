import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as _ from 'underscore';
import {Svg} from '../../svg/Svg';
import {IInlinePromptOptions, IInlinePromptProps, InlinePrompt} from '../InlinePrompt';

describe('InlinePrompt', () => {
    let options: IInlinePromptOptions;

    describe('<InlinePrompt />', () => {
        it('should render without errors', () => {
            options = {
                onClick: jasmine.createSpy('onClick'),
                userChoice: {},
            };

            expect(() => {
                shallow(
                    <InlinePrompt options={options} />,
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
                        newChoice: 'some other choice',
                    },
                },
                isOpened: false,
                className: 'some-class',
            };

            inlinePrompt = mount(
                <InlinePrompt options={options} />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            inlinePrompt.detach();
        });

        it('should get its options as a prop', () => {
            const optionsProp = inlinePrompt.props().options;

            expect(optionsProp).toBeDefined();
            expect(optionsProp).toEqual(jasmine.objectContaining(options));
        });

        it('should have the className as a class if defined', () => {
            const newOptions: IInlinePromptOptions = _.extend({}, options, {className: undefined});

            expect(inlinePrompt.find('.prompt-' + options.className).length).toBe(1);

            inlinePrompt.setProps({options: newOptions});
            expect(inlinePrompt.find('.prompt-' + options.className).length).toBe(0);
            expect(inlinePrompt.find('.prompt-info').length).toBe(1);
        });

        it('should have the opened as a class if opened', () => {
            const newOptions = _.extend({}, options, {isOpened: true});

            expect(inlinePrompt.find('.opened').length).toBe(0);

            inlinePrompt.setProps({options: newOptions});
            expect(inlinePrompt.find('.opened').length).toBe(1);
        });

        it('should display an icon if there is one set in the user choice', () => {
            const newUserChoice = _.extend({}, options.userChoice, {icon: undefined});
            const newOptions = _.extend({}, options, {userChoice: newUserChoice});

            expect(inlinePrompt.find(Svg).length).toBe(1);

            inlinePrompt.setProps({options: newOptions});
            expect(inlinePrompt.find(Svg).length).toBe(0);
        });

        it('should render as many choice buttons as there are choices', () => {
            expect(inlinePrompt.find('.prompt-action.action').length).toBe(_.size(options.userChoice.choices));
        });

        it('should display the description if there is one set in the user choice', () => {
            const newUserChoice = _.extend({}, options.userChoice, {description: undefined});
            const newOptions = _.extend({}, options, {userChoice: newUserChoice});

            expect(inlinePrompt.find('.description').length).toBe(1);

            inlinePrompt.setProps({options: newOptions});
            expect(inlinePrompt.find('.description').length).toBe(0);
        });

        it('should have a cancel button if there is one set in the user choice', () => {
            const newUserChoice = _.extend({}, options.userChoice, {cancel: undefined});
            const newOptions = _.extend({}, options, {userChoice: newUserChoice});

            expect(inlinePrompt.find('.cancel').length).toBe(1);

            inlinePrompt.setProps({options: newOptions});
            expect(inlinePrompt.find('.cancel').length).toBe(0);
        });

        it('should call the onClick prop when choice is clicked', () => {
            inlinePrompt.find('.prompt-action').first().simulate('click');
            expect(onClickSpy.calls.count()).toBe(1);
        });

        it('should call the onCancel prop if set when clicking the cancel button', () => {
            const onCancelSpy = jasmine.createSpy('onCancel');
            const inlinePromptInstance = inlinePrompt.instance() as InlinePrompt;

            expect(() => inlinePromptInstance['onCancelClick'].call(inlinePromptInstance)).not.toThrow();

            inlinePrompt.setProps({options: options, onCancel: onCancelSpy});
            inlinePrompt.find('.cancel').first().simulate('click');
            expect(onCancelSpy.calls.count()).toBe(1);
        });
    });
});
