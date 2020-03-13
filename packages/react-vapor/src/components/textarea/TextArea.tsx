import * as React from 'react';
import {connect} from 'react-redux';
import TextareaAutosize, {TextareaAutosizeProps} from 'react-textarea-autosize';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
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

export const TextArea: React.FunctionComponent<ITextAreaProps> = (props) => {
    const [debouncedValue, setDebouncedValue] = React.useState(props.value);
    const [isValid, setIsValid] = React.useState(true);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(props.value);
        }, 300);
        return () => clearTimeout(timeout);
    }, [props.value]);

    React.useEffect(() => {
        setIsValid(props.validate?.(debouncedValue));
    }, [debouncedValue]);

    React.useEffect(() => {
        props.onMount?.();
        setIsValid(true);
        return props.onUnmount;
    }, []);

    const getValidationLabel = () => {
        return !isValid && <div className="full-content-x generic-form-error my1">{props.validationMessage}</div>;
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange?.(e);
        props.onChangeCallback?.(e);
    };

    const TextareaTagName: any = props.isAutosize ? TextareaAutosize : 'textarea';

    return (
        <>
            <TextareaTagName
                {...props.additionalAttributes}
                disabled={props.disabled}
                className={props.className}
                value={props.value}
                onChange={handleOnChange}
            />
            {props.children}
            {getValidationLabel()}
        </>
    );
};

export const TextAreaConnected: React.ComponentClass<ITextAreaProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(TextArea);
