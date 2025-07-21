import {Button, Prompt, useDisclosure} from '@coveord/plasma-mantine';

const Demo = () => {
    const [opened, {open, close}] = useDisclosure();
    const onCancel = () => {
        console.log('User clicked on cancel');
        close();
    };
    const onConfirm = () => {
        console.log('User clicked on confirm');
        close();
    };

    return (
        <>
            <Prompt variant="warning" opened={opened} title="Warning !" onClose={close}>
                Optional placeholder component. Replace it with any component using the “Component Instance” swapper or
                detach and fill with your own content.
                <Prompt.Footer>
                    <Prompt.CancelButton onClick={onCancel}>Cancel</Prompt.CancelButton>
                    <Prompt.ConfirmButton onClick={onConfirm}>Continue</Prompt.ConfirmButton>
                </Prompt.Footer>
            </Prompt>
            <Button.Primary onClick={open}>Open Prompt</Button.Primary>
        </>
    );
};
export default Demo;
