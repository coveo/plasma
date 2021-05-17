import * as React from 'react';
import {connect} from 'react-redux';
import TextareaAutosize, {TextareaAutosizeProps} from 'react-textarea-autosize';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVaporState';
import {IDispatch, ReduxUtils} from '../../utils';
import {ILabelProps} from '../input';
import {addTextArea, changeTextAreaValue, removeTextArea} from './TextAreaActions';

export interface ITextAreaOwnProps {
    id: string;
    className?: string;
    additionalAttributes?: React.DetailedHTMLProps<
        React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    > &
        TextareaAutosizeProps;
    /**
     * Use with TextAreaConnected. Only useful in a Redux context.
     */
    valueOnMount?: string;
    /**
     * Use with TextAreaConnected. Only useful in a Redux context.
     */
    disabledOnMount?: boolean;

    isAutosize?: boolean;

    onChangeCallback?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    validate?: (value: string) => boolean;
    validationMessage?: string;
    validationLabelProps?: ILabelProps;
}

export interface ITextAreaStateProps {
    value?: string;
    disabled?: boolean;
}

export interface ITextAreaDispatchProps {
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    onMount?: () => void;
    onUnmount?: () => void;
}

export interface ITextAreaProps extends ITextAreaOwnProps, ITextAreaStateProps, ITextAreaDispatchProps {}

const mapStateToProps = (state: IReactVaporState, ownProps: ITextAreaOwnProps): ITextAreaStateProps => {
    const {value, disabled} = _.findWhere(state.textAreas, {id: ownProps.id}) || {value: '', disabled: false};
    return {value, disabled};
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: ITextAreaOwnProps): ITextAreaDispatchProps => ({
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => dispatch(changeTextAreaValue(ownProps.id, e.target.value)),
    onMount: () => dispatch(addTextArea(ownProps.id, ownProps.valueOnMount, ownProps.disabledOnMount)),
    onUnmount: () => dispatch(removeTextArea(ownProps.id)),
});

export const TextArea: React.FunctionComponent<ITextAreaProps> = ({
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
    const [debouncedValue, setDebouncedValue] = React.useState(value);
    const [isValid, setIsValid] = React.useState(true);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, 300);
        return () => clearTimeout(timeout);
    }, [value]);

    React.useEffect(() => {
        setIsValid(validate?.(debouncedValue));
    }, [debouncedValue]);

    React.useEffect(() => {
        onMount?.();
        setIsValid(true);
        return onUnmount;
    }, []);

    const getValidationLabel = () =>
        !isValid && <div className="full-content-x generic-form-error my1">{validationMessage}</div>;

    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e);
        onChangeCallback?.(e);
    };

    const TextareaTagName: any = isAutosize ? TextareaAutosize : 'textarea';

    return (
        <>
            <TextareaTagName
                {...additionalAttributes}
                disabled={disabled}
                className={className}
                value={value}
                onChange={handleOnChange}
            />
            {children}
            {getValidationLabel()}
        </>
    );
};

export const TextAreaConnected: React.ComponentClass<ITextAreaProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(TextArea);
