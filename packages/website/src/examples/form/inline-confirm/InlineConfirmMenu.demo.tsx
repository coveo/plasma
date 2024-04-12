import {Button, InlineConfirm, showNotification} from '@coveord/plasma-mantine';
import {Menu, MenuItem} from '@mantine/core';

const Demo = () => (
    <InlineConfirm>
        <Menu>
            <Menu.Target>
                <Button>Menu</Button>
            </Menu.Target>
            <Menu.Dropdown>
                <InlineConfirm.Target component={MenuItem} id="delete">
                    Delete
                </InlineConfirm.Target>
            </Menu.Dropdown>
        </Menu>
        <InlineConfirm.Prompt
            id="delete"
            onConfirm={() => showNotification({message: 'Confirm clicked', autoClose: true})}
            onCancel={() => showNotification({message: 'Cancel clicked', autoClose: true})}
        />
    </InlineConfirm>
);
export default Demo;
