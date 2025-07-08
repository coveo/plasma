import {Button, Modal} from '@coveord/plasma-mantine';
import {useState} from 'react';

const Demo = () => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Modal
                size="md"
                opened={opened}
                title="Modal Title"
                description="Modal description"
                help={{href: 'https://about:blank', label: 'Tooltip text'}}
                onClose={() => setOpened(false)}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dui sed sapien finibus malesuada id
                sit amet risus. Praesent finibus sapien vel dolor bibendum, eget euismod metus dignissim. Phasellus
                lacinia sem nunc, vel dapibus odio suscipit id. Aenean lobortis sollicitudin suscipit. Cras vitae ipsum
                sit amet nibh efficitur imperdiet. Praesent scelerisque erat est. Cras dictum sodales tellus sed pretium
                <Modal.Footer>
                    <Button.Tertiary onClick={() => setOpened(false)}>Cancel</Button.Tertiary>
                    <Button.Primary onClick={() => setOpened(false)}>Accept</Button.Primary>
                </Modal.Footer>
            </Modal>
            <Button.Primary onClick={() => setOpened(true)}>Open Modal</Button.Primary>
        </>
    );
};
export default Demo;
