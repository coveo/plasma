import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export const FormGroups = () => (
    <VaporComponent id="groups" title="Groups" usage="Simple vertical form!" withSource>
        <div className="coveo-form">
            <fieldset className="form-group input-field">
                {/* fieldset tag is optional, you can use a simple div */}
                <input type="text" required />
                <label>Basic</label>
            </fieldset>
            <div className="form-group input-field">
                <input type="text" required placeholder="Placeholder text" />
                <label>With placeholder</label>
            </div>
            <div className="form-group input-field">
                <input type="text" required placeholder="Placeholder text" value="My value" />
                <label>With value</label>
            </div>
        </div>
    </VaporComponent>
);

export default FormGroups;
