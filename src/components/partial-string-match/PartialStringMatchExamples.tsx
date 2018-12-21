import * as React from 'react';
import {InfoBox} from '../infoBox/InfoBox';
import {InfoBoxLink} from '../infoBox/InfoBoxLink';
import {PartialStringMatch} from './PartialStringMatch';

export class PartialStringMatchExamples extends React.Component<any, any> {
    render() {
        return (
            <div className='mt2'>
                <h1 className='text-blue mb1 bold'>PartialStringMatch List</h1>
                <div className='form-group'>
                    <label className='form-control-label'>PartialStringMatch without match</label>
                    <div className='text-dark-grey'>
                        <PartialStringMatch wholeString='I do not have a match' partialMatch='I do not match' />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>PartialStringMatch with partial match undefined</label>
                    <div className='text-dark-grey'>
                        <PartialStringMatch wholeString='I do not have a match because partialMatch was not passed as prop' />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>PartialStringMatch with partial match</label>
                    <div className='text-dark-grey'>
                        <PartialStringMatch wholeString='I match at the beginning' partialMatch='I match at the' />
                    </div>
                    <div className='text-dark-grey'>
                        <PartialStringMatch wholeString='I match at the end' partialMatch='the end' />
                    </div>
                    <div className='text-dark-grey'>
                        <PartialStringMatch wholeString='I match in the middle' partialMatch='in the' />
                    </div>
                    <div className='text-dark-grey'>
                        <PartialStringMatch wholeString='I match multiple times because I match multiple substrings' partialMatch='match multiple' />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>PartialStringMatch with partial match (caseInsensitive)</label>
                    <div className='text-dark-grey'>
                        <PartialStringMatch wholeString='I match even if my partial match is in uppercase' partialMatch={'partial match'.toUpperCase()} caseInsensitive />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>PartialStringMatch with dangerous match</label>
                    <div className='text-dark-grey'>
                        <PartialStringMatch wholeString='Hey <script>alert("I may be dangerous")</script>' partialMatch={'<script>alert("I may be dangerous")</script>'} />
                    </div>
                </div>

                <div className='form-group'>
                    <label className='form-control-label'>PartialStringMatch with children</label>
                    <div className='text-dark-grey'>
                        <PartialStringMatch wholeString={<><div>Hello</div><br /><div>World</div></>} partialMatch={'o'} />
                        <PartialStringMatch caseInsensitive partialMatch={'hello'} wholeString={(
                            <div className='py2'>
                                <div className='my2'>Hello <span>is this working with deep structure? <span>(hello, still reading?)</span></span></div>
                                <InfoBox>What about custom components? <InfoBoxLink>Can they contain hello?</InfoBoxLink></InfoBox>
                            </div>
                        )} />
                    </div>
                </div>
            </div>
        );
    }
}
