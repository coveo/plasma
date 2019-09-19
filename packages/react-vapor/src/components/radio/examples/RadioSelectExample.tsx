import * as React from 'react';
import {Label} from '../../input/Label';
import {Radio} from '../Radio';
import {IRadioSelectProps, RadioSelect} from '../RadioSelect';

export interface IRadioSelectExampleProps extends IRadioSelectProps {
    defaultValue?: string;
}

export interface IRadioSelectExampleState {
    value: string;
}

export class RadioSelectExample extends React.Component<IRadioSelectExampleProps, IRadioSelectExampleState> {
    constructor(props: IRadioSelectExampleProps, state: IRadioSelectExampleState) {
        super(props, state);
        this.state = {
            value: this.props.defaultValue,
        };
    }

    private handleChange(value: string) {
        this.setState({
            value,
        });
    }

    render() {
        return (
            <div className="form-group">
                <label className="form-control-label">A Radio Select</label>
                <RadioSelect
                    value={this.state.value}
                    onChange={(value) => this.handleChange(value)}
                    disabled={this.props.disabled}
                >
                    <Radio id="Option1" name="enabledOptions" value="blue">
                        <Label>Blue</Label>
                        <div className="mod-align-with-radio-label text-lynch mt1">
                            It is a color that symbolizes loyalty, strength, wisdom and trust.
                        </div>
                    </Radio>
                    <Radio id="Option2" name="enabledOptions" value="green">
                        <Label>Green</Label>
                        <div className="mod-align-with-radio-label text-lynch mt1">
                            The color of life, renewal, nature, and energy.
                        </div>
                    </Radio>
                </RadioSelect>
            </div>
        );
    }
}
