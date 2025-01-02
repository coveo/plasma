import {Button, Header, Prompt, useDisclosure} from '@coveord/plasma-mantine';

const Demo = () => {
    const [opened, {open, close}] = useDisclosure();

    return (
        <>
            <Prompt
                variant="success"
                opened={opened}
                title={<Header variant="secondary">Prompt title</Header>}
                onClose={close}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dui sed sapien finibus malesuada id
                sit amet risus. Praesent finibus sapien vel dolor bibendum, eget euismod metus dignissim.
                <Prompt.Footer>
                    <Prompt.ConfirmButton onClick={close}>Continue</Prompt.ConfirmButton>
                </Prompt.Footer>
            </Prompt>
            <Button onClick={open}>Open Prompt</Button>
        </>
    );
};
export default Demo;
