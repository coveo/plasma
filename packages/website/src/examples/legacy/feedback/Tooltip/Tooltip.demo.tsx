import {Tooltip} from '@coveord/plasma-react';

const Demo = () => (
    <Tooltip title="I am a tooltip!" placement="right" noSpanWrapper>
        <button type="button" className="btn">
            Hover me!
        </button>
    </Tooltip>
);
export default Demo;
