import {Button, Prompt} from '@coveord/plasma-mantine';
import {useState} from 'react';

const Demo = () => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Prompt variant="warning" opened={opened} title="Prompt title" onClose={() => setOpened(false)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dui sed sapien finibus malesuada id
                sit amet risus. Praesent finibus sapien vel dolor bibendum, eget euismod metus dignissim.
                <Prompt.Footer>
                    <Button variant="outline" onClick={() => setOpened(false)}>
                        Close
                    </Button>
                </Prompt.Footer>
            </Prompt>
            <Button onClick={() => setOpened(true)}>Open Prompt</Button>
        </>
    );
};
export default Demo;
