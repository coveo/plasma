import {GroupableCheckboxConnected, Label} from '@coveord/plasma-react';

export default () => (
    <>
        <GroupableCheckboxConnected id="parent-id" isParent clearSides classes="mb1">
            <Label>Parent</Label>
        </GroupableCheckboxConnected>
        <GroupableCheckboxConnected id="child-1-id" parentId="parent-id">
            <Label>Child 1</Label>
        </GroupableCheckboxConnected>
        <GroupableCheckboxConnected id="child-2-id" parentId="parent-id">
            <Label>Child 2</Label>
        </GroupableCheckboxConnected>
        <GroupableCheckboxConnected id="child-3-id" parentId="parent-id">
            <Label>Child 3</Label>
        </GroupableCheckboxConnected>
    </>
);
