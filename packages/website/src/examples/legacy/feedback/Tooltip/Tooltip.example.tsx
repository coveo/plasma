import {Tooltip} from '@coveord/plasma-react';

export default () => (
    <Tooltip title="I am a tooltip!" placement="right" noSpanWrapper>
        <button type="button" className="btn">
            Hover me!
        </button>
    </Tooltip>
);
