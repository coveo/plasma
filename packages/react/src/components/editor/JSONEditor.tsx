import classNames from 'clsx';
import {PropsWithChildren, FunctionComponent, useEffect, useState} from 'react';

import {InfoToken, InfoTokenMode, InfoTokenSize, InfoTokenType} from '../info-token';
import {CodeEditor} from './CodeEditor';
import {CodeMirrorModes, DEFAULT_JSON_ERROR_MESSAGE} from './EditorConstants';
import {JSONEditorUtils} from './JSONEditorUtils';

export interface JSONEditorProps {
    /**
     * The unique identifier that will be used to retrieve the value from the PlasmaState
     */
    id?: string;
    /**
     * The text value of the JSON editor
     */
    value?: string;
    /**
     * @deprecated use value instead
     */
    defaultValue?: string;
    /**
     * When true, the content of the editor will not be editable
     */
    readOnly?: boolean;
    /**
     * A callback function executed when the content of the editor changes
     *
     * @param code The content of the editor after the change
     * @param inError Wheter there was an error while parsing the JSON
     */
    onChange?: (json: string, inError: boolean) => void;
    /**
     * Error to display when there is an error parsing the JSON
     */
    errorMessage?: string;
    /**
     * CSS classes to add on the container element
     */
    containerClasses?: string[];
    /**
     * CSS classes to add on the editor
     */
    className?: string;
    /**
     * Additional editor options
     */
    options?: CodeMirror.EditorConfiguration;
    /**
     * If rendered inside a Collapsible component, you need to specify the collapsible id otherwise the editor might not be showing its content properly
     */
    collapsibleId?: string;
}

export interface JSONEditorStateProps {
    value: string;
}

export interface JSONEditorDispatchProps {
    onMount?: () => void;
    onChange?: (json: string, inError: boolean) => void;
    onUnmount?: () => void;
}

/**
 * @deprecated use Mantine instead
 */
export const JSONEditor: FunctionComponent<
    PropsWithChildren<JSONEditorProps & Partial<JSONEditorStateProps> & Partial<JSONEditorDispatchProps>>
> = ({
    defaultValue,
    value,
    readOnly,
    onChange,
    errorMessage,
    containerClasses,
    className,
    options = {lint: false},
    onMount,
    onUnmount,
    collapsibleId,
}) => {
    const editorValue = value || defaultValue || '{}';
    const [isInError, setIsInError] = useState(!JSONEditorUtils.validateValue(editorValue));

    useEffect(() => {
        onMount?.();

        return onUnmount;
    }, []);

    const validate = (val: string) => {
        const hasError = !JSONEditorUtils.validateValue(val);
        setIsInError(hasError);
        return hasError;
    };

    useEffect(() => {
        validate(editorValue);
    }, [editorValue]);

    const handleChange = (json: string) => {
        const isValid = validate(json);

        return onChange?.(json, isValid);
    };

    return (
        <div className={classNames('form-group', {'input-validation-error': isInError}, containerClasses)}>
            <CodeEditor
                value={editorValue}
                onChange={handleChange}
                mode={CodeMirrorModes.JSON}
                readOnly={readOnly}
                className={className}
                options={options}
                collapsibleId={collapsibleId}
            />
            {isInError && <ValidationDetails errorMessage={errorMessage} />}
        </div>
    );
};

const ValidationDetails: FunctionComponent<{errorMessage?: string}> = ({errorMessage}) => (
    <div className="input-validation-error-details">
        <InfoToken mode={InfoTokenMode.Filled} size={InfoTokenSize.Small} type={InfoTokenType.Critical} />
        <span className="input-validation-error-message">{errorMessage ?? DEFAULT_JSON_ERROR_MESSAGE}</span>
    </div>
);
