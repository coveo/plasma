import {Button, Prompt, useDisclosure} from '@coveord/plasma-mantine';

const Demo = () => {
    const [opened, {open, close}] = useDisclosure();

    return (
        <>
            <Prompt variant="success" opened={opened} title="Prompt title" onClose={close}>
                Optional placeholder component. Replace it with any component using the “Component Instance” swapper or
                detach and fill with your own content.
                <Prompt.Footer>
                    <Prompt.ConfirmButton onClick={close}>Continue</Prompt.ConfirmButton>
                </Prompt.Footer>
            </Prompt>
            <Button.Primary onClick={open}>Open Prompt</Button.Primary>
        </>
    );
};
export default Demo;
