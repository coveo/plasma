export default function SlideToggleDouble() {
    return (
        <>
            <label className="coveo-slide-toggle-double first" htmlFor="choice">
                Choice 1
            </label>
            <input
                type="checkbox"
                className="coveo-slide-toggle-double"
                name="choice"
                id="choice"
                defaultChecked={false}
            />
            <span />
            <label className="coveo-slide-toggle-double second" htmlFor="choice">
                Choice 2
            </label>
        </>
    );
}
