import {Button, showNotification} from '@coveord/plasma-mantine';
import {CheckmarkSize24Px} from '@coveord/plasma-react-icons';
import {color} from '@coveord/plasma-tokens';

const somethingAsync = (ms: number) => new Promise((r) => setTimeout(r, ms));

const promise = async () => {
    console.log(color.secondary.lime[6]);
    await somethingAsync(3000);
    showNotification({
        title: 'Saved successfully',
        message: 'The save disabled was put in a loading state while it was waiting for the save to resolve.',
        autoClose: false,
        icon: <CheckmarkSize24Px height={24} />,
        styles: (theme) => ({
            root: {
                '.__mantine-ref-icon': {
                    backgroundColor: 'transparent',
                    color: theme.colors.success[6],
                },
            },
        }),
    });
};

export default () => <Button onClick={promise}>Save</Button>;
