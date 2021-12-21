import * as React from 'react';
import {Svg} from '../svg/Svg';

export interface ISyncFeedbackProps {
    feedback?: string;
    state: string;
}

export const SyncFeedbackState = {
    SYNCING: 'SYNCING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    NONE: 'NONE',
};

export const DEFAULT_SYNC_FEEDBACK_SYNCING_LABEL: string = 'Saving changes...';
export const DEFAULT_SYNC_FEEDBACK_SUCCESS_LABEL: string = 'Changes saved';
export const DEFAULT_SYNC_FEEDBACK_ERROR_LABEL: string = 'Changes could not be saved.';

export class SyncFeedback extends React.Component<ISyncFeedbackProps, any> {
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
            return <Svg svgName="check" className="sync-feedback-icon" svgClass="icon" />;
        } else if (this.props.state === SyncFeedbackState.ERROR) {
            return <Svg svgName="clear" className="sync-feedback-icon" svgClass="icon" />;
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
