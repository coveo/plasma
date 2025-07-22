import {Button, Prompt, TextInput, useDisclosure} from '@coveord/plasma-mantine';

const Demo = () => {
    const [opened, {open, close}] = useDisclosure();

    return (
        <>
            <Prompt size="sm" variant="critical" opened={opened} title="Caution !" onClose={close}>
                <TextInput
                    label="The slot with all the recommended products will be permanently removed from your store front"
                    placeholder="Type DELETE to confirm deletion"
                    description="Type DELETE below to confirm"
                ></TextInput>
                <Prompt.Footer>
                    <Prompt.CancelButton>Cancel</Prompt.CancelButton>
                    <Prompt.ConfirmButton>Delete</Prompt.ConfirmButton>
                </Prompt.Footer>
            </Prompt>
            <Button.Primary onClick={open}>Open Prompt</Button.Primary>
        </>
    );
};
export default Demo;
