import {Icon} from '@coveord/plasma-react-icons';
import classNames from 'classnames';
import {ClassAttributes, Component, KeyboardEvent as ReactKeyboardEvent} from 'react';
import {connect} from 'react-redux';

import {IReduxActionsPayload} from '../../PlasmaState.js';
import {keyCode} from '../../utils/index.js';
import {IReduxAction} from '../../utils/ReduxUtils.js';
import {closeDropdown} from '../dropdown/DropdownActions.js';
import {IUserChoice} from '../inlinePrompt/InlinePrompt.js';
import {addPrompt, removePrompt} from '../inlinePrompt/InlinePromptActions.js';
import {Action, IBasicActionProps, IConfirmData} from './Action.js';

export interface ITriggerActionOwnProps extends ClassAttributes<TriggerAction>, IBasicActionProps {
    confirmLabel?: string;
    parentId?: string;
}

export interface ITriggerActionProps extends ITriggerActionOwnProps, Partial<ReturnType<typeof mapDispatchToProps>> {}

export const CONFIRM_LABEL: string = 'Are you sure?';

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: ITriggerActionOwnProps
) => ({
    onTriggerConfirm: (onClick: () => void, userChoice: IUserChoice, className: string) => {
        dispatch(addPrompt(ownProps.parentId, {onClick, userChoice, isOpened: false, className}));
    },
    onConfirm: () => dispatch(removePrompt(ownProps.parentId)),
    onCloseDropdown: () => dispatch(closeDropdown(ownProps.parentId)),
});

/**
 * @deprecated Use Mantine instead
 */
export class TriggerAction extends Component<ITriggerActionProps> {
    private onTriggerAction() {
        const confirmData: IConfirmData = this.props.action.requiresConfirmation;
        if (confirmData && this.props.onTriggerConfirm) {
            const confirmLabel: string =
                this.props.confirmLabel || this.props.action.requiresConfirmation.confirmLabel || CONFIRM_LABEL;
            const icon: Icon = this.props.action.icon;
            this.props.onTriggerConfirm(
                () => {
                    if (this.props.action.trigger) {
                        this.props.action.trigger();
                    }
                    if (this.props.onConfirm) {
                        this.props.onConfirm();
                    }
                },
                {
                    icon: icon,
                    description: confirmLabel,
                    cancel: confirmData.buttonLabels.cancel,
                    choices: {
                        confirm: confirmData.buttonLabels.confirm,
                    },
                },
                confirmData.confirmType
            );
        } else {
            if (this.props.action.trigger) {
                this.props.action.trigger();
                this.props.onCloseDropdown && this.props.onCloseDropdown();
            }
        }
    }

    private handleKeyDown = (event: ReactKeyboardEvent<HTMLSpanElement>) => {
        if (this.props.action.enabled && (event.keyCode === keyCode.enter || event.keyCode === keyCode.space)) {
            // Prevent the default action to stop scrolling when space is pressed
            event.preventDefault();
            this.onTriggerAction();
        }
    };

    render() {
        const actionClasses: string = classNames({
            enabled: this.props.action.enabled,
            'state-disabled': !this.props.action.enabled && (this.props.simple || !this.props.action.hideDisabled),
            disabled: !this.props.action.enabled && !this.props.simple,
        });

        return (
            <span
                onClick={() => this.props.action.enabled && this.onTriggerAction()}
                onKeyDown={this.handleKeyDown}
                className={actionClasses}
                title={this.props.action.name}
                role="button"
                tabIndex={0}
            >
                <Action action={this.props.action} simple={this.props.simple} />
            </span>
        );
    }
}

/**
 * @deprecated Use Mantine instead
 */
export const TriggerActionConnected = connect<null, ReturnType<typeof mapDispatchToProps>, ITriggerActionOwnProps>(
    undefined,
    mapDispatchToProps
)(TriggerAction as any);
