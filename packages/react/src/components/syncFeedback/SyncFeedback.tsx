import {PureComponent} from 'react';

import {InfoToken, InfoTokenMode, InfoTokenSize, InfoTokenType} from '../info-token/index.js';

export interface ISyncFeedbackProps {
    /**
     * The label of the current state
     *
     * @default 'Saving changes...' for 'SYNCING', 'Changes saved' for 'SUCCESS', and 'Changes could not be saved.' for 'ERROR'.
     */
    feedback?: string;
    /**
     * The current state of the sync feedback component
     * Either 'SYNCING', 'SUCCESS', 'ERROR' or 'NONE'
     */
    state: string;
}

export const SyncFeedbackState = {
    SYNCING: 'SYNCING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    NONE: 'NONE',
};

export const DEFAULT_SYNC_FEEDBACK_SYNCING_LABEL: string = 'Saving changes...';
export const DEFAULT_SYNC_FEEDBACK_SUCCESS_LABEL: string = 'Changes saved.';
export const DEFAULT_SYNC_FEEDBACK_ERROR_LABEL: string = 'Changes could not be saved.';

/**
 * @deprecated Use Mantine instead
 */
export class SyncFeedback extends PureComponent<ISyncFeedbackProps> {
    render() {
        const classes = ['sync-feedback'];
        if (this.props.state === SyncFeedbackState.ERROR) {
            classes.push('mod-error');
        } else if (this.props.state === SyncFeedbackState.SUCCESS) {
            classes.push('mod-success');
        }

        return (
            <div className={classes.join(' ')}>
                {this.renderIcon()}
                {this.renderContent()}
            </div>
        );
    }

    private renderIcon() {
        if (this.props.state === SyncFeedbackState.SYNCING) {
            return <span className="status-dot syncing sync-feedback-icon"></span>;
        } else if (this.props.state === SyncFeedbackState.SUCCESS) {
            return (
                <InfoToken
                    className="sync-feedback-icon"
                    mode={InfoTokenMode.Stroked}
                    size={InfoTokenSize.Small}
                    type={InfoTokenType.Success}
                />
            );
        } else if (this.props.state === SyncFeedbackState.ERROR) {
            return (
                <InfoToken
                    className="sync-feedback-icon"
                    mode={InfoTokenMode.Stroked}
                    size={InfoTokenSize.Small}
                    type={InfoTokenType.Critical}
                />
            );
        } else {
            return null;
        }
    }

    private renderContent() {
        if (this.props.state === SyncFeedbackState.SYNCING) {
            return (
                <span className="sync-feedback-text">{this.props.feedback || DEFAULT_SYNC_FEEDBACK_SYNCING_LABEL}</span>
            );
        } else if (this.props.state === SyncFeedbackState.SUCCESS) {
            return (
                <span className="sync-feedback-text">{this.props.feedback || DEFAULT_SYNC_FEEDBACK_SUCCESS_LABEL}</span>
            );
        } else if (this.props.state === SyncFeedbackState.ERROR) {
            return (
                <span className="sync-feedback-text">{this.props.feedback || DEFAULT_SYNC_FEEDBACK_ERROR_LABEL}</span>
            );
        } else {
            return null;
        }
    }
}
