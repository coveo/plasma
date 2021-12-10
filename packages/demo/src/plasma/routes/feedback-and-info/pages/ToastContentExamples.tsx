import * as React from 'react';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

// start-print

export class ToastContentExample extends React.Component {
    render() {
        return (
            <VaporComponent id="ToastContent" title="Toast Content" withSource>
                <ul>
                    <li style={{marginBottom: '5px'}}>
                        <a href="#">Some Link</a>
                    </li>
                    <li>Complex React Component</li>
                </ul>
            </VaporComponent>
        );
    }
}
