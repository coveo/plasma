import ColorBarExample from '@examples/legacy/feedback/ColorBar/ColorBar.example.tsx';
import ColorDotExecutingExample from '@examples/legacy/feedback/ColorDot/ColorDotExecuting.example.tsx';
import ColorDotSizeExample from '@examples/legacy/feedback/ColorDot/ColorDotSize.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const ColorDotsExamples = () => (
    <PageLayout
        id="ColorDot"
        sourcePath="packages/style/scss/elements/color-dot.scss"
        title="Color dot"
        section="Feedback"
        withPropsTable={false}
        description="A color dot indicates the status of an item."
        thumbnail="placeholder"
        code={ColorBarExample}
        examples={{
            size: {code: ColorDotSizeExample, title: 'Color dots sizes'},
            executing: {code: ColorDotExecutingExample, title: 'Flashing color dots'},
        }}
    />
);

export default ColorDotsExamples;
