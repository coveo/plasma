import React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
// import {HashRouter} from 'react-router-dom';
import * as PlasmaReact from '@coveord/plasma-react';

// import {App} from './OneDemoToRuleThemAll';
// import {Store} from './Store';

PlasmaReact.Defaults.APP_ELEMENT = '#App';
PlasmaReact.Defaults.MODAL_ROOT = '#Modals';
PlasmaReact.Defaults.DROP_ROOT = '#Drops';

window.React = React;
window.ReactDOM = ReactDOM;
(window as any).ReactRedux = ReactRedux;
(window as any).PlasmaReact = PlasmaReact;

if (window.location.host === 'vapor.coveo.com') {
    window.location.href = window.location.href.replace('vapor.coveo.com', 'plasma.coveo.com');
}

// ReactDOM.render(
//     <HashRouter>
//         <ReactRedux.Provider store={Store}>
//             <App />
//         </ReactRedux.Provider>
//     </HashRouter>,
//     document.getElementById('App')
// );
