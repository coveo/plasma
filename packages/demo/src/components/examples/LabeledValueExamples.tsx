import * as React from 'react';
import {LabeledValue, TooltipPlacement} from 'react-vapor';

export const LabeledValueExamples = () => (
    <div className="mt2">
        <div className="form-group">
            <label className="form-control-label">Two Simple Labeled Values</label>
            <LabeledValue label="First label" value="first value" />
            <LabeledValue label="Second label" value="second value" />
        </div>
        <div className="form-group">
            <label className="form-control-label">Two Simple Labeled Values inside a flexbox</label>
            <div className="flex flex-start">
                <LabeledValue label="First label" value="first value" />
                <LabeledValue label="Second label" value="second value" />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">Labeled Values inside a flexbox with one value full row</label>
            <div className="flex flex-wrap">
                <LabeledValue label="First label (full row)" value="first value" fullRow />
                <LabeledValue label="Second label" value="second value" />
                <LabeledValue label="Third label" value="third value" />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">Labeled Values "columnised" (3 X 3)</label>
            <div className="columns">
                <LabeledValue label="First label" value="first value" />
                <LabeledValue label="Second label" value="second value" />
                <LabeledValue label="Third label" value="third value" />
                <LabeledValue label="Fourth label" value="fourth value" />
                <LabeledValue label="Fifth label" value="fifth value" />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">Labeled Value with information</label>
            <LabeledValue label="Label" value="value" information={'Some valuable informations go here.'} />
        </div>
        <div className="form-group">
            <label className="form-control-label">Labeled Value with custom information placement</label>
            <LabeledValue
                label="Label"
                value="value"
                information={'Some valuable informations go here.'}
                informationPlacement={TooltipPlacement.Bottom}
            />
        </div>
        <div className="form-group">
            <label className="form-control-label">Labeled Value rendered on a single line</label>
            <LabeledValue label="Label" value="value" singleLine={true} />
        </div>
        <div className="form-group">
            <label className="form-control-label">Labeled Value with JSX.Element as value</label>
            <LabeledValue
                label="Label"
                value={
                    <span>
                        <span className="bold">a list of values:</span>
                        <ul>
                            <li>value 1</li>
                            <li>value 2</li>
                            <li>value 3</li>
                        </ul>
                    </span>
                }
            />
        </div>
    </div>
);
