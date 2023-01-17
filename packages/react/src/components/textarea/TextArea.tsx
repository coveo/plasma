import classNames from 'classnames';
import {ChangeEvent, ChangeEventHandler, FunctionComponent, PropsWithChildren, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import TextareaAutosize, {TextareaAutosizeProps} from 'react-textarea-autosize';
import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState.js';
import {IDispatch, ReduxUtils} from '../../utils/index.js';
import {ILabelProps} from '../input/index.js';
import {addTextArea, changeTextAreaValue, removeTextArea} from './TextAreaActions.js';

export interface ITextAreaOwnProps {
    /**
     * Unique identifier
     */
    id: string;
    /**
     * Additional CSS classes to add on the textarea element
     */
    className?: string;
    /**
     * Additional HTML attributes to add on the
     */
    additionalAttributes?: TextareaAutosizeProps;
    /**
     * The value inside the textarea element on mount. Use with TextAreaConnected. Only useful in a Redux context.
     */
    valueOnMount?: string;
    /**
     * Whether the textarea is disabled on mount. Use with TextAreaConnected. Only useful in a Redux context.
     */
    disabledOnMount?: boolean;
    /**
     * Whether the textarea automatically grows in height when new lines are added
     *
     * @default false
     */
    isAutosize?: boolean;
    /**
     * A callback function executed when the value of the textarea changes
     *
     * @param event The change event
     */
    onChangeCallback?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    /**
     * A function that tells whether the current value is valid
     *
     * @param value The current value of the textarea
     */
    validate?: (value: string) => boolean;
    /**
     * The text to display when the textarea is invalid
     */
    validationMessage?: string;
    /**
     * Additonal props to set on the invalid message label
     */
    validationLabelProps?: ILabelProps;
}

export interface ITextAreaStateProps {
    /**
     * The current value of the textarea
     */
    value?: string;
    /**
     * Whether the textarea should be disabled
     */
    disabled?: boolean;
}

export interface ITextAreaDispatchProps {
    /**
     * A callback function executed when the value of the textarea changes
     *
     * @param event The change event
     */
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    /**
     * A callback function executed when the textarea is added to the DOM
     */
    onMount?: () => void;
    /**
     * A callback function executed when the textarea is removed from the DOM
     */
    onUnmount?: () => void;
}

export interface ITextAreaProps extends ITextAreaOwnProps, ITextAreaStateProps, ITextAreaDispatchProps {}

const mapStateToProps = (state: PlasmaState, ownProps: ITextAreaOwnProps): ITextAreaStateProps => {
    const {value, disabled} = _.findWhere(state.textAreas, {id: ownProps.id}) || {value: '', disabled: false};
    return {value, disabled};
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: ITextAreaOwnProps): ITextAreaDispatchProps => ({
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(changeTextAreaValue(ownProps.id, e.target.value)),
    onMount: () => dispatch(addTextArea(ownProps.id, ownProps.valueOnMount, ownProps.disabledOnMount)),
    onUnmount: () => dispatch(removeTextArea(ownProps.id)),
});

/**
 * @deprecated Use Mantine Textarea instead: https://mantine.dev/core/textarea/
 */
export const TextArea: FunctionComponent<PropsWithChildren<ITextAreaProps>> = ({
    id,
    value,
    validate,
    onMount,
    onUnmount,
    onChange,
    onChangeCallback,
    validationMessage,
    additionalAttributes,
    disabled,
    children,
    isAutosize,
    className,
}) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, 300);
        return () => clearTimeout(timeout);
    }, [value]);

    useEffect(() => {
        if (validate) {
            setIsValid(validate(debouncedValue));
        }
    }, [debouncedValue]);

    useEffect(() => {
        onMount?.();
        setIsValid(true);
        return onUnmount;
    }, []);

    const getValidationLabel = () =>
        !isValid && <div className="full-content-x generic-form-error my1">{validationMessage}</div>;

    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e);
        onChangeCallback?.(e);
    };

    const TextareaTagName: any = isAutosize ? TextareaAutosize : 'textarea';

    return (
        <>
            {disabled ? (
                <p className={classNames('preserve-white-space', className)}>{value}</p>
            ) : (
                <TextareaTagName
                    id={id}
                    {...additionalAttributes}
                    disabled={disabled}
                    className={className}
                    value={value}
                    onChange={handleOnChange}
                />
            )}
            {children}
            {getValidationLabel()}
        </>
    );
};

/**
 * @deprecated Use Mantine Textarea instead: https://mantine.dev/core/textarea/
 */
export const TextAreaConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(TextArea);
