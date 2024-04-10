import {Header} from '@coveord/plasma-mantine';

const Demo = () => (
    <Header variant="content" description="This is a description">
        Title
        <Header.DocAnchor href="https://about:blank" label="Tooltip text" />
    </Header>
);
export default Demo;
