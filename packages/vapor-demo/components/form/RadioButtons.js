export default function RadioButton() {
    return (
        <>
            <div className="coveo-form bg-white p2">
                <fieldset className="form-group">
                    <span className="form-control-label">A single radio-option</span>
                    <div className="form-control radio-option">
                        <input name="singleOption" type="radio" id="SingleOption" value="purple" />
                        <label htmlFor="SingleOption">Purple</label>
                    </div>
                </fieldset>

                <fieldset className="form-group">
                    <span className="form-control-label">A radio-select</span>
                    <div className="form-control radio-select">
                        <div className="radio-option">
                            <input name="enabledOptions" type="radio" id="Option1" value="blue" />
                            <label htmlFor="Option1">Blue</label>
                        </div>
                        <div className="radio-option">
                            <input name="enabledOptions" type="radio" id="Option2" value="green" />
                            <label htmlFor="Option2">Green</label>
                        </div>
                    </div>
                </fieldset>

                <fieldset className="form-group">
                    <span className="form-control-label">A radio-select with disabled options</span>
                    <div className="form-control radio-select">
                        <div className="radio-option">
                            <input name="disabledOptions" type="radio" id="Option3" value="yellow" disabled checked />
                            <label htmlFor="Option3">Yellow</label>
                        </div>
                        <div className="radio-option">
                            <input name="disabledOptions" type="radio" id="Option4" value="red" disabled />
                            <label htmlFor="Option4">Red</label>
                        </div>
                    </div>
                </fieldset>
            </div>
        </>
    );
}
