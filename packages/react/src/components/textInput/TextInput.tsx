import classNames from 'classnames';
import {InputHTMLAttributes, FunctionComponent, ChangeEvent, FocusEvent, useMemo, useRef, useEffect} from 'react';
import {omit, uniqueId} from 'underscore';

import {TooltipPlacement} from '../../utils/index.js';
import {InfoToken, InfoTokenMode, InfoTokenSize, InfoTokenType} from '../info-token/index.js';
import {Tooltip} from '../tooltip/index.js';
import {useTextInput} from './useTextInput.js';

export type InputValidator = (value: string) => {status: 'valid' | 'invalid' | 'warning'; message?: string};

interface TextInputProps {
    /**
     * Tells the browser which type of text content to expect
     */
    type: 'email' | 'search' | 'text' | 'url' | 'password';
    /**
     * The text displayed inside the input box
     */
    label: string;
    /**
     * The text displayed just above the input box
     */
    description?: string;
    /**
     * The text displayed just underneath the input box
     */
    helpText?: string;
    /**
     * Additional text to display as tooltip when hovering over a question icon
     */
    tooltip?: string;
    /**
     * Provides the validation logic to the input
     */
    validate?: InputValidator;
    /**
     * Whether the validation result should be visible when the input is rendered for the first time
     */
    showValidationOnMount?: boolean;
    /**
     * Whether the validation result should be visible when the input value changes
     */
    showValidationOnChange?: boolean;
    /**
     * Whether the validation result should be visible when the input looses the focus (recommended)
     */
    showValidationOnBlur?: boolean;
    /**
     * The initial value
     */
    defaultValue?: string;
}

/**
 * @deprecated Use Mantine Textinput instead: https://mantine.dev/core/text-input/
 */
export const TextInput: FunctionComponent<
    React.PropsWithChildren<TextInputProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'defaultValue'>>
> = ({
    id: propsId,
    label,
    validate,
    showValidationOnMount,
    showValidationOnChange,
    showValidationOnBlur,
    onChange,
    onBlur,
    className,
    defaultValue,
    description,
    helpText,
    tooltip,
    autoComplete,
    ...inputProps
}) => {
    const id = useMemo(() => propsId || uniqueId(), [propsId]);
    const {state, dispatch} = useTextInput(id, defaultValue);
    const inputElement = useRef<HTMLInputElement>();

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        dispatch({type: 'change-value', payload: event.target.value});
        if (showValidationOnChange) {
            dispatch({type: 'show-validation'});
        } else {
            dispatch({type: 'hide-validation'});
        }
        onChange?.(event);
    };

    const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
        if (showValidationOnBlur) {
            dispatch({type: 'show-validation'});
        }
        onBlur?.(event);
    };

    useEffect(() => {
        const {status, message} = validate?.(state.value) ?? {status: 'valid', message: ''};
        dispatch({type: 'set-message', payload: message || ''});

        switch (status) {
            case 'valid':
                dispatch({type: 'set-valid'});
                break;
            case 'invalid':
                dispatch({type: 'set-invalid'});
                break;
            case 'warning':
                dispatch({type: 'set-warning'});
                break;
            default:
                throw new Error(`Unknown input validation status: ${status}.`);
        }

        if (state.value === (defaultValue ?? '')) {
            dispatch({type: 'set-pristine'});
        } else {
            dispatch({type: 'set-dirty'});
        }
    }, [state.value]);

    useEffect(() => {
        if (defaultValue) {
            dispatch({type: 'change-value', payload: defaultValue as string});
        }
        if (showValidationOnMount) {
            dispatch({type: 'show-validation'});
        }
        return () => {
            dispatch({type: 'reset'});
        };
    }, []);

    return (
        <div
            className={classNames(
                'text-input mb2',
                {
                    disabled: inputProps.disabled,
                    empty: !state.value,
                    [state.status]: state.visibleStatus,
                },
                className
            )}
        >
            {inputProps.title && <h6>{inputProps.title}</h6>}
            {description && <p className="body-m-book-subdued mb2">{description}</p>}
            <div className="flex flex-center">
                <div
                    className="text-input-box flex flex-column justify-center"
                    onClick={() => inputElement.current.focus()}
                >
                    <label className="caption-label cursor-text" htmlFor={id}>
                        {inputProps.required ? label : `${label} (Optional)`}
                    </label>
                    <input
                        {...omit(inputProps, 'value')}
                        id={id}
                        onChange={handleChange}
                        onBlur={handleOnBlur}
                        value={state.value}
                        className="flex-auto body-m-book"
                        ref={inputElement}
                        aria-invalid={state.status === 'invalid'}
                        autoComplete={autoComplete || 'off'}
                    />
                </div>
                <HelpTooltip message={tooltip} />
            </div>
            {helpText && <div className="mt1 ml2 body-s-book-subdued">{helpText}</div>}
            <ValidationMessage inputId={id} />
        </div>
    );
};

const HelpTooltip: FunctionComponent<{message: string}> = ({message}) => {
    if (!message) {
        return null;
    }

    return (
        <Tooltip placement={TooltipPlacement.Right} title={message}>
            <InfoToken
                mode={InfoTokenMode.Stroked}
                type={InfoTokenType.Question}
                size={InfoTokenSize.Medium}
                className="ml1"
            />
        </Tooltip>
    );
};

const statusIconMapping: Record<string, InfoTokenType> = {
    valid: InfoTokenType.Success,
    invalid: InfoTokenType.Critical,
    warning: InfoTokenType.Warning,
};

const ValidationMessage: FunctionComponent<{inputId: string}> = ({inputId}) => {
    const {state} = useTextInput(inputId);

    if (!state.visibleStatus || !state.message || state.status === 'indeterminate') {
        return null;
    }

    return (
        <div className="mt1 ml2 inline-flex flex-center">
            <InfoToken mode={InfoTokenMode.Stroked} size={InfoTokenSize.Small} type={statusIconMapping[state.status]} />
            <span className="text-input-message body-s-book">{state.message}</span>
        </div>
    );
};
