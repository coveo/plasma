import {Button, TooltipPlacement} from '@coveord/plasma-react';

const Demo = () => (
    <Button primary tooltip="Hello there!" tooltipPlacement={TooltipPlacement.Top}>
        Hover me!
    </Button>
);
export default Demo;
