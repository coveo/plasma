import * as VaporSVG from 'coveo-styleguide';
import Svg from '../Svg';

export const TextInput = () => (
    <div className="coveo-form">
        <div className="input-field form-group">
            <input type="text" defaultValue="My valid value" required placeholder="Placeholder text" />
            <label>Enabled valid input</label>
        </div>

        <div className="input-field form-group">
            <input type="text" required placeholder="Placeholder text" />
            <label>
                Enabled invalid input
                <span className="inline-help-tooltip" title="A simple inline help text." data-placement="right">
                    <Svg name={VaporSVG.svg.info.name} className="inline-help-icon" />
                </span>
            </label>
        </div>

        <div className="input-field form-group">
            <input type="text" defaultValue="My valid value" required disabled />
            <label>Disabled valid input</label>
        </div>

        <div className="input-field form-group">
            <input type="text" required disabled />
            <label>Disabled invalid input</label>
        </div>

        <div className="input-field form-group validate">
            <input className="valid" type="text" defaultValue="test@test.test" required />
            <label data-valid-message="You dit it right!" data-invalid-message="How is this possible?!?">
                Valid input
            </label>
        </div>

        <div className="input-field form-group validate">
            <input className="invalid" type="text" defaultValue="not valid" required />
            <label data-valid-message="You dit it right!" data-invalid-message="How is this possible?!?">
                Invalid input
            </label>
        </div>

        <div className="input-field form-group validate">
            <input className="js-validated-input" type="email" required />
            <label data-valid-message="You dit it right!" data-invalid-message="Value must be a valid email address.">
                Validated email
            </label>
        </div>

        <div id="textarea1" className="input-field form-group js-autosized">
            <textarea required />
            <label htmlhtmlFor="textarea1">Textarea empty</label>
        </div>

        <div id="textarea2" className="input-field form-group mod-resizeable">
            <textarea placeholder="Placeholder text" required />
            <label htmlFor="textarea2">Resizable textarea</label>
        </div>

        <div id="textarea3" className="input-field form-group js-autosized">
            <textarea
                required
                defaultValue="Lorem ipsum dolor sit amet, interdum est eu. A tellus condimentum hendrerit enim, ligula fusce vitae, leo et fusce mauris lorem suscipit scelerisque. Vel arcu, non vestibulum suspendisse non lectus magnis suspendisse, aliquam magna commodo. Nascetur eleifend at faucibus faucibus, nulla fringilla, mauris ultrices posuere in, ut dolor cras rhoncus."
            />
            <label htmlFor="textarea3">Autosized textarea using the autosize library</label>
        </div>

        <div id="textarea4" className="input-field form-group validate mod-resizeable">
            <textarea
                className="invalid"
                placeholder="Placeholder text"
                required
                defaultValue="Lorem ipsum dolor sit amet, interdum est eu."
            />
            <label htmlFor="textarea4">Invalid textarea</label>
            <span className="generic-form-error">Error message goes here!</span>
        </div>

        <div className="input-field form-group">
            <h4 className="text-medium-blue">Simple description typography</h4>
            <p className="description">
                Lorem ipsum dolor sit amet, interdum est eu. A tellus condimentum hendrerit enim, ligula fusce vitae,
                leo et fusce mauris lorem suscipit scelerisque. Vel arcu, non vestibulum suspendisse non lectus magnis
                suspendisse, aliquam magna commodo. Nascetur eleifend at faucibus faucibus, nulla fringilla, mauris
                ultrices posuere in, ut dolor cras rhoncus.
            </p>
        </div>
    </div>
);
export default TextInput;
