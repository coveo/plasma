import {Button, InlineConfirm, Menu, showNotification} from '@coveord/plasma-mantine';

const Demo = () => (
    <InlineConfirm>
        <Menu>
            <Menu.Target>
                <Button>Menu</Button>
            </Menu.Target>
            <Menu.Dropdown>
                <InlineConfirm.Target component={Menu.Item} id="delete">
                    Delete
                </InlineConfirm.Target>

                <InlineConfirm.Target
                    component={Menu.Item}
                    id="delete2"
                    disabled
                    disabledTooltip="Will not trigger since its disabled"
                >
                    Delete 2
                </InlineConfirm.Target>
            </Menu.Dropdown>
        </Menu>
        <InlineConfirm.Prompt
            id="delete"
            onConfirm={() => showNotification({message: 'Confirm clicked', autoClose: true})}
            onCancel={() => showNotification({message: 'Cancel clicked', autoClose: true})}
        />
        <InlineConfirm.Prompt id="delete2" />
    </InlineConfirm>
);
export default Demo;
