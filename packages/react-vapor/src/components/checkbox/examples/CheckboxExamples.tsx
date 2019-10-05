import * as React from 'react';
import {Label} from '../../input/Label';
import {Checkbox} from '../Checkbox';

export interface ICheckboxWithStateState {
    checked?: boolean;
}

export class CheckboxExamples extends React.Component<any, ICheckboxWithStateState> {
    static description = 'Checkboxes allow users to select multiple options from a set.';

    constructor(props: any, state: ICheckboxWithStateState) {
        super(props, state);
        this.state = {
            checked: false,
        };
    }

    private handleClick() {
        if (!this.props.disabled) {
            this.setState({
                checked: !this.state.checked,
            });
        }
    }

    render() {
        return (
            <div>
                <p className="pb2">
                    See{' '}
                    <a href="http://coveo.github.io/vapor/controls/#checkboxes-infos" target="_blank">
                        Usage and guidelines
                    </a>
                </p>
                <div className="form-group">
                    <label className="form-control-label">Checkbox set</label>
                    <br />
                    <Checkbox>
                        <Label classes={['label']}>An unchecked checkbox</Label>
                    </Checkbox>
                    <br />
                    <Checkbox classes={['mt1']} checked={true}>
                        <Label classes={['label']}>A checked checkbox</Label>
                    </Checkbox>
                    <br />
                    <Checkbox classes={['mt1']} disabled={true}>
                        <Label classes={['label']}>A disabled checkbox</Label>
                    </Checkbox>
                    <br />
                    <Checkbox classes={['mt1']} checked={true} disabled={true}>
                        <Label classes={['label']}>A checked and disabled checkbox</Label>
                    </Checkbox>
                    <br />
                    <Checkbox classes={['mt1']} indeterminate={true}>
                        <Label classes={['label']}>A checked and indeterminate (partially selected) checkbox</Label>
                    </Checkbox>
                    <br />
                    <Checkbox classes={['mt1']} checked={this.state.checked} onClick={() => this.handleClick()}>
                        <Label classes={['label']}>A checkbox with state</Label>
                    </Checkbox>
                </div>
                <div className="form-group">
                    <label className="form-control-label">A checkbox with no label</label>
                    <br />
                    <Checkbox />
                </div>
            </div>
        );
    }
}
