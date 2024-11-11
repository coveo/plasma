import {ChildForm, TextInput} from '@coveord/plasma-mantine';
const Demo = () => (
    <ChildForm in={true} title="Personal information" description="Provide the user's personal information">
        <TextInput label="First name" required />
        <TextInput label="Last name" required />
    </ChildForm>
);
export default Demo;
