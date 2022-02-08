import * as React from 'react';

import PlasmaComponent from '../../building-blocs/PlasmaComponent';

// start-print

export class ToastContentExample extends React.Component {
    render() {
        return (
            <PlasmaComponent id="ToastContent" title="Toast Content" withSource>
                <ul>
                    <li style={{marginBottom: '5px'}}>
                        <a href="#">Some Link</a>
                    </li>
                    <li>Complex React Component</li>
                </ul>
            </PlasmaComponent>
        );
    }
}
