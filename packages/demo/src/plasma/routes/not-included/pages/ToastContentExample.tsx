import * as React from 'react';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';
export class ToastContentExample extends React.Component {
    render() {
        return (
            <VaporComponent id="toast-content" title="Toast Content" usage="">
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
