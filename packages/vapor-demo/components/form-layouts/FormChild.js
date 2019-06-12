import Svg from '../Svg';

export const FormChild = () => (
    <>
        <div className="coveo-parent">
            <label className="coveo-checkbox-label">
                <input type="checkbox" className="coveo-checkbox" checked="" />
                <button type="button" />
                <span className="label">With child</span>
            </label>
            <div className="coveo-child">
                <label className="coveo-checkbox-label">
                    <input type="checkbox" className="coveo-checkbox" />
                    <button type="button" />
                    <span className="label">Child checkbox</span>
                </label>
            </div>
        </div>

        <div className="coveo-parent mt2 p2 bg-white">
            <label className="coveo-checkbox-label">
                <input type="checkbox" className="coveo-checkbox" checked="" />
                <button type="button" />
                <span className="label">Can have a different color?</span>
            </label>
            <div className="coveo-child mod-pure-white">
                <label className="coveo-checkbox-label">
                    <input type="checkbox" className="coveo-checkbox" />
                    <button type="button" />
                    <span className="label">Yes</span>
                </label>
            </div>
        </div>

        <div className="coveo-form mt2 coveo-parent">
            <label className="coveo-checkbox-label">
                <input type="checkbox" className="coveo-checkbox" />
                <button type="button" />
                <span className="label">It works with input elements too</span>
            </label>
            <div className="coveo-child">
                <div className="input-field form-group">
                    <input type="text" disabled required="" placeholder="Placeholder text" />
                    <label>
                        {' '}
                        Enabled invalid input
                        <span
                            className="inline-help-tooltip"
                            title=""
                            data-placement="right"
                            data-original-title="A simple inline help text."
                        >
                            <span className="inline-help-icon">
                                <Svg name="info" />
                            </span>
                        </span>
                    </label>
                </div>
            </div>
        </div>
        <div className="coveo-form mt2 coveo-parent">
            <label className="coveo-checkbox-label">
                <input type="checkbox" className="coveo-checkbox" checked />
                <button type="button" />
                <span className="label">or radio button</span>
            </label>
            <div className="coveo-child">
                <fieldset className="form-group">
                    <span className="form-control-label">A radio-select</span>
                    <div className="form-control radio-select">
                        <div className="radio-option">
                            <input name="enabledOptions" type="radio" id="Option1-child" value="blue" />
                            <label htmlFor="Option1-child">Blue</label>
                        </div>
                        <div className="radio-option">
                            <input name="enabledOptions" type="radio" id="Option2-child" value="green" checked />
                            <label htmlFor="Option2-child">Green</label>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
        <div className="coveo-form mt2 p2">
            <div className="flex flex-row">
                <fieldset className="form-group">
                    <span className="form-control-label">A radio-select</span>
                    <div className="form-control radio-select">
                        <div className="radio-option">
                            <input name="enabledOptions" type="radio" id="Option4-child" value="blue2" />
                            <label htmlFor="Option4-child">Blue</label>
                        </div>
                        <div className="radio-option">
                            <input name="enabledOptions" type="radio" id="Option5-child" value="green2" checked />
                            <label htmlFor="Option5-child">Green</label>
                        </div>
                        <div className="radio-option">
                            <input name="enabledOptions" type="radio" id="Option6-child" value="yellow" />
                            <label htmlFor="Option6-child">Yellow</label>
                        </div>
                    </div>
                </fieldset>
                <div className="p2">
                    <div className="coveo-child vertical">
                        <div className="form-control">
                            <label className="coveo-checkbox-label">
                                <input type="checkbox" className="coveo-checkbox" disabled />
                                <button type="button" />
                                <span className="label">Option 1</span>
                            </label>
                            <br />
                            <label className="mt1 coveo-checkbox-label">
                                <input type="checkbox" className="coveo-checkbox" checked disabled />
                                <button type="button" />
                                <span className="label">Option 2</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default FormChild;
