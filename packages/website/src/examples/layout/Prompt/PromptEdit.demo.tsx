import {Button, NumberInput, Prompt, useDisclosure} from '@coveord/plasma-mantine';

const Demo = () => {
    const [opened, {open, close}] = useDisclosure();

    return (
        <>
            <Prompt size="sm" opened={opened} title="Edit display product thresholds" onClose={close}>
                <NumberInput
                    label="Number of products to display"
                    placeholder="200ms"
                    mb="md"
                    description="Lorem ipsum more recommendations, you'll need to query the..... API with paginated request"
                ></NumberInput>
                <NumberInput
                    label="Minimum number of products to display"
                    placeholder="200ms"
                    description="Lorem ipsum more recommendations, you'll need to query the Commerce API with paginated request"
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
