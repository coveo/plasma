export const Base = () => (
    <div className="spaced-boxes-container flex flex-wrap">
        <a className="btn spaced-box">Link</a>
        <button type="button" className="btn spaced-box">
            Button
        </button>
        <div className="btn spaced-box">Div button</div>
        <button type="button" className="btn spaced-box" disabled>
            Button disabled
        </button>
        <button type="button" className="btn state-disabled spaced-box">
            Button disabled
        </button>
    </div>
);
export default Base;
