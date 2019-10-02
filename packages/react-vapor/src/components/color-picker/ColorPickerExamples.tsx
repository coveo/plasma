import * as React from 'react';
import {ColorResult} from 'react-color';
import {debounce} from 'underscore';
import {ReactVaporStore} from '../../../docs/ReactVaporStore';
import {Button} from '../button/Button';
import {InputSelectors} from '../input/InputSelectors';
import {ColorPicker} from './ColorPicker';

const logColorPicked = debounce((colorPicked: ColorResult) => {
    // tslint:disable-next-line
    console.log(colorPicked);
}, 500);

export const ColorPickerExamples = () => (
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
            <label className="form-control-label">ColorPickerConnected with color as hex available from state</label>
            <div className="flex">
                <ColorPicker id="color-picker-example-3" defaultColor="#47FF21" />
                <Button
                    className="btn mod-primary ml2"
                    name="Click me to get color from state"
                    onClick={() =>
                        alert(
                            InputSelectors.getValue(ReactVaporStore.getState(), {
                                id: 'color-picker-example-3',
                            })
                        )
                    }
                />
            </div>
        </div>
    </div>
);
