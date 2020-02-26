import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

const Wizard = () => (
    <VaporComponent key="wizard" id="wizard" title="Wizard" usage="Use it with configuration wizards" withSource>
        <div className="spaced-boxes-container flex flex-wrap">
            <div className="wizard-card spaced-box mod-small">
                <header className="header flex center-align">
                    <div className="header-section">
                        <h3 className="bold">Use a Coveo Organization</h3>
                    </div>
                </header>
                <div className="wizard-card-body">
                    <div className="coveo-form">
                        <div className="form-group left-align">
                            <h3>
                                Coveo Cloud has identified the following{' '}
                                <em className="bold text-medium-blue">Coveo organizations</em> related to your account.
                            </h3>
                        </div>
                        <div className="form-group input-field">
                            <input type="text" value="my org name" required disabled />
                            <label>Coveo organization</label>
                        </div>
                    </div>
                </div>
                <footer className="wizard-card-footer">
                    <button type="button" className="btn mod-primary mod-small">
                        Next
                    </button>
                </footer>
            </div>

            <div className="wizard-card spaced-box mod-small">
                <header className="header flex center-align">
                    <div className="header-section">
                        <h3 className="bold">Create a New Coveo Organization</h3>
                    </div>
                </header>
                <div className="wizard-card-body">
                    <div className="coveo-form">
                        <div className="form-group">
                            <div className="input-field validate">
                                <input type="text" value="A new org name" required />
                                <label>Organization name</label>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="wizard-card-footer">
                    <button type="button" className="btn mod-primary mod-small">
                        Create
                    </button>
                </footer>
            </div>
        </div>
    </VaporComponent>
);
export default Wizard;
