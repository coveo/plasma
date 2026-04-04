import {Factory, Input, InputWrapperProps, PasswordInputProps, factory, useProps} from '@mantine/core';
import {useId, useUncontrolled} from '@mantine/hooks';
import {EditSize16Px} from '@coveord/plasma-react-icons';
import {type MouseEvent, useCallback} from 'react';
import {Button} from '../Button/Button.js';
import {PasswordInput} from '../PasswordInput/PasswordInput.js';
import classes from './PasswordEditableInput.module.css';

const DEFAULT_MASKED_PLACEHOLDER = '●●●●●●●●●●●●●●●●';
const ACTION_LABELS = {
    edit: 'Edit',
    cancel: 'Cancel',
} as const;

export interface MaskedFieldProps {
    /** Enables masked functionality. */
    enabled: boolean;
    /** Determines whether the component displayed should be masked (controlled). */
    masked?: boolean;
    /** Determines whether the component displayed should be masked (uncontrolled). */
    defaultMasked?: boolean;
    /** Called when masked changes. */
    onMaskedChange?: (masked: boolean) => void;
    /** Label override when in masked state. */
    label?: InputWrapperProps['label'];
    /** Label props override when in masked state. */
    labelProps?: InputWrapperProps['labelProps'];
    /** Description override when in masked state. */
    description?: InputWrapperProps['description'];
    /** Description props override when in masked state. */
    descriptionProps?: InputWrapperProps['descriptionProps'];
    /** Placeholder override when in masked state. */
    placeholder?: string;
}

export interface PasswordEditableInputProps extends Omit<
    PasswordInputProps,
    | 'label'
    | 'description'
    | 'labelProps'
    | 'descriptionProps'
    | 'error'
    | 'errorProps'
    | 'required'
    | 'withAsterisk'
    | 'inputWrapperOrder'
    | 'inputContainer'
> {
    /** Label displayed above the input and button row */
    label?: InputWrapperProps['label'];
    /** Props passed to the label */
    labelProps?: InputWrapperProps['labelProps'];
    /** Description displayed below the label */
    description?: InputWrapperProps['description'];
    /** Props passed to the description */
    descriptionProps?: InputWrapperProps['descriptionProps'];
    /** Error message displayed below the input row */
    error?: InputWrapperProps['error'];
    /** Props passed to the error */
    errorProps?: InputWrapperProps['errorProps'];
    /** Adds required attribute to the input and a red asterisk on the right side of label */
    required?: boolean;
    /** Displays a required asterisk next to the label. Overrides `required` prop. */
    withAsterisk?: boolean;
    /** Controls order of the wrapper elements */
    inputWrapperOrder?: InputWrapperProps['inputWrapperOrder'];
    /** Input container component */
    inputContainer?: InputWrapperProps['inputContainer'];
    /** Configuration of masked field and navigation buttons. */
    maskedFieldProps?: MaskedFieldProps;
    /** Called when the user clicks the edit button to leave the masked state. */
    onEdit?: () => void;
    /** Called when the user clicks the cancel button to return to the masked state. */
    onCancel?: () => void;
}

export type PasswordEditableInputFactory = Factory<{
    props: PasswordEditableInputProps;
    ref: HTMLInputElement;
}>;

const defaultProps: Partial<PasswordEditableInputProps> = {};

export const PasswordEditableInput = factory<PasswordEditableInputFactory>((_props, ref) => {
    const props = useProps('PasswordEditableInput', defaultProps, _props);
    const {
        maskedFieldProps,
        onEdit,
        onCancel,
        disabled,
        label,
        description,
        labelProps,
        descriptionProps,
        error,
        errorProps,
        required,
        withAsterisk,
        inputWrapperOrder,
        inputContainer,
        placeholder,
        size,
        id,
        ...passwordInputProps
    } = props;

    const uuid = useId(id);
    const {
        enabled = false,
        masked,
        defaultMasked,
        onMaskedChange,
        label: maskedLabel,
        description: maskedDescription,
        labelProps: maskedLabelProps,
        descriptionProps: maskedDescriptionProps,
        placeholder: maskedPlaceholder = DEFAULT_MASKED_PLACEHOLDER,
    } = maskedFieldProps ?? {};

    const [isMasked, setMasked] = useUncontrolled<boolean>({
        value: masked,
        defaultValue: defaultMasked,
        finalValue: false,
        onChange: onMaskedChange,
    });

    const handleEdit = useCallback(() => {
        setMasked(false);
        onEdit?.();
    }, [onEdit, setMasked]);

    const handleCancel = useCallback(() => {
        setMasked(true);
        onCancel?.();
    }, [onCancel, setMasked]);

    const isCurrentlyMasked = enabled && isMasked;

    const resolvedLabel = isCurrentlyMasked ? (maskedLabel ?? label) : label;
    const resolvedDescription = isCurrentlyMasked ? (maskedDescription ?? description) : description;
    const resolvedLabelProps = isCurrentlyMasked ? (maskedLabelProps ?? labelProps) : labelProps;
    const resolvedDescriptionProps = isCurrentlyMasked
        ? (maskedDescriptionProps ?? descriptionProps)
        : descriptionProps;
    const resolvedPlaceholder = isCurrentlyMasked ? maskedPlaceholder : placeholder;
    const resolvedDisabled = isCurrentlyMasked || disabled;

    const ActionButton = isCurrentlyMasked ? Button.Secondary : Button.Tertiary;
    const actionLabel = isCurrentlyMasked ? ACTION_LABELS.edit : ACTION_LABELS.cancel;

    const handleAction = useCallback(
        (event: MouseEvent) => {
            event.preventDefault();
            if (isCurrentlyMasked) {
                handleEdit();
                return;
            }
            handleCancel();
        },
        [handleCancel, handleEdit, isCurrentlyMasked],
    );

    return (
        <Input.Wrapper
            id={uuid}
            label={resolvedLabel}
            description={resolvedDescription}
            labelProps={resolvedLabelProps}
            descriptionProps={resolvedDescriptionProps}
            error={error}
            errorProps={errorProps}
            required={required}
            withAsterisk={withAsterisk}
            inputWrapperOrder={inputWrapperOrder}
            inputContainer={inputContainer}
            size={size}
        >
            <div className={classes.innerWrapper}>
                <PasswordInput
                    {...passwordInputProps}
                    id={uuid}
                    ref={ref}
                    className={classes.wrapperInput}
                    placeholder={resolvedPlaceholder}
                    disabled={resolvedDisabled}
                    size={size}
                    error={!!error}
                    autoComplete={isCurrentlyMasked ? 'off' : 'new-password'}
                />
                {enabled && (
                    <ActionButton
                        onClick={handleAction}
                        leftSection={isCurrentlyMasked ? <EditSize16Px height={16} /> : undefined}
                        disabled={disabled}
                    >
                        {actionLabel}
                    </ActionButton>
                )}
            </div>
        </Input.Wrapper>
    );
});

PasswordEditableInput.displayName = 'PasswordEditableInput';
