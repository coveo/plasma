import * as React from 'react';
import {Checkbox} from '../../checkbox/Checkbox';
import {Input} from '../../input/Input';
import {Label} from '../../input/Label';
import {ChildForm} from '../ChildForm';
import {ToggleForm} from '../ToggleForm';

export interface ISimpleChildFormExampleState {
    active: boolean;
}

export class SimpleChildFormExample extends React.Component<any, ISimpleChildFormExampleState> {
    constructor(props: any, state: ISimpleChildFormExampleState) {
        super(props, state);
        this.state = {
            active: false,
        };
    }

    handleChange() {
        this.setState({
            active: !this.state.active,
        });
    }

    render() {
        return (
            <>
                <div className='form-group'>
                    <label className='form-control-label'>A Child Form with a Checkbox</label>
                    <ToggleForm onClick={() => this.handleChange()} checked={this.state.active}>
                        <Checkbox>
                            <Label classes={['label']}>Edit properties</Label>
                        </Checkbox>
                        <ChildForm
                            disabled={!this.state.active}>
                            <Input
                                value='Some value'
                                classes={['input-field', 'form-group']}>
                                <Label>Child form input</Label>
                            </Input>
                        </ChildForm>
                    </ToggleForm>
                </div>
                <div className='form-group bg-medium-grey p2'>
                    <label className='form-control-label'>A Child Form background white with a Checkbox</label>
                    <ToggleForm onClick={() => this.handleChange()} checked={this.state.active}>
                        <Checkbox>
                            <Label classes={['label']}>Edit properties</Label>
                        </Checkbox>
                        <ChildForm
                            disabled={!this.state.active}
                            className='mod-pure-white'
                        >
                            <Input
                                value='Some value'
                                classes={['input-field', 'form-group']}>
                                <Label>Child form input</Label>
                            </Input>
                        </ChildForm>
                    </ToggleForm>
                </div>
            </>
        );
    }
}
