import {Icon} from '@coveord/plasma-react-icons';
import classNames from 'clsx';
import {PropsWithChildren, FunctionComponent} from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState';
import {IDispatch} from '../../utils/ReduxUtils';
import {Button} from '../button';
import {removePrompt} from './InlinePromptActions';

export interface IUserChoice {
    description?: string;
    cancel?: string;
    choices?: Record<string, string>;
    icon?: Icon;
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

/**
 * @deprecated Use Mantine instead
 */
export const InlinePrompt: FunctionComponent<
    PropsWithChildren<IInlinePromptProps & Partial<ReturnType<typeof mapDispatchToProps>>>
> = ({options, onCancel}) => {
    const choices: JSX.Element[] = _.map(options.userChoice.choices, (choice: string) => (
        <Button classes="mod-danger ml1" onClick={options.onClick} key={choice}>
            {choice}
        </Button>
    ));

    const description: JSX.Element = options.userChoice.description ? (
        <span className="description">{options.userChoice.description}</span>
    ) : null;

    const cancel: JSX.Element = options.userChoice.cancel ? (
        <Button classes="cancel ml1" onClick={onCancel}>
            {options.userChoice.cancel}
        </Button>
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

const mapDispatchToProps = (dispatch: IDispatch<PlasmaState>, ownProps: IInlinePromptProps) => ({
    onCancel: () => dispatch(removePrompt(ownProps.id)),
});

/**
 * @deprecated Use Mantine instead
 */
export const InlinePromptConnected = connect(null, mapDispatchToProps)(InlinePrompt);
