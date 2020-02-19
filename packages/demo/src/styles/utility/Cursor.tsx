import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default function Cursor() {
    return (
        <VaporComponent id="cursor" title="Cursor" usage="Set a specific cursor style on any element." withSource>
            <p className="mb1 cursor-alias">alias</p>
            <p className="mb1 cursor-all-scroll">all-scroll</p>
            <p className="mb1 cursor-auto">auto</p>
            <p className="mb1 cursor-cell">cell</p>
            <p className="mb1 cursor-context-menu">context-menu</p>
            <p className="mb1 cursor-col-resize">col-resize</p>
            <p className="mb1 cursor-copy">copy</p>
            <p className="mb1 cursor-crosshair">crosshair</p>
            <p className="mb1 cursor-default">default</p>
            <p className="mb1 cursor-e-resize">e-resize</p>
            <p className="mb1 cursor-ew-resize">ew-resize</p>
            <p className="mb1 cursor-grab">grab</p>
            <p className="mb1 cursor-grabbing">grabbing</p>
            <p className="mb1 cursor-help">help</p>
            <p className="mb1 cursor-move">move</p>
            <p className="mb1 cursor-n-resize">n-resize</p>
            <p className="mb1 cursor-ne-resize">ne-resize</p>
            <p className="mb1 cursor-nesw-resize">nesw-resize</p>
            <p className="mb1 cursor-ns-resize">ns-resize</p>
            <p className="mb1 cursor-nw-resize">nw-resize</p>
            <p className="mb1 cursor-nwse-resize">nwse-resize</p>
            <p className="mb1 cursor-no-drop">no-drop</p>
            <p className="mb1 cursor-none">none</p>
            <p className="mb1 cursor-not-allowed">not-allowed</p>
            <p className="mb1 cursor-pointer">pointer</p>
            <p className="mb1 cursor-progress">progress</p>
            <p className="mb1 cursor-row-resize">row-resize</p>
            <p className="mb1 cursor-s-resize">s-resize</p>
            <p className="mb1 cursor-se-resize">se-resize</p>
            <p className="mb1 cursor-sw-resize">sw-resize</p>
            <p className="mb1 cursor-text">text</p>
            <p className="mb1 cursor-w-resize">w-resize</p>
            <p className="mb1 cursor-wait">wait</p>
            <p className="mb1 cursor-zoom-in">zoom-in</p>
            <p className="mb1 cursor-zoom-out">zoom-out</p>
        </VaporComponent>
    );
}
