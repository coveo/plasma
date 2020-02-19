import {useState} from 'react';
import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export const Tab = () => {
    const [active, setActive] = useState(1);
    return (
        <VaporComponent key="tabs" id="tabs" title="Tabs" withSource>
            <div className="tab-navigation">
                <div id="tab1" className={`tab enabled ${active === 1 ? 'active' : ''}`} onClick={() => setActive(1)}>
                    Tab 1
                </div>
                <div id="tab2" className={`tab enabled ${active === 2 ? 'active' : ''}`} onClick={() => setActive(2)}>
                    Tab 2
                </div>
            </div>
            <div className="tab-content">
                <div data-tab="tab1" className={`tab-pane ${active === 1 ? 'active' : ''}`}>
                    <div className="mod-header-padding mod-form-top-bottom-padding">Content of Tab 1</div>
                </div>
                <div data-tab="tab2" className={`tab-pane ${active === 2 ? 'active' : ''}`}>
                    <div className="mod-header-padding mod-form-top-bottom-padding">Content of Tab 2</div>
                </div>
            </div>
        </VaporComponent>
    );
};

export default Tab;
