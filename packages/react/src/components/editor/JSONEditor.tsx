import classNames from 'classnames';
import {FunctionComponent, useEffect, useState} from 'react';

import {Svg} from '../svg';
import {CodeEditor} from './CodeEditor';
import {CodeMirrorModes, DEFAULT_JSON_ERROR_MESSAGE} from './EditorConstants';
import {JSONEditorUtils} from './JSONEditorUtils';

export interface JSONEditorProps {
    /**
     * The unique identifier that will be used to retrieve the value from the PlasmaState
     */
    id?: string;
    /**
     * @deprecated use defaultValue instead
     */
    value?: string;
    /**
     * The initial value
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
    /**
     * @deprecated use defaultValue instead
     */
    value?: string;
}

export interface JSONEditorDispatchProps {
    onMount?: () => void;
    onChange?: (json: string, inError: boolean) => void;
    onUnmount?: () => void;
}

export const JSONEditor: FunctionComponent<
    JSONEditorProps & Partial<JSONEditorStateProps> & Partial<JSONEditorDispatchProps>
> = ({
    value,
    defaultValue,
    readOnly,
    onChange,
    errorMessage,
    containerClasses,
    className,
    options,
    onMount,
    onUnmount,
    collapsibleId,
}) => {
    const editorValue = defaultValue || value || '{}';
    const [isInError, setIsInError] = useState(!JSONEditorUtils.validateValue(editorValue));

    useEffect(() => {
        onMount?.();

        return onUnmount;
    }, []);

    useEffect(() => {
        const hasError = !JSONEditorUtils.validateValue(editorValue);
        setIsInError(hasError);
    }, [editorValue]);

    const handleChange = (json: string) => {
        const hasError = !JSONEditorUtils.validateValue(json);
        setIsInError(hasError);
        onChange?.(json, hasError);
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

JSONEditor.defaultProps = {
    options: {
        lint: false,
    },
};

const ValidationDetails: FunctionComponent<{errorMessage?: string}> = ({errorMessage}) => (
    <div className="input-validation-error-details">
        <Svg className="input-validation-error-icon" svgName="messageAlert" svgClass="icon mod-white" />
        <span className="input-validation-error-message">{errorMessage ?? DEFAULT_JSON_ERROR_MESSAGE}</span>
    </div>
);
