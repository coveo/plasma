import * as React from 'react';
import {ActionBarConnected, ACTION_SEPARATOR, addActionsToActionBar, IActionOptions, Section} from 'react-vapor';

import {Store} from '../../Store';

const actionBarId = 'action-bar-connected';

export class ActionBarConnectedExamples extends React.Component<any, any> {
    componentDidMount() {
        const actions: IActionOptions[] = [
            ACTION_SEPARATOR,
            {
                name: 'Link to Coveo',
                link: 'http://coveo.com',
                target: '_blank',
                icon: 'edit',
                primary: true,
                enabled: true,
            },
            ACTION_SEPARATOR,
            {
                name: 'Confirm Me',
                trigger: () => alert('You confirmed this action !'),
                target: '_blank',
                icon: 'disable',
                primary: true,
                enabled: true,
                requiresConfirmation: {
                    confirmLabel: 'Want to do this action ?',
                    confirmType: 'danger',
                    buttonLabels: {
                        confirm: 'sure !',
                        cancel: 'never !',
                    },
                },
            },
            ACTION_SEPARATOR,
            {
                name: 'Action 1',
                trigger: () => alert('Action 1 was triggered'),
                enabled: true,
                icon: 'edit',
                requiresConfirmation: {
                    confirmType: 'danger',
                    buttonLabels: {
                        confirm: 'Yes',
                        cancel: 'Cancel',
                    },
                },
            },
            ACTION_SEPARATOR,
            ACTION_SEPARATOR,
            {
                name: 'Action 2',
                trigger: () => alert('Action 2 was triggered'),
                enabled: true,
                requiresConfirmation: {
                    confirmType: 'danger',
                    buttonLabels: {
                        confirm: 'Pretty sure!',
                        cancel: 'Cancel',
                    },
                },
            },
            {
                name: 'Action 4',
                trigger: () => alert('Action 4 was triggered'),
                enabled: true,
            },
            ACTION_SEPARATOR,
            {
                name: 'Link to Coveo (disabled)',
                link: 'http://coveo.com',
                target: '_blank',
                icon: 'edit',
                primary: true,
                enabled: false,
                hideDisabled: false,
            },
            {
                name: 'Action 3',
                trigger: () => alert('You cannot trigger me'),
                icon: 'edit',
                primary: true,
                enabled: false,
                hideDisabled: false,
            },
            ACTION_SEPARATOR,
        ];
        setTimeout(() => {
            Store.dispatch(addActionsToActionBar(actionBarId, actions));
        }, 4000);
    }

    render() {
        return (
            <Section title="Action bar examples">
                <Section
                    level={2}
                    title="Action bar with Redux state and inline prompt (actions appear after 4 seconds)"
                >
                    <ActionBarConnected id={actionBarId} />
                </Section>
            </Section>
        );
    }
}
