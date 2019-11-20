import * as React from 'react';
import {connect} from 'react-redux';
import TextareaAutosize, {TextareaAutosizeProps} from 'react-textarea-autosize';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {addTextArea, changeTextAreaValue, removeTextArea} from './TextAreaActions';

/**
 * TODO: autoresize is not yet implemented on TextArea
 */

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

export class TextArea extends React.Component<ITextAreaProps, {}> {
    static defaultProps: Partial<ITextAreaOwnProps> = {
        additionalAttributes: {},
        className: '',
    };

    componentWillMount() {
        if (this.props.onMount) {
            this.props.onMount();
        }
    }

    componentWillUnmount() {
        if (this.props.onUnmount) {
            this.props.onUnmount();
        }
    }

    render() {
        const TextareaTagName: any = this.props.isAutosize ? TextareaAutosize : 'textarea';
        return (
            <TextareaTagName
                {...this.props.additionalAttributes}
                id={this.props.id}
                disabled={this.props.disabled}
                className={this.props.className}
                value={this.props.value}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.handleOnChange(e)}
            />
        );
    }

    private handleOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        this.props.onChange?.(e);
        this.props.onChangeCallback?.(e);
    }
}

export const TextAreaConnected: React.ComponentClass<ITextAreaProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(TextArea);
