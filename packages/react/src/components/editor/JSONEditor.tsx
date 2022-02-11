import classNames from 'classnames';
import * as React from 'react';

import {Svg} from '../svg/Svg';
import {CodeEditor} from './CodeEditor';
import {CodeMirrorModes, DEFAULT_JSON_ERROR_MESSAGE} from './EditorConstants';
import {JSONEditorUtils} from './JSONEditorUtils';

export interface JSONEditorProps {
    id?: string;
    value: string;
    readOnly?: boolean;
    onChange?: (json: string, inError: boolean) => void;
    errorMessage?: string;
    containerClasses?: string[];
    className?: string;
    options?: CodeMirror.EditorConfiguration;
    ref?: React.Ref<any>;
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

export const JSONEditor: React.FunctionComponent<JSONEditorProps & JSONEditorStateProps & JSONEditorDispatchProps> = ({
    value,
    readOnly,
    onChange,
    errorMessage,
    containerClasses,
    className,
    options,
    onMount,
    onUnmount,
    ref,
    collapsibleId,
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
                readOnly={readOnly}
                className={className}
                options={options}
                ref={ref}
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

const ValidationDetails: React.FunctionComponent<{errorMessage?: string}> = ({errorMessage}) => (
    <div className="input-validation-error-details">
        <Svg className="input-validation-error-icon" svgName="messageAlert" svgClass="icon mod-white" />
        <span className="input-validation-error-message">{errorMessage ?? DEFAULT_JSON_ERROR_MESSAGE}</span>
    </div>
);
