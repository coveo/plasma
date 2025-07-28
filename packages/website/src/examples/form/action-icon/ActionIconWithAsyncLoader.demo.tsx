import {ActionIcon, showNotification} from '@coveord/plasma-mantine';
import {IconCheck, IconTrash} from '@coveord/plasma-react-icons';

const somethingAsync = (ms: number) => new Promise((r) => setTimeout(r, ms));

const promise = async () => {
    await somethingAsync(3000);
    showNotification({
        title: 'Deleted successfully',
        message: 'The delete button was put in a loading state while it was waiting for the delete to resolve.',
        autoClose: false,
        icon: <IconCheck size={16} />,
        color: 'success',
    });
};

const Demo = () => (
    <ActionIcon.DestructivePrimary onClick={promise}>
        <IconTrash size={16} />
    </ActionIcon.DestructivePrimary>
);
export default Demo;
