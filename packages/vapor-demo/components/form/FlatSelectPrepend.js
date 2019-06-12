export default function FlatSelectPrepend() {
    return (
        <div className="prepended-flat-select">
            <div className="flat-select-prepend">Label</div>
            <div className="flat-select">
                <a className="flat-select-option" title="">10</a>
                <a className="flat-select-option selectable" title="">20</a>
                <a className="flat-select-option selectable" title="">30</a>
            </div>
        </div>
    );
}
