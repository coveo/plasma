import {Modal, Button} from '@coveord/plasma-mantine';
import {useState} from 'react';

export default () => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Modal title"
                description="Modal description"
                header={{
                    actions: (
                        <>
                            <Button>Action 1</Button>
                            <Button variant="outline">Action 2</Button>
                        </>
                    ),
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dui sed sapien finibus malesuada id
                sit amet risus. Praesent finibus sapien vel dolor bibendum, eget euismod metus dignissim. Phasellus
                lacinia sem nunc, vel dapibus odio suscipit id. Aenean lobortis sollicitudin suscipit. Cras vitae ipsum
                sit amet nibh efficitur imperdiet. Praesent scelerisque erat est. Cras dictum sodales tellus sed pretium
            </Modal>
            <Button onClick={() => setOpened(true)}>Open Modal</Button>
        </>
    );
};
