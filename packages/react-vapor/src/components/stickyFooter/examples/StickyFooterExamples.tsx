import * as loremIpsum from 'lorem-ipsum';
import * as React from 'react';
import {Button} from '../../button/Button';
import {StickyFooter} from '../../stickyFooter/StickyFooter';

const lorem = loremIpsum({count: 200});

export class StickyFooterExamples extends React.Component<{}, {isOpened: boolean}> {
    constructor(props: {}, state: {isOpened: boolean}) {
        super(props, state);

        this.state = {
            isOpened: false,
        };
    }

    render() {
        return (
            <div className='mt2'>
                <Button name='toggle footer' onClick={() => this.setState({isOpened: !this.state.isOpened})} />
                <div className='mt2'>{lorem}</div>
                <StickyFooter className='sticky-footer-mod-header' isOpened={this.state.isOpened} >
                    <Button primary name='Save' />
                </StickyFooter>
            </div>
        );
    }
}
