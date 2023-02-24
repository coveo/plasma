import {Button, showNotification} from '@coveord/plasma-mantine';

const somethingAsync = (ms: number) => new Promise((r) => setTimeout(r, ms));

const promise = async () => {
    await somethingAsync(3000);
    showNotification({
        title: 'Saved successfully',
        message: 'The save disabled was put in a loading state while it was waiting for the save to resolve.',
        autoClose: false,
    });
};

export default () => <Button onClick={promise}>Save</Button>;
