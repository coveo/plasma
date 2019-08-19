import {useState} from 'react';
import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default function SlideToggle() {
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);

    return (
        <VaporComponent
            id="slide-toggle"
            title="Slide toggle"
            usage="Another style for a checkbox with stylish animations."
            withSource
        >
            <label className="coveo-slide-toggle-label">
                <span className="toggle-label" onClick={() => setFirst(!first)}>
                    Label before
                </span>
                <input type="checkbox" className="coveo-slide-toggle" checked={first} />
                <button type="button" onClick={() => setFirst(!first)} />
            </label>
            <br />
            <div className="coveo-slide-toggle-label mt1">
                <input type="checkbox" className="coveo-slide-toggle" checked={second} />
                <button type="button" onClick={() => setSecond(!second)} />
                <span className="toggle-label" onClick={() => setSecond(!second)}>
                    Label after
                </span>
            </div>

            <p className="mt1">The slide toggle can also be used without the coveo-slide-toggle-label label.</p>
            <input type="checkbox" className="coveo-slide-toggle" checked={third} />
            <button type="button" className="mt1" onClick={() => setThird(!third)} />
        </VaporComponent>
    );
}
