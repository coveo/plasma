import {Button, TooltipPlacement} from '@coveord/plasma-react';

export default () => (
    <Button primary tooltip="Hello there!" tooltipPlacement={TooltipPlacement.Top}>
        Hover me!
    </Button>
);
