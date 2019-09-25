import * as React from 'react';
import {ColorResult} from 'react-color';
import {Provider} from 'react-redux';
import {debounce} from 'underscore';
import {ReactVaporStore} from '../../../docs/ReactVaporStore';
import {Button} from '../button/Button';
import {InputSelectors} from '../input/InputSelectors';
import {ColorPicker, ColorPickerConnected} from './ColorPicker';

const logColorPicked = debounce((colorPicked: ColorResult) => {
    /* tslint:disable */
    console.log(colorPicked);
    /* tslint:enable */
}, 500);

export const ColorPickerExamples = () => (
    <div className="mt2">
        <h2 className="mb2">
            Built using <a href="https://github.com/casesandberg/react-color/">React Color</a>
        </h2>
        <div className="form-group">
            <label className="form-control-label">ColorPicker, console log color changes</label>
            <div className="flex">
                <ColorPicker color="#F37231" onChangeComplete={logColorPicked} />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">ColorPicker with different picker styling, hiding controls</label>
            <div className="flex">
                <ColorPicker styles={{default: {controls: {display: 'none'}}}} />
            </div>
        </div>

        <div className="form-group">
            <label className="form-control-label">ColorPickerConnected with color as hex available from state</label>
            <div className="flex">
                <Provider store={ReactVaporStore}>
                    <>
                        <ColorPickerConnected id="color-picker-connected-example" defaultColor="#47FF21" />
                        <Button
                            className="btn mod-primary ml2"
                            name="Click me to get color from state"
                            onClick={() =>
                                alert(
                                    InputSelectors.getValue(ReactVaporStore.getState(), {
                                        id: 'color-picker-connected-example',
                                    })
                                )
                            }
                        />
                    </>
                </Provider>
            </div>
        </div>
    </div>
);
