import 'codemirror/mode/javascript/javascript';

import classNames from 'classnames';
import * as React from 'react';

import {Svg} from '../svg/Svg';
import {CodeEditor} from './CodeEditor';
import {CodeMirrorModes, DEFAULT_JSON_ERROR_MESSAGE} from './EditorConstants';
import {JSONEditorUtils} from './JSONEditorUtils';

export interface JSONEditorProps {
    id?: string;
    value: string;
    lineWrapping?: boolean;
    readOnly?: boolean;
    onChange?: (json: string, inError: boolean) => void;
    errorMessage?: string;
    containerClasses?: string[];
    className?: string;
    ref?: React.Ref<any>;
}

export interface JSONEditorStateProps {
    value: string;
}

export interface JSONEditorDispatchProps {
    onMount?: () => void;
    onChange?: (json: string, inError: boolean) => void;
    onUnmount?: () => void;
}

export const JSONEditor: React.FunctionComponent<JSONEditorProps & JSONEditorStateProps & JSONEditorDispatchProps> = ({
    value,
    lineWrapping,
    readOnly,
    onChange,
    errorMessage,
    containerClasses,
    className,
    onMount,
    onUnmount,
    ref,
}) => {
    const [isInError, setIsInError] = React.useState(false);

    React.useEffect(() => {
        onMount?.();

        return onUnmount;
    }, []);

    const handleChange = (json: string) => {
        const hasError = !JSONEditorUtils.validateValue(json);

        setIsInError(hasError);
        onChange?.(json, hasError);
    };

    return (
        <div className={classNames('form-group', {'input-validation-error': isInError}, containerClasses)}>
            <CodeEditor
                value={value}
                onChange={handleChange}
                mode={CodeMirrorModes.JSON}
                lineWrapping={lineWrapping}
                readOnly={readOnly}
                className={className}
                ref={ref}
            />
            {isInError && <ValidationDetails errorMessage={errorMessage} />}
        </div>
    );
};

const ValidationDetails: React.FunctionComponent<{errorMessage?: string}> = ({errorMessage}) => (
    <div className="input-validation-error-details">
        <Svg className="input-validation-error-icon" svgName="message-alert" svgClass="icon fill-white" />
        <span className="input-validation-error-message">{errorMessage ?? DEFAULT_JSON_ERROR_MESSAGE}</span>
    </div>
);
