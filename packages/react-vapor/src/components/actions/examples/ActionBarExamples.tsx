import * as React from 'react';
import {IActionOptions} from '../Action';
import {ActionBar} from '../ActionBar';

export class ActionBarExamples extends React.Component<any, any> {
    render() {
        const actions: IActionOptions[] = [
            {
                name: 'Link to Coveo',
                link: 'http://coveo.com',
                target: '_blank',
                icon: 'exit',
                primary: true,
                enabled: true,
            },
            {
                name: 'action1',
                trigger: () => alert('Action 1 was triggered'),
                enabled: true,
            },
            {
                separator: true,
                enabled: true,
            },
            {
                name: 'action2',
                trigger: () => alert('Action 2 was triggered'),
                enabled: true,
            },
            {
                name: 'Link to Coveo (disabled)',
                link: 'http://coveo.com',
                target: '_blank',
                icon: 'exit',
                primary: true,
                enabled: false,
                hideDisabled: false,
                tooltip: "You cannot access Coveo's website at the moment.",
                tooltipPlacement: 'bottom',
            },
            {
                name: 'visibly disabled',
                trigger: () => alert('I will never be triggered'),
                target: '_blank',
                icon: 'open',
                primary: true,
                enabled: false,
                hideDisabled: false,
                tooltip: 'You cannot trigger me.',
                tooltipPlacement: 'bottom',
            },
        ];

        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Action bar without actions</label>
                    <ActionBar />
                </div>
                <div className="form-group">
                    <label className="form-control-label">Action bar with actions</label>
                    <ActionBar actions={actions} />
                </div>
                <div className="form-group">
                    <label className="form-control-label">
                        Action bar with default classes turned off and extra classes
                    </label>
                    <ActionBar
                        actions={actions}
                        removeDefaultContainerClasses
                        extraContainerClasses={['coveo-table-actions-container', 'p2']}
                    />
                </div>
                <div className="form-group">
                    <label className="form-control-label">Action bar with small actions</label>
                    <ActionBar actions={actions} withSmallActions />
                </div>
            </div>
        );
    }
}
