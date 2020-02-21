import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default function SlideToggleModifiers() {
    return (
        <VaporComponent
            id="slide-toggle-modifiers"
            title="Slide toggle modifiers"
            usage="Add boxed option, for boxes"
            withSource
        >
            <label className="coveo-slide-toggle-label boxed">
                <span className="toggle-label">Simple text</span>
                <input type="checkbox" className="coveo-slide-toggle" defaultChecked={false} />
                <button type="button" />
            </label>
            <label className="coveo-slide-toggle-label boxed ml1">
                <span className="toggle-label">Simple text</span>
                <input type="checkbox" className="coveo-slide-toggle" defaultChecked={true} />
                <button type="button" />
            </label>
            <br />
            <label className="coveo-slide-toggle-label boxed mt1">
                <span className="toggle-label">Simple text</span>
                <input type="checkbox" className="coveo-slide-toggle" defaultChecked={false} />
                <button type="button" />
                <span className="toggle-description">A small description of what this is for...</span>
            </label>
        </VaporComponent>
    );
}
