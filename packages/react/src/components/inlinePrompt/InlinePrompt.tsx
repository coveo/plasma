import classNames from 'classnames';
import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVaporState';
import {IDispatch} from '../../utils/ReduxUtils';
import {removePrompt} from './InlinePromptActions';

export interface IUserChoice {
    description?: string;
    cancel?: string;
    choices?: Record<string, string>;
    icon?: string;
}

export interface IInlinePromptOptions {
    onClick: () => void;
    userChoice: IUserChoice;
    isOpened?: boolean;
    className?: string;
}

export interface IInlinePromptProps {
    id?: string;
    options: IInlinePromptOptions;
}

export const InlinePrompt: React.FunctionComponent<
    IInlinePromptProps & Partial<ReturnType<typeof mapDispatchToProps>>
> = ({options, onCancel}) => {
    const choices: JSX.Element[] = _.map(options.userChoice.choices, (choice: string) => (
        <button
            type="button"
            className="btn action mod-danger prompt-action enabled"
            onClick={options.onClick}
            key={choice}
        >
            {choice}
        </button>
    ));

    const description: JSX.Element = options.userChoice.description ? (
        <span className="description">{options.userChoice.description}</span>
    ) : null;

    const cancel: JSX.Element = options.userChoice.cancel ? (
        <button type="button" className="btn cancel prompt-action enabled" onClick={onCancel}>
            {options.userChoice.cancel}
        </button>
    ) : null;

    const className = classNames(`prompt-${options.className ?? 'info'}`, {opened: options.isOpened});

    return (
        <span className={className}>
            <span className="label-confirmation">{description}</span>
            {choices}
            {cancel}
        </span>
    );
};

const mapDispatchToProps = (dispatch: IDispatch<IReactVaporState>, ownProps: IInlinePromptProps) => ({
    onCancel: () => dispatch(removePrompt(ownProps.id)),
});

export const InlinePromptConnected = connect(null, mapDispatchToProps)(InlinePrompt);
