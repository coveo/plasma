export default function SlideToggleModifiers() {
    return (
        <>
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
        </>
    );
}
