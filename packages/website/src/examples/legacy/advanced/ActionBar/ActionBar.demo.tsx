import {
    ACTION_SEPARATOR,
    ActionBarConnected,
    addActionsToActionBar,
    Button,
    IActionOptions,
    IDispatch,
    PlasmaState,
    IActionBarState,
} from '@coveord/plasma-react';
import {EditSize24Px, UnavailableSize24Px} from '@coveord/plasma-react-icons';
import {useDispatch, useSelector} from 'react-redux';

const MY_ID = 'action-bar-id';

const Demo = () => {
    const dispatch: IDispatch = useDispatch();

    const actions = useSelector(
        (state: PlasmaState) =>
            state.actionBars.find((actionBar: IActionBarState) => actionBar.id === MY_ID)?.actions ?? [],
    );

    const toggleActions = () => {
        if (actions.length) {
            dispatch(addActionsToActionBar(MY_ID, []));
        } else {
            dispatch(addActionsToActionBar(MY_ID, BIG_LIST_OF_ACTIONS));
        }
    };
    return (
        <>
            <Button onClick={toggleActions} classes="mb2">
                Toggle actions
            </Button>
            <ActionBarConnected id={MY_ID} />
        </>
    );
};
export default Demo;

const BIG_LIST_OF_ACTIONS: IActionOptions[] = [
    ACTION_SEPARATOR,
    {
        name: 'Link to Coveo',
        link: 'http://coveo.com',
        target: '_blank',
        icon: EditSize24Px,
        primary: true,
        enabled: true,
    },
    ACTION_SEPARATOR,
    {
        name: 'Confirm Me',
        trigger: () => alert('You confirmed this action !'),
        target: '_blank',
        icon: UnavailableSize24Px,
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
        icon: EditSize24Px,
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
        icon: EditSize24Px,
        primary: true,
        enabled: false,
        hideDisabled: false,
    },
    ACTION_SEPARATOR,
];
