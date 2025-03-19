import {ChildForm, TextInput} from '@coveord/plasma-mantine';
const Demo = () => (
    <ChildForm in={true}>
        <TextInput label="First name" required />
        <TextInput label="Last name" required />
    </ChildForm>
);
export default Demo;
