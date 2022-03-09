import {BrowserPreview, BrowserPreviewEmpty, BrowserPreviewError, Section, SplitLayout} from '@coveord/plasma-react';
import {ArrowUpSize32Px} from '@coveord/plasma-react-icons';
import * as React from 'react';

import PlasmaComponent from '../../building-blocs/PlasmaComponent';

// start-print
export const BrowserPreviewExamples: React.FunctionComponent = () => (
    <PlasmaComponent
        id="BrowserPreview"
        title="Browser Preview"
        usage="A browser preview shows the result of configuration changes in a simplified representation of a browser interface."
        withSource
    >
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
            <Section level={2} title="Browser Preview with custom title">
                <SplitLayout
                    leftChildren={<div />}
                    rightChildren={
                        <div className="p3">
                            <BrowserPreview title={'Custom title! Custom title!'} />
                        </div>
                    }
                />
            </Section>
            <Section level={2} title="Browser Preview with custom content">
                <SplitLayout
                    leftChildren={<div />}
                    rightChildren={
                        <div className="p3">
                            <BrowserPreview>
                                <h4>Hello World</h4>
                                <p>Here's the description</p>
                            </BrowserPreview>
                        </div>
                    }
                />
            </Section>
            <Section level={2} title="Browser Preview with error message">
                <SplitLayout
                    leftChildren={<div />}
                    rightChildren={
                        <div className="p3">
                            <BrowserPreview>
                                <BrowserPreviewError errorMessage="The Query expression within the Reference Cases field is not valid." />
                            </BrowserPreview>
                        </div>
                    }
                />
            </Section>
            <Section level={2} title="Browser Preview with empty state">
                <SplitLayout
                    leftChildren={<div />}
                    rightChildren={
                        <div className="p3">
                            <BrowserPreview>
                                <BrowserPreviewEmpty onClick={() => alert('Clicked!')}>
                                    <span>
                                        Select a <span className="bolder">Query Pipeline</span>
                                    </span>
                                    <span>to see the preview</span>
                                </BrowserPreviewEmpty>
                            </BrowserPreview>
                        </div>
                    }
                />
            </Section>
            <Section level={2} title="Browser Preview with empty state and custom image">
                <SplitLayout
                    leftChildren={<div />}
                    rightChildren={
                        <div className="p3">
                            <BrowserPreview>
                                <BrowserPreviewEmpty onClick={() => alert('Wow!')} image={<ArrowUpSize32Px />}>
                                    <span>Look at this browser-like header!</span>
                                </BrowserPreviewEmpty>
                            </BrowserPreview>
                        </div>
                    }
                />
            </Section>
        </Section>
    </PlasmaComponent>
);
export default BrowserPreviewExamples;
