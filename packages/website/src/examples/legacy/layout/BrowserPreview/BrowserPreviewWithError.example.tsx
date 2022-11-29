import {BrowserPreview, BrowserPreviewError} from '@coveord/plasma-react';

export default () => (
    <BrowserPreview>
        <BrowserPreviewError errorMessage="The Query expression within the Reference Cases field is not valid." />
    </BrowserPreview>
);
