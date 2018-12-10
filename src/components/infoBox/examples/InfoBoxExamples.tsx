import * as React from 'react';
import {CollapsibleConnected} from '../../collapsible/CollapsibleConnected';
import {InfoBox} from '../InfoBox';
import {InfoBoxFooter} from '../InfoBoxFooter';
import {InfoBoxLink} from '../InfoBoxLink';

export class InfoBoxExamples extends React.PureComponent {
    render() {
        return (
            <div className='mt2'>
                <h1 className='text-blue mb1 bold'>Info Box</h1>

                <div className='form-group'>
                    <label className='form-control-label'>Empty InfoBox</label>
                    <InfoBox />
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>InfoBox</label>
                    <InfoBox>Some information about the current component.</InfoBox>
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>Collapsible InfoBox</label>
                    <InfoBox className='py0'>
                        <CollapsibleConnected
                            headerClasses='py2'
                            id='info-box-collapsible'
                            headerContent={<p className='bold'>Collapsible header</p>}
                            expandedOnMount
                        >
                            <div className='pb2'>
                                <p>Some information about the current component.</p>
                                <p className='mt2'>Or some other piece of information</p>
                            </div>
                        </CollapsibleConnected>
                    </InfoBox>
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>InfoBox with a link in the footer</label>
                    <InfoBox>
                        Some information about the current component.
                        <InfoBoxFooter>
                            <InfoBoxLink>More information about the current component</InfoBoxLink>
                        </InfoBoxFooter>
                    </InfoBox>
                </div>
            </div>
        );
    }
}
