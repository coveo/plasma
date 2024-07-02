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
            <Prompt variant="critical" opened={opened} title="Prompt title" onClose={close}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dui sed sapien finibus malesuada id
                sit amet risus. Praesent finibus sapien vel dolor bibendum, eget euismod metus dignissim.
                <Prompt.Footer>
                    <Prompt.CancelButton onClick={onCancel}>Cancel</Prompt.CancelButton>
                    <Prompt.ConfirmButton onClick={onConfirm}>Continue</Prompt.ConfirmButton>
                </Prompt.Footer>
            </Prompt>
            <Button onClick={open}>Open Prompt</Button>
        </>
    );
};
export default Demo;
