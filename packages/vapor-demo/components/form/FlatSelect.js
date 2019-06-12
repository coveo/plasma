export default function FlatSelect() {
    return (
        <>
            <div className="flat-select">
                <a className="flat-select-option" title="">Option 1</a>
                <a className="flat-select-option selectable" title="">Option 2</a>
                <a className="flat-select-option selectable" title="">Option 3</a>
            </div>

            <div className="flat-select mod-option-picker" style={{width: 200}}>
                <a className="flat-select-option" title="">Option 1</a>
                <a className="flat-select-option selectable" title="">Option 2</a>
                <a className="flat-select-option selectable" title="">Option 3</a>
            </div>

        </>
    );
}
