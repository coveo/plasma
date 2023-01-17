import {expectToThrow, fireEvent, render, screen, waitFor} from '@test-utils';
import userEvent from '@testing-library/user-event';
import {useState} from 'react';

import {FormProvider} from '../../form/FormProvider.js';
import {InputValidator, TextInput} from '../TextInput.js';
import {useTextInput} from '../useTextInput.js';

describe('TextInput', () => {
    it('throws an error if the rendering a TextInput outside a FormProvider', () => {
        expectToThrow(() => {
            render(<TextInput type="text" label="Label" />);
        }, 'useTextInput must be used within a FormProvider.');
    });

    it('renders an input with the specified defaultValue', () => {
        render(
            <FormProvider>
                <TextInput type="text" label="Label" defaultValue="🌶" />
            </FormProvider>
        );

        const textInput = screen.getByRole('textbox', {name: /label/i});
        expect(textInput).toBeInTheDocument();
        expect(textInput).toHaveValue('🌶');
    });

    it('renders a title above the input when specified', () => {
        render(
            <FormProvider>
                <TextInput type="text" label="Label" title="🍌" />
            </FormProvider>
        );

        expect(screen.getByRole('heading', {name: '🍌'})).toBeInTheDocument();
    });

    it('renders a description above the input when specified', () => {
        render(
            <FormProvider>
                <TextInput type="text" label="Label" description="🍌" />
            </FormProvider>
        );

        expect(screen.getByText('🍌')).toBeInTheDocument();
    });

    it('renders the specified help text under the input when specified', () => {
        render(
            <FormProvider>
                <TextInput type="text" label="Label" helpText="🍌" />
            </FormProvider>
        );

        expect(screen.getByText('🍌')).toBeInTheDocument();
    });

    it('renders a question mark icon with a tooltip when tooltip is specified', async () => {
        render(
            <FormProvider>
                <TextInput type="text" label="Label" tooltip="🍌" />
            </FormProvider>
        );
        await waitFor(() => screen.findByRole('img', {name: 'question'}));
        const icon = screen.getByRole('img', {name: /question/i});
        await userEvent.hover(icon);

        expect(await screen.findByText('🍌')).toBeInTheDocument();
    });

    it('disables the input when disabled prop is true', () => {
        render(
            <FormProvider>
                <TextInput type="text" label="Label" disabled />
            </FormProvider>
        );

        expect(screen.getByRole('textbox', {name: /label/i})).toBeDisabled();
    });

    it('validates the input on blur when showValidationOnBlur prop is true', async () => {
        const validator: InputValidator = (val) => {
            if (val === '✅') {
                return {status: 'valid', message: 'valid!'};
            } else if (val === '⚠️') {
                return {status: 'warning', message: 'warning!'};
            } else {
                return {status: 'invalid', message: 'invalid!'};
            }
        };

        render(
            <FormProvider>
                <TextInput type="text" label="💬" required validate={validator} showValidationOnBlur />
            </FormProvider>
        );

        const textinput = screen.getByRole('textbox', {name: '💬'});
        await userEvent.type(textinput, '✅');

        expect(textinput).toBeValid();
        expect(screen.queryByText('valid!')).not.toBeInTheDocument();
        expect(screen.queryByRole('img', {name: 'checkmark'})).not.toBeInTheDocument();

        fireEvent.blur(textinput);
        await waitFor(() => screen.findByRole('img', {name: 'checkmark'}));
        expect(screen.getByText('valid!')).toBeInTheDocument();
        expect(screen.getByRole('img', {name: 'checkmark'})).toBeInTheDocument();

        await userEvent.clear(textinput);

        expect(textinput).toBeInvalid();
        expect(screen.queryByText('valid!')).not.toBeInTheDocument();
        expect(screen.queryByRole('img', {name: 'checkmark'})).not.toBeInTheDocument();

        await userEvent.type(textinput, '⚠️');
        expect(textinput).toBeValid();
        fireEvent.blur(textinput);
        await waitFor(() => screen.findByRole('img', {name: 'warning'}));

        expect(screen.getByText('warning!')).toBeInTheDocument();
        expect(screen.getByRole('img', {name: 'warning'})).toBeInTheDocument();

        await userEvent.clear(textinput);
        expect(textinput).toBeInvalid();
        await userEvent.type(textinput, '❌');
        expect(textinput).toBeInvalid();
        fireEvent.blur(textinput);
        await waitFor(() => screen.findByRole('img', {name: 'critical'}));

        expect(screen.getByText('invalid!')).toBeInTheDocument();
        expect(screen.getByRole('img', {name: 'critical'})).toBeInTheDocument();
    });

    it('validates the input on mount when showValidationOnMount prop is true', async () => {
        const validator: InputValidator = (val) => (val ? {status: 'valid'} : {status: 'invalid', message: 'invalid!'});

        render(
            <FormProvider>
                <TextInput type="text" label="💬" required validate={validator} showValidationOnMount />
            </FormProvider>
        );
        await waitFor(() => screen.findByRole('img', {name: 'critical'}));
        expect(screen.getByRole('textbox', {name: '💬'})).toBeInvalid();
        expect(screen.getByText('invalid!')).toBeInTheDocument();
        expect(screen.getByRole('img', {name: 'critical'})).toBeInTheDocument();
    });

    it('validates the input on change when showValidationOnChange prop is true', async () => {
        const validator: InputValidator = (val) =>
            val ? {status: 'valid', message: 'valid!'} : {status: 'invalid', message: 'invalid!'};

        render(
            <FormProvider>
                <TextInput type="text" label="💬" required validate={validator} showValidationOnChange />
            </FormProvider>
        );

        const textinput = screen.getByRole('textbox', {name: '💬'});

        expect(screen.queryByText('invalid!')).not.toBeInTheDocument();
        expect(screen.queryByRole('img', {name: 'critical'})).not.toBeInTheDocument();

        await userEvent.type(textinput, '✅');

        await waitFor(() => screen.findByRole('img', {name: 'checkmark'}));

        expect(textinput).toBeValid();
        expect(screen.getByText('valid!')).toBeInTheDocument();
        expect(screen.getByRole('img', {name: 'checkmark'})).toBeInTheDocument();

        await userEvent.clear(textinput);
        await waitFor(() => screen.findByRole('img', {name: 'critical'}));

        expect(textinput).toBeInvalid();
        expect(screen.getByText('invalid!')).toBeInTheDocument();
        expect(screen.getByRole('img', {name: 'critical'})).toBeInTheDocument();
    });

    it('is independant from the other inputs in the same provider', async () => {
        const validator: InputValidator = (val) => (val ? {status: 'valid'} : {status: 'invalid'});

        render(
            <FormProvider>
                <TextInput type="text" label="first name" required validate={validator} />
                <TextInput type="text" label="last name" required validate={validator} />
            </FormProvider>
        );

        const firstNameInput = screen.getByRole('textbox', {name: 'first name'});
        const lastNameInput = screen.getByRole('textbox', {name: 'last name'});

        await userEvent.type(firstNameInput, 'John');

        expect(firstNameInput).toHaveValue('John');
        expect(firstNameInput).toBeValid();
        expect(lastNameInput).toHaveValue('');
        expect(lastNameInput).toBeInvalid();

        await userEvent.type(lastNameInput, 'Doe');

        expect(firstNameInput).toHaveValue('John');
        expect(firstNameInput).toBeValid();
        expect(lastNameInput).toHaveValue('Doe');
        expect(lastNameInput).toBeValid();
    });

    it('resets its state when unmounting and remounting with the same id', async () => {
        const Fixture = () => {
            const [isMounted, toggleMounted] = useState(true);
            return (
                <>
                    <button onClick={() => toggleMounted(!isMounted)}>toggle input</button>
                    {isMounted ? <TextInput id="🆔" type="text" label="Name" /> : null}
                </>
            );
        };

        render(
            <FormProvider>
                <Fixture />
            </FormProvider>
        );

        await userEvent.type(screen.getByRole('textbox', {name: /name/i}), 'some value');
        expect(screen.getByRole('textbox', {name: /name/i})).toHaveValue('some value');
        await userEvent.click(screen.getByRole('button', {name: /toggle input/i})); // unmount
        await userEvent.click(screen.getByRole('button', {name: /toggle input/i})); // mount again
        expect(screen.getByRole('textbox', {name: /name/i})).toHaveValue('');
    });

    it('indicate the input is dirty if the currentValue is different from the initialValue (no defaultValue)', async () => {
        const Fixture = () => {
            const {state} = useTextInput('🆔');
            return (
                <>
                    <TextInput id="🆔" type="text" label="Name" />
                    {state.isDirty ? 'dirty' : 'pristine'}
                </>
            );
        };

        render(
            <FormProvider>
                <Fixture />
            </FormProvider>
        );

        const nameInput = screen.getByRole('textbox', {name: /name/i});

        expect(screen.getByText('pristine')).toBeInTheDocument();
        await userEvent.type(nameInput, 'John');
        expect(screen.getByText('dirty')).toBeInTheDocument();
        await userEvent.clear(nameInput);
        expect(screen.getByText('pristine')).toBeInTheDocument();
    });

    it('indicate the input is dirty if the currentValue is different from the initialValue (with defaultValue)', async () => {
        const Fixture = () => {
            const {state} = useTextInput('🆔');
            return (
                <>
                    <TextInput id="🆔" type="text" label="Name" defaultValue="John" />
                    {state.isDirty ? 'dirty' : 'pristine'}
                </>
            );
        };

        render(
            <FormProvider>
                <Fixture />
            </FormProvider>
        );

        const nameInput = screen.getByRole('textbox', {name: /name/i});

        expect(screen.getByText('pristine')).toBeInTheDocument();
        await userEvent.clear(nameInput);
        expect(screen.getByText('dirty')).toBeInTheDocument();
        await userEvent.type(nameInput, 'John');
        expect(screen.getByText('pristine')).toBeInTheDocument();
    });
});
