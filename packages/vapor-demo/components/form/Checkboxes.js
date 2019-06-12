import {useEffect} from 'react';

export default function Checkboxes() {
    useEffect(() => {
        document.querySelectorAll('.js-prop-indeterminate input').forEach((n) => {
            n.indeterminate = true;
        });
    });

    return (
        <>
            <label className="coveo-checkbox-label">
                <input type="checkbox" className="coveo-checkbox" />
                <button type="button" />
                <span className="label">Default</span>
            </label>
            <br />
            <div className="coveo-checkbox-label mt1">
                <input type="checkbox" className="coveo-checkbox" checked />
                <button type="button" />
                <span className="label">Checked</span>
            </div>
            <br />
            <label className="coveo-checkbox-label mt1 js-prop-indeterminate">
                <input type="checkbox" className="coveo-checkbox" />
                <button type="button" />
                <span className="label">Indeterminate</span>
            </label>
            <br />
            <label className="coveo-checkbox-label disabled mt1">
                <input type="checkbox" className="coveo-checkbox" disabled />
                <button type="button" disabled />
                <span className="label">Default Disabled</span>
            </label>
            <br />
            <label className="coveo-checkbox-label disabled mt1">
                <input type="checkbox" className="coveo-checkbox" checked disabled />
                <button type="button" disabled />
                <span className="label">Checked Disabled</span>
            </label>
            <br />
            <label className="coveo-checkbox-label disabled mt1 js-prop-indeterminate">
                <input type="checkbox" className="coveo-checkbox" disabled />
                <button type="button" disabled />
                <span className="label">Indeterminate Disabled</span>
            </label>
            <br />
            <label className="coveo-checkbox-label mt1">
                <span className="label">Label before</span>
                <input type="checkbox" className="coveo-checkbox" />
                <button type="button" />
            </label>

            <p className="mt1">The checkbox can also be used without the coveo-checkbox-label label.</p>
            <input type="checkbox" className="coveo-checkbox" />
            <button type="button" className="mt1" />

            <div id="other-validation" className="form-group mt4">
                <label className="form-control-label">Validation on checkbox</label>
                <div className="input-field form-group validate">
                    <div className="validate input-field">
                        <div className="input input-wrapper invalid">
                            <div className="multi-select mod-inline">
                                <div className="multi-select-option">
                                    <label className="coveo-checkbox-label mt1">
                                        <input type="checkbox" className="coveo-checkbox" />
                                        <button type="button" />
                                        <span className="label">One option</span>
                                    </label>
                                </div>
                                <div className="multi-select-option">
                                    <label className="coveo-checkbox-label mt1">
                                        <input type="checkbox" className="coveo-checkbox" />
                                        <button type="button" />
                                        <span className="label">Another option</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <label data-invalid-message="Uh! Oh!" />
                    </div>
                </div>
            </div>
        </>
    );
}
