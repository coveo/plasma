import {
    ACTION_SEPARATOR,
    ActionBarConnected,
    addActionsToActionBar,
    filterItems,
    IActionOptions,
} from '@coveord/plasma-react';
import * as React from 'react';

import PlasmaComponent from '../../building-blocs/PlasmaComponent';
import {Store} from '../../Store';

const actionBarId = 'action-bar-connected';

// start-print
export class ActionBarExamples extends React.Component<any, any> {
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
        Store.dispatch(addActionsToActionBar(actionBarId, actions));
        Store.dispatch(filterItems(actionBarId, 'Item'));
    }

    render() {
        return (
            <PlasmaComponent id="ActionBarConnected" title="Action Bar" withSource>
                <ActionBarConnected id={actionBarId} itemFilterLabel="Filtered By" />
            </PlasmaComponent>
        );
    }
}
// stop-print
export default ActionBarExamples;
