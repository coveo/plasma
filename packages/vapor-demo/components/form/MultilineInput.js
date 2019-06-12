export default function MultilineInput() {
    return (
        <div className="coveo-form">
            <div className="input-field multiline-field form-group">
                <ul/>
                <div className="input-wrapper">
                    <input type="text" className="js-new-value-input" placeholder="Placeholder text" required />
                        <label className="first-label">Multiline empty</label>
                        <div className="input-actions">
                            <button className="js-add-value-button">
                                <i className="add-action" title="Add a new entry"/>
                            </button>
                        </div>
                </div>
            </div>

            <div className="input-field multiline-field form-group">
                <ul>
                    <li className="input-wrapper">
                        <input type="text" className="js-value-input" value="First multiline value" required />
                            <label>Multiline one value entered</label>
                            <div className="input-actions">
                                <button className="js-delete-value-button" type="button">
                                    <i className="delete-action" title="Delete this entry"/>
                                </button>
                            </div>
                    </li>
                    <li className="input-wrapper">
                        <input type="text" className="js-value-input" value="Second multiline value" required />
                            <label>Multiline one value entered</label>
                            <div className="input-actions">
                                <button className="js-delete-value-button" type="button">
                                    <i className="delete-action " title="Delete this entry"/>
                                </button>
                            </div>
                    </li>
                </ul>
                <div className="input-wrapper">
                    <input type="text" className="js-new-value-input" placeholder="" required />
                        <div className="input-actions">
                            <button className="js-add-value-button">
                                <i className="add-action" title="Add a new entry"/>
                            </button>
                        </div>
                </div>
            </div>

            <div className="input-field multiline-field form-group">
                <ul>
                    <li className="input-wrapper">
                        <input type="text" className="" required value="First multiline value" />
                            <label>Multiline one value entered</label>
                            <div className="input-actions">
                                <button className="js-delete-value-button" type="button">
                                    <i className="delete-action" title="Delete this entry" />
                                </button>
                            </div>
                    </li>
                    <li className="input-wrapper validate">
                        <input type="text" className="valid" placeholder="" value="Multiline successful" required />
                            <label data-valid-message="You dit it right!" data-invalid-message="How is this possible?!?" />
                            <div className="input-actions">
                                <button className="js-delete-value-button">
                                    <i className="delete-action" title="Add a new entry"/>
                                </button>
                            </div>
                    </li>
                </ul>
                <div className="input-wrapper validate">
                    <input type="text" placeholder="Placeholder text" required />
                        <label data-valid-message="You dit it right!" data-invalid-message="Value must be a valid email address." />
                        <div className="input-actions">
                            <button className="js-add-value-button">
                                <i className="add-action" title="Add a new entry" />
                            </button>
                        </div>
                </div>
            </div>

            <div className="input-field multiline-field form-group">
                <div className="multiline-field-fields">
                    <ul>
                        <li className="input-wrapper validate">
                            <input type="text" className="invalid" value="Multiline error 1" required />
                                <label data-valid-message="You dit it right!" data-invalid-message="How is this possible?!?">Multiline one
                                    value
                                    entered</label>
                                <div className="input-actions">
                                    <button className="js-delete-value-button" type="button">
                                        <i className="delete-action" title="Delete this entry" />
                                    </button>
                                </div>
                        </li>
                        <li className="input-wrapper validate">
                            <input type="text" className="invalid" value="Multiline error 2" required />
                                <label data-valid-message="You dit it right!" data-invalid-message="How is this possible?!?">Multiline one
                                    value
                                    entered</label>
                                <div className="input-actions">
                                    <button className="js-delete-value-button" type="button">
                                        <i className="delete-action" title="Delete this entry" />
                                    </button>
                                </div>
                        </li>
                    </ul>
                    <div className="input-wrapper validate">
                        <input type="text" placeholder="" required />
                            <label data-valid-message="You dit it right!" data-invalid-message="How is this possible?!?">Multiline one value
                                entered</label>
                            <div className="input-actions">
                                <button className="js-add-value-button">
                                    <i className="add-action" title="Add a new entry" />
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
