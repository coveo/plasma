import {render, screen, userEvent} from 'octopus';
import {PasswordEditableInput} from '../PasswordEditableInput.js';

describe('PasswordEditableInput', () => {
    it('should render a simple password input when maskedFieldProps is not provided', () => {
        render(<PasswordEditableInput label="Password" name="password" />);

        expect(screen.getByLabelText(/password/i)).toBeEnabled();
    });

    it('should render a simple password input when masked is not enabled', () => {
        render(<PasswordEditableInput label="Password" name="password" maskedFieldProps={{enabled: false}} />);

        const input = screen.getByLabelText(/password/i);
        expect(input).toBeEnabled();
        expect(screen.queryByRole('button', {name: /edit/i})).not.toBeInTheDocument();
        expect(screen.queryByRole('button', {name: /cancel/i})).not.toBeInTheDocument();
    });

    it('should render a disabled input with edit button when masked is enabled and defaultMasked is true', () => {
        render(
            <PasswordEditableInput
                label="Password"
                name="password"
                maskedFieldProps={{enabled: true, defaultMasked: true}}
            />,
        );

        expect(screen.getByLabelText(/password/i)).toBeDisabled();
        expect(screen.getByLabelText(/password/i)).toHaveProperty('placeholder', '●●●●●●●●●●●●●●●●');
        expect(screen.getByRole('button', {name: /edit/i})).toBeVisible();
    });

    it('should display masked label and description overrides when in masked state', () => {
        render(
            <PasswordEditableInput
                label="Normal label"
                description="Normal description"
                name="password"
                maskedFieldProps={{
                    enabled: true,
                    defaultMasked: true,
                    label: 'Masked label',
                    description: 'Masked description',
                    placeholder: 'MASKED-●●●●-value',
                }}
            />,
        );

        expect(screen.queryByText(/normal label/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/normal description/i)).not.toBeInTheDocument();
        expect(screen.getByText(/masked label/i)).toBeVisible();
        expect(screen.getByText(/masked description/i)).toBeVisible();
        expect(screen.getByLabelText(/masked label/i)).toHaveProperty('placeholder', 'MASKED-●●●●-value');
    });

    it('should switch from masked to editable when clicking the edit button', async () => {
        const user = userEvent.setup();

        render(
            <PasswordEditableInput
                label="Password"
                name="password"
                maskedFieldProps={{enabled: true, defaultMasked: true}}
            />,
        );

        expect(screen.getByLabelText(/password/i)).toBeDisabled();

        await user.click(screen.getByRole('button', {name: /edit/i}));

        expect(screen.getByLabelText(/password/i)).toBeEnabled();
        expect(screen.getByRole('button', {name: /cancel/i})).toBeVisible();
        expect(screen.queryByRole('button', {name: /edit/i})).not.toBeInTheDocument();
    });

    it('should switch back to masked when clicking the cancel button', async () => {
        const user = userEvent.setup();
        const onCancelFn = vi.fn();

        render(
            <PasswordEditableInput
                label="Password"
                name="password"
                maskedFieldProps={{enabled: true, defaultMasked: false}}
                onCancel={onCancelFn}
            />,
        );

        expect(screen.getByLabelText(/password/i)).toBeEnabled();

        await user.click(screen.getByRole('button', {name: /cancel/i}));

        expect(screen.getByLabelText(/password/i)).toBeDisabled();
        expect(screen.getByRole('button', {name: /edit/i})).toBeVisible();
        expect(onCancelFn).toHaveBeenCalledTimes(1);
    });

    it('should call onEdit when the edit button is clicked', async () => {
        const user = userEvent.setup();
        const onEditFn = vi.fn();

        render(
            <PasswordEditableInput
                label="Password"
                name="password"
                maskedFieldProps={{enabled: true, defaultMasked: true}}
                onEdit={onEditFn}
            />,
        );

        await user.click(screen.getByRole('button', {name: /edit/i}));

        expect(onEditFn).toHaveBeenCalledTimes(1);
    });

    it('should call onMaskedChange when masked state changes', async () => {
        const user = userEvent.setup();
        const onMaskedChangeFn = vi.fn();

        render(
            <PasswordEditableInput
                label="Password"
                name="password"
                maskedFieldProps={{
                    enabled: true,
                    defaultMasked: true,
                    onMaskedChange: onMaskedChangeFn,
                }}
            />,
        );

        await user.click(screen.getByRole('button', {name: /edit/i}));

        expect(onMaskedChangeFn).toHaveBeenCalledWith(false);
    });

    it('should keep the edit button disabled when the field itself is disabled', () => {
        render(
            <PasswordEditableInput
                label="Password"
                name="password"
                disabled
                maskedFieldProps={{enabled: true, defaultMasked: true}}
            />,
        );

        expect(screen.getByRole('button', {name: /edit/i})).toBeDisabled();
    });
});
