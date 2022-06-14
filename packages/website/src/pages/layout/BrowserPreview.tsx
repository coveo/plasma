const code = `
    import {BrowserPreview} from '@coveord/plasma-react';

    export default () => (
        <BrowserPreview title={'Custom title! Custom title!'}>   
            <h4>Hello World</h4>
            <p>Here's the description</p>
        </BrowserPreview>
    );
`;

const withError = `
    import {BrowserPreview, BrowserPreviewError} from '@coveord/plasma-react';

    export default () => (
        <BrowserPreview>
            <BrowserPreviewError errorMessage="The Query expression within the Reference Cases field is not valid." />
        </BrowserPreview>
    );
`;

const emptyState = `
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
`;

export const BrowserPreviewExamples = () => (
    <PageLayout
        id="BrowserPreview"
        title="Browser preview"
        section="Layout"
        thumbnail="placeholder"
        description="A browser preview shows the result of configuration changes in a simplified representation of a browser interface."
        componentSourcePath="/browserPreview/BrowserPreview.tsx"
        code={code}
        examples={{
            withError: {code: withError, title: 'With error'},
            emptyState: {code: emptyState, title: 'Empty state'},
        }}
    />
);
export default BrowserPreviewExamples;
