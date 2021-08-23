import classNames from 'classnames';
import * as React from 'react';
import {omit, uniqueId} from 'underscore';

import {TooltipPlacement} from '../../utils';
import {InfoToken, InfoTokenMode, InfoTokenSize, InfoTokenType} from '../info-token';
import {Tooltip} from '../tooltip';
import {useTextInput} from './useTextInput';

export type InputValidator = (value: string) => {status: 'valid' | 'invalid' | 'warning'; message?: string};

interface TextInputProps {
    type: 'email' | 'search' | 'text' | 'url' | 'password';
    label: string;
    description?: string;
    helpText?: string;
    tooltip?: string;
    validate?: InputValidator;
    showValidationOnMount?: boolean;
    showValidationOnChange?: boolean;
    showValidationOnBlur?: boolean;
}

export const TextInput: React.FunctionComponent<TextInputProps & React.HTMLProps<HTMLInputElement>> = ({
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
    ...inputProps
}) => {
    const id = React.useMemo(() => propsId || uniqueId(), [propsId]);
    const {state, dispatch} = useTextInput(id);
    const inputElement = React.useRef<HTMLInputElement>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch({type: 'change-value', payload: event.target.value});
        if (showValidationOnChange) {
            dispatch({type: 'show-validation'});
        } else {
            dispatch({type: 'hide-validation'});
        }
        onChange?.(event);
    };

    const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if (showValidationOnBlur) {
            dispatch({type: 'show-validation'});
        }
        onBlur?.(event);
    };

    React.useEffect(() => {
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

        if (state.value === defaultValue) {
            dispatch({type: 'set-pristine'});
        } else {
            dispatch({type: 'set-dirty'});
        }
    }, [state.value]);

    React.useEffect(() => {
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
                    <label className="body-s-book-subdued cursor-text" htmlFor={id}>
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
                    />
                </div>
                <HelpTooltip message={tooltip} />
            </div>
            {helpText && <div className="mt1 ml2 body-s-book-subdued">{helpText}</div>}
            <ValidationMessage inputId={id} />
        </div>
    );
};

const HelpTooltip: React.FunctionComponent<{message: string}> = ({message}) => {
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

const ValidationMessage: React.FunctionComponent<{inputId: string}> = ({inputId}) => {
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
