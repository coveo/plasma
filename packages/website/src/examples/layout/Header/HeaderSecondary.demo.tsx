import {CloseButton, Header} from '@coveord/plasma-mantine';

const Demo = () => (
    <Header variant="secondary">
        Title
        <Header.DocAnchor href="https://about:blank" label="Tooltip text" />
        <Header.Right>
            <CloseButton />
        </Header.Right>
    </Header>
);
export default Demo;
