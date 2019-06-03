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
                        <PartialStringMatch partialMatch='I do not match'>I do not have a match</PartialStringMatch>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>PartialStringMatch with partial match undefined</label>
                    <div className='text-dark-grey'>
                        <PartialStringMatch>I do not have a match because partialMatch was not passed as prop</PartialStringMatch>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>PartialStringMatch with partial match</label>
                    <div className='text-dark-grey'>
                        <PartialStringMatch partialMatch='I match at the'>I match at the beginning</PartialStringMatch>
                    </div>
                    <div className='text-dark-grey'>
                        <PartialStringMatch partialMatch='the end'>I match at the end</PartialStringMatch>
                    </div>
                    <div className='text-dark-grey'>
                        <PartialStringMatch partialMatch='in the'>I match in the middle</PartialStringMatch>
                    </div>
                    <div className='text-dark-grey'>
                        <PartialStringMatch partialMatch='match multiple'>I match multiple times because I match multiple substrings</PartialStringMatch>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>PartialStringMatch with partial match (caseInsensitive)</label>
                    <div className='text-dark-grey'>
                        <PartialStringMatch partialMatch={'partial match'.toUpperCase()} caseInsensitive>I match even if my partial match is in uppercase</PartialStringMatch>
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
                        <PartialStringMatch key='a' partialMatch='o'>
                            <div>Hello</div>
                            <br />
                            <div>World</div>
                        </PartialStringMatch>
                        <PartialStringMatch key='b' caseInsensitive partialMatch={'hello'}>
                            <div className='py2'>
                                <div className='my2'>Hello <span>is this working with deep structure? <span>(hello, still reading?)</span></span></div>
                                <InfoBox>What about custom components? <InfoBoxLink>Can they contain hello?</InfoBoxLink></InfoBox>
                            </div>
                        </PartialStringMatch>
                    </div>
                </div>
            </div>
        );
    }
}
