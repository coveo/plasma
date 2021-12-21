import * as React from 'react';
import {Section} from '@coveord/plasma-react';

import VaporComponent from '../../../../../demo-building-blocs/VaporComponent';

export const TextColor = () => (
    <VaporComponent id="TextColors" title="Text colors" usage="Change color for text." withSource>
        <Section>
            <div className="text">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</div>
            <div className="text mod-emphasized">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</div>
            <div className="text mod-disabled">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</div>
            <div className="text mod-success">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</div>
            <div className="text mod-error">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</div>
            <div className="text mod-major">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</div>
            <div className="text mod-warning">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</div>
            <div className="text mod-info">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</div>
            <div className="text mod-link">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</div>
            <div className="text mod-white py1" style={{backgroundColor: '#8e959d'}}>
                AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
            </div>
        </Section>
    </VaporComponent>
);
