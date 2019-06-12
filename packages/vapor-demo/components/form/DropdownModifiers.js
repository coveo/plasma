export default function DropdownModifiers() {
    return (
        <>
            <div className="dropdown open mod-menu">
                <button className="btn dropdown-toggle" type="button">
                    <span className="dropdown-toggle-arrow" />
                    mod-menu
                </button>
                <ul className="dropdown-menu">
                    <li><span>Item 1</span></li>
                    <li><span>Item 2</span></li>
                </ul>
            </div>

            <div className="dropdown open right">
                <button className="btn dropdown-toggle" type="button">
                    <span className="dropdown-toggle-arrow" />
                    mod-right
                </button>
                <ul className="dropdown-menu mod-right">
                    <li><span>Item 1</span></li>
                    <li><span>Really Long Item</span></li>
                </ul>
            </div>

        </>
    );
};
