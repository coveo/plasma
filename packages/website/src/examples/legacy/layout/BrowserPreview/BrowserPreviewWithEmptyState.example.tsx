import {BrowserPreview, BrowserPreviewEmpty} from '@coveord/plasma-react';

export default () => (
    <BrowserPreview>
        <BrowserPreviewEmpty onClick={() => alert('Clicked!')}>
            <span>
                Select a <span className="bolder">Query Pipeline</span>
            </span>
            <span>to see the preview</span>
        </BrowserPreviewEmpty>
    </BrowserPreview>
);
