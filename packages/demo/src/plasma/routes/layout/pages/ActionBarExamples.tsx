import * as React from 'react';
import {ActionBar, ACTION_SEPARATOR, IActionOptions, Section} from 'react-vapor';

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
            ACTION_SEPARATOR,
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
            <Section level={1} title="ActionBar examples">
                <Section level={2} title="Action bar without actions">
                    <ActionBar />
                </Section>
                <Section level={2} title="Action bar with actions">
                    <ActionBar actions={actions} />
                </Section>
                <Section level={2} title="Action bar with default classes turned off and extra classes">
                    <ActionBar
                        actions={actions}
                        removeDefaultContainerClasses
                        extraContainerClasses={['coveo-table-actions-container', 'p2']}
                    />
                </Section>
                <Section level={2} title="Action bar with small actions">
                    <ActionBar actions={actions} withSmallActions />
                </Section>
                <Section level={2} title="Action bar disabled">
                    <ActionBar actions={actions} disabled />
                </Section>
                <Section level={2} title="Action bar disabled with a secondary action converted to a primary action">
                    <ActionBar
                        actions={[
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
                                primary: false,
                                enabled: false,
                                hideDisabled: false,
                                tooltip: 'You cannot trigger me.',
                                tooltipPlacement: 'bottom',
                            },
                        ]}
                        disabled
                    />
                </Section>
            </Section>
        );
    }
}
