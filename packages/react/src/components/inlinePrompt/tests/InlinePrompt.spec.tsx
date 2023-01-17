import {mount, ReactWrapper, shallow} from 'enzyme';

import {IInlinePromptOptions, InlinePrompt} from '../InlinePrompt.js';

describe('InlinePrompt', () => {
    let options: IInlinePromptOptions;

    it('should render without errors', () => {
        options = {
            onClick: jest.fn(),
            userChoice: {},
        };

        expect(() => {
            shallow(<InlinePrompt options={options} />);
        }).not.toThrow();
    });

    describe('<InlinePrompt />', () => {
        let inlinePrompt: ReactWrapper;
        let onClickSpy: jest.Mock<any, any>;

        beforeEach(() => {
            onClickSpy = jest.fn();
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

            inlinePrompt = mount(<InlinePrompt options={options} />, {attachTo: document.getElementById('App')});
        });

        afterEach(() => {
            inlinePrompt?.unmount();
        });

        it('should have the className as a class if defined', () => {
            const newOptions: IInlinePromptOptions = Object.assign({}, options, {className: undefined});

            expect(inlinePrompt.find('.prompt-' + options.className).length).toBe(1);

            inlinePrompt.setProps({options: newOptions});

            expect(inlinePrompt.find('.prompt-' + options.className).length).toBe(0);
            expect(inlinePrompt.find('.prompt-info').length).toBe(1);
        });

        it('should have the opened as a class if opened', () => {
            const newOptions = Object.assign({}, options, {isOpened: true});

            expect(inlinePrompt.find('.opened').length).toBe(0);

            inlinePrompt.setProps({options: newOptions});

            expect(inlinePrompt.find('.opened').length).toBe(1);
        });

        it('should render as many choice buttons as there are choices', () => {
            expect(inlinePrompt.find('button.mod-danger').length).toBe(
                Object.values(options.userChoice.choices).length
            );
        });

        it('should display the description if there is one set in the user choice', () => {
            const newUserChoice = Object.assign({}, options.userChoice, {description: undefined});
            const newOptions = Object.assign({}, options, {userChoice: newUserChoice});

            expect(inlinePrompt.find('.description').length).toBe(1);

            inlinePrompt.setProps({options: newOptions});

            expect(inlinePrompt.find('.description').length).toBe(0);
        });

        it('should have a cancel button if there is one set in the user choice', () => {
            const newUserChoice = Object.assign({}, options.userChoice, {cancel: undefined});
            const newOptions = Object.assign({}, options, {userChoice: newUserChoice});

            expect(inlinePrompt.find('.cancel').length).toBe(1);

            inlinePrompt.setProps({options: newOptions});

            expect(inlinePrompt.find('.cancel').length).toBe(0);
        });

        it('should call the onClick prop when choice is clicked', () => {
            inlinePrompt.find('.mod-danger').first().simulate('click');

            expect(onClickSpy.mock.calls.length).toBe(1);
        });

        it('should call the onCancel prop if set when clicking the cancel button', () => {
            const onCancelSpy = jest.fn();

            inlinePrompt.setProps({options: options, onCancel: onCancelSpy});
            inlinePrompt.find('.cancel').first().simulate('click');

            expect(onCancelSpy.mock.calls.length).toBe(1);
        });
    });
});
