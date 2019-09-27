import * as React from 'react';

import {ExampleComponent} from '../../../../docs/src/components/ComponentsInterface';
import {PopoverConnected} from '../PopoverConnected';

const PopoverConnectedExamples = () => (
    <div className="mt2">
        <h1 className="text-blue mb1 bold">Popover Connected</h1>
        <PopoverConnected id="popover-connected-example1" attachment="top left" targetAttachment="bottom left">
            <div className="btn">Click to toggle the popover</div>
            <div className="coveo-child">I am popping under the button</div>
        </PopoverConnected>
    </div>
);

export const PopoverExample: ExampleComponent = PopoverConnectedExamples;
PopoverConnectedExamples.description =
    'Popovers appear when users click an interactive element. Popovers allow you to display various types of information under different layouts (header, footer, split layout, etc.) without leaving the page. Their design also allows users to know where to click in order to reopen the Popover, if needed.';
