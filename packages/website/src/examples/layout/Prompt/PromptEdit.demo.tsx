import {Button, NumberInput, Prompt, useDisclosure} from '@coveord/plasma-mantine';

const Demo = () => {
    const [opened, {open, close}] = useDisclosure();

    return (
        <>
            <Prompt size="xs" opened={opened} title="Edit display product thresholds" onClose={close}>
                <NumberInput
                    label="Articles to be displayed"
                    placeholder="200"
                    mb="md"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                ></NumberInput>
                <NumberInput
                    label="Minimum of articles to be displayed"
                    placeholder="50"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                ></NumberInput>
                <Prompt.Footer>
                    <Prompt.CancelButton onClick={close}>Cancel</Prompt.CancelButton>
                    <Prompt.ConfirmButton onClick={close}>Apply changes</Prompt.ConfirmButton>
                </Prompt.Footer>
            </Prompt>
            <Button.Primary onClick={open}>Open Prompt</Button.Primary>
        </>
    );
};
export default Demo;
