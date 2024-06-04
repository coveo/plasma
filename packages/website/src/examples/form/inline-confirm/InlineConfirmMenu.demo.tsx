import {Button, InlineConfirm, Menu, showNotification} from '@coveord/plasma-mantine';

const Demo = () => (
    <InlineConfirm>
        <Menu>
            <Menu.Target>
                <Button>Menu</Button>
            </Menu.Target>
            <Menu.Dropdown>
                <InlineConfirm.Target component={Menu.Item} inlineConfirmId="delete">
                    Delete
                </InlineConfirm.Target>

                <InlineConfirm.Target
                    component={Menu.Item}
                    inlineConfirmId="delete2"
                    disabled
                    disabledTooltip="Will not trigger since its disabled"
                >
                    Delete 2
                </InlineConfirm.Target>
            </Menu.Dropdown>
        </Menu>
        <InlineConfirm.Prompt
            inlineConfirmId="delete"
            onConfirm={() => showNotification({message: 'Confirm clicked', autoClose: true})}
            onCancel={() => showNotification({message: 'Cancel clicked', autoClose: true})}
        />
        <InlineConfirm.Prompt inlineConfirmId="delete2" />
    </InlineConfirm>
);
export default Demo;
