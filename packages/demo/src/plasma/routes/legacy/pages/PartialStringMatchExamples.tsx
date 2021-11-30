import * as React from 'react';
import {Provider} from 'react-redux';
import {CheckboxConnected, InfoBox, InfoBoxLink, Label, Loading, PartialStringMatch} from 'react-vapor';

import {Store} from '../../../../Store';
import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

// start-print

export class PartialStringMatchExamples extends React.Component<any, any> {
    render() {
        return (
            <VaporComponent id="partial-string-match" title="Partial String Match" withSource>
                <div className="mt2">
                    <div className="form-group">
                        <label className="form-control-label">PartialStringMatch without match</label>
                        <div>
                            <PartialStringMatch partialMatch="I do not match">I do not have a match</PartialStringMatch>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">PartialStringMatch with partial match undefined</label>
                        <div>
                            <PartialStringMatch>
                                I do not have a match because partialMatch was not passed as prop
                            </PartialStringMatch>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">PartialStringMatch with partial match</label>
                        <div>
                            <PartialStringMatch partialMatch="I match at the">
                                I match at the beginning
                            </PartialStringMatch>
                        </div>
                        <div>
                            <PartialStringMatch partialMatch="the end">I match at the end</PartialStringMatch>
                        </div>
                        <div>
                            <PartialStringMatch partialMatch="in the">I match in the middle</PartialStringMatch>
                        </div>
                        <div>
                            <PartialStringMatch partialMatch="match multiple">
                                I match multiple times because I match multiple substrings
                            </PartialStringMatch>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">
                            PartialStringMatch with partial match (caseInsensitive)
                        </label>
                        <div>
                            <PartialStringMatch partialMatch={'partial match'.toUpperCase()} caseInsensitive>
                                I match even if my partial match is in uppercase
                            </PartialStringMatch>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">PartialStringMatch with dangerous match</label>
                        <div>
                            <PartialStringMatch
                                wholeString='Hey <script>alert("I may be dangerous")</script>'
                                partialMatch={'<script>alert("I may be dangerous")</script>'}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-control-label">PartialStringMatch with children</label>
                        <div>
                            <PartialStringMatch key="a" partialMatch="o">
                                <div>Hello</div>
                                <br />
                                <div>World</div>
                            </PartialStringMatch>
                            <PartialStringMatch key="b" caseInsensitive partialMatch={'hello'}>
                                <Provider store={Store}>
                                    <div className="py2">
                                        <div className="my2">
                                            Hello{' '}
                                            <span>
                                                is this working with deep structure?{' '}
                                                <span>(hello, still reading?)</span>
                                            </span>
                                        </div>
                                        <Loading />
                                        <InfoBox>
                                            What about custom components?{' '}
                                            <InfoBoxLink>Can they contain hello?</InfoBoxLink>
                                            <div>
                                                <CheckboxConnected label="boom">
                                                    <Label>Hello connected components too</Label>
                                                </CheckboxConnected>
                                            </div>
                                        </InfoBox>
                                    </div>
                                </Provider>
                            </PartialStringMatch>
                        </div>
                    </div>
                </div>
            </VaporComponent>
        );
    }
}
