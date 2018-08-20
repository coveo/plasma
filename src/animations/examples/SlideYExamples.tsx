import * as loremIpsum from 'lorem-ipsum';
import * as React from 'react';
import {Button} from '../../components/button/Button';
import {SlideY} from '../SlideY';

interface SlideYExamplesState {
    first: boolean;
    second: boolean;
}

export class SlideYExamples extends React.PureComponent<any, SlideYExamplesState> {

    constructor(props: any, state: SlideYExamplesState) {
        super(props, state);

        this.state = {
            first: false,
            second: false,
        };
    }

    render() {
        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>Basic SlideY animation</label>
                    <div className='form-control'>
                        <Button name='Toggle' onClick={() => this.setState({...this.state, first: !this.state.first})} enabled></Button>
                        <SlideY in={this.state.first} timeout={500}>
                            <div>{loremIpsum({count: 20})}</div>
                        </SlideY>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Very slow SlideY animation</label>
                    <div className='form-control'>
                        <Button name='Toggle' onClick={() => this.setState({...this.state, second: !this.state.second})} enabled></Button>
                        <SlideY in={this.state.second} timeout={500} duration={5000}>
                            <div>{loremIpsum({count: 20})}</div>
                        </SlideY>
                    </div>
                </div>
            </div>
        );
    }
}
