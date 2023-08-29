import {CloseButton, Header} from '@coveord/plasma-mantine';

const Demo = () => (
    <Header variant="modal">
        Title
        <Header.DocAnchor href="https://about:blank" label="Tooltip text" />
        <Header.Actions>
            <CloseButton />
        </Header.Actions>
    </Header>
);
export default Demo;
