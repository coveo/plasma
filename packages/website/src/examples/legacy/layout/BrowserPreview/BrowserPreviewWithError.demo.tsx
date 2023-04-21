import {BrowserPreview, BrowserPreviewError} from '@coveord/plasma-react';

const Demo = () => (
    <BrowserPreview>
        <BrowserPreviewError errorMessage="The Query expression within the Reference Cases field is not valid." />
    </BrowserPreview>
);
export default Demo;
