import ColorDotDemo from '@examples/legacy/feedback/ColorDot/ColorDot.demo.tsx';
import ColorDotExecutingDemo from '@examples/legacy/feedback/ColorDot/ColorDotExecuting.demo.tsx';
import ColorDotSizeDemo from '@examples/legacy/feedback/ColorDot/ColorDotSize.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const ColorDotsDemos = () => (
    <PageLayout
        id="ColorDot"
        sourcePath="/packages/style/scss/elements/color-dot.scss"
        title="Color dot"
        section="Feedback"
        withPropsTable={false}
        description="A color dot indicates the status of an item."
        thumbnail="placeholder"
        demo={<ColorDotDemo center />}
        examples={{
            size: <ColorDotSizeDemo center title="Color dots sizes" />,
            executing: <ColorDotExecutingDemo center title="Flashing color dots" />,
        }}
    />
);

export default ColorDotsDemos;
