import * as React from 'react';
import {Button} from '../../button/Button';
import {Svg} from '../../svg/Svg';
import {FilterBox} from '../FilterBox';

export class FilterBoxExamples extends React.Component<any, any> {

    render() {
        return (
            <div className='mt2' style={{width: 400}}>
                <div className='form-group'>
                    <label className='form-control-label'>Filter box</label>
                    <FilterBox id='FilterBoxExampleComponent' />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Filter box with custom placeholder</label>
                    <FilterBox id='FilterBoxExampleComponentWithPlaceholder' filterPlaceholder='Filter through results' />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Filter box with max width</label>
                    <FilterBox id='FilterBoxExampleComponentWithMaxWidth' filterPlaceholder='Filter' maxWidth={160} />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Filter box with title reflecting the input value</label>
                    <FilterBox id='FilterBoxExampleComponentWithTitle' filterPlaceholder='Filter' withTitleOnInput />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Filter box with truncate</label>
                    <FilterBox id='FilterBoxExampleComponentWithTruncate' filterPlaceholder='Long filter placeholder' truncate />
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>Filter box with children</label>
                    <FilterBox id='FilterBoxExampleComponentWithChildren' className={'flex flex-center'} filterPlaceholder='Filter'>
                        <Button classes={['p1', 'ml1']} enabled>
                            <Svg svgName={'add'} className='icon mod-lg mod-align-with-text' />
                        </Button>
                    </FilterBox>
                </div>
            </div>
        );
    }
}
