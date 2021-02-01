import * as React from 'react';
import {BrowserPreview, BrowserPreviewEmpty, BrowserPreviewError, Section, SplitLayout} from 'react-vapor';

export const BrowserPreviewExamples: React.FunctionComponent = () => (
    <Section>
        <Section level={2} title="Browser Preview container">
            <SplitLayout
                leftChildren={<div />}
                rightChildren={
                    <div className="p3">
                        <BrowserPreview />
                    </div>
                }
            />
        </Section>
        <Section level={2} title="Browser Preview in the empty state">
            <SplitLayout
                leftChildren={<div />}
                rightChildren={
                    <div className="p3">
                        <BrowserPreviewEmpty onClick={() => alert('Clicked!')} />
                    </div>
                }
            />
        </Section>
        <Section level={2} title="Browser Preview in the error state">
            <SplitLayout
                leftChildren={<div />}
                rightChildren={
                    <div className="p3">
                        <BrowserPreviewError
                            onClick={() => alert('Clicked!')}
                            errorMessage="The Query expression within the Reference Cases field is not valid."
                        />
                    </div>
                }
            />
        </Section>
    </Section>
);
