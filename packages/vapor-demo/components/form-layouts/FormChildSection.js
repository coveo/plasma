export const FormChildSection = () => (
    <>
        <div className="coveo-form">
            <div className="form-group">
                <div className="form-control">
                    <div className="btn dropdown-toggle">
                        <span className="dropdown-selected-value">Default Option</span>
                        <span className="dropdown-toggle-arrow" />
                    </div>
                </div>
                <div className="child-section">
                    <div className="form-control form-group">
                        <div className="btn dropdown-toggle">
                            <span className="dropdown-selected-value">Default Option</span>
                            <span className="dropdown-toggle-arrow" />
                        </div>
                    </div>
                    <div className="input-field form-group">
                        <input type="text" required />
                        <label>Input 1</label>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <div className="form-control">
                    <div className="btn dropdown-toggle">
                        <span className="dropdown-selected-value">Default Option</span>
                        <span className="dropdown-toggle-arrow" />
                    </div>
                </div>
                <div className="child-section mod-child-section-first-input">
                    <div className="input-field form-group">
                        <input type="text" required />
                        <label>Input 1</label>
                    </div>
                    <div className="input-field form-group">
                        <input type="text" required />
                        <label>Input 2</label>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default FormChildSection;
