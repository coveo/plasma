import {ActionIcon, showNotification} from '@coveord/plasma-mantine';
import {CheckmarkSize24Px, DeleteSize16Px} from '@coveord/plasma-react-icons';

const somethingAsync = (ms: number) => new Promise((r) => setTimeout(r, ms));

const promise = async () => {
    await somethingAsync(3000);
    showNotification({
        title: 'Deleted successfully',
        message: 'The delete button was put in a loading state while it was waiting for the delete to resolve.',
        autoClose: false,
        icon: <CheckmarkSize24Px height={24} />,
        color: 'success',
    });
};

const Demo = () => (
    <ActionIcon onClick={promise} variant={'subtle'} color="red" size="lg">
        <DeleteSize16Px height={16} />
    </ActionIcon>
);
export default Demo;
