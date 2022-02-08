import * as React from 'react';
import {Button, ColorPicker, InputSelectors} from '@coveord/plasma-react';
import {debounce} from 'underscore';

import {Store} from '../../Store';
import PlasmaComponent from '../../building-blocs/PlasmaComponent';

const logColorPicked = debounce((colorPicked: any) => {
    // eslint-disable-next-line no-console
    console.log(colorPicked);
}, 500);

// start-print

export const ColorPickerExamples = () => (
    <PlasmaComponent
        id="ColorPicker"
        title="Color Picker"
        usage="A color picker is a visual interface that allows users to select a color."
        withSource
    >
        <div className="mt2">
            <h2 className="mb2">
                Built using <a href="https://github.com/casesandberg/react-color/">React Color</a>
            </h2>
            <div className="form-group">
                <label className="form-control-label">Basic ColorPicker</label>
                <div className="flex">
                    <ColorPicker id="color-picker-example-1" defaultColor="#F37231" onChangeComplete={logColorPicked} />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">ColorPicker with different picker styling, hiding controls</label>
                <div className="flex">
                    <ColorPicker id="color-picker-example-2" styles={{default: {controls: {display: 'none'}}}} />
                </div>
            </div>

            <div className="form-group">
                <label className="form-control-label">
                    ColorPickerConnected with color as hex available from state
                </label>
                <div className="flex">
                    <ColorPicker id="color-picker-example-3" defaultColor="#47FF21" />
                    <Button
                        className="btn mod-primary ml2"
                        name="Click me to get color from state"
                        onClick={() =>
                            alert(
                                InputSelectors.getValue(Store.getState(), {
                                    id: 'color-picker-example-3',
                                })
                            )
                        }
                    />
                </div>
            </div>
        </div>
    </PlasmaComponent>
);
