import {loremIpsum} from 'lorem-ipsum';
import * as React from 'react';
import {SplitLayout, StepProgressBar} from '@coveord/plasma-react';
import {range} from 'underscore';

import PlasmaComponent from '../../building-blocs/PlasmaComponent';

const exampleTextLeft = `I am a left child. ${loremIpsum({count: 5, sentenceUpperBound: 15})}`;
const exampleTextRight = `I am a right child. ${loremIpsum({count: 5, sentenceUpperBound: 15})}`;

// start-print
export const SplitLayoutExamples = () => (
    <PlasmaComponent
        id="SplitLayout"
        title="Split Layout"
        usage="A split layout organizes information in two vertical columns."
        withSource
    >
        <div className="mt2">
            <div className="form-group">
                <label className="form-control-label">SplitLayout with one JSX.Element on each side</label>
                <div className="form-control">
                    <SplitLayout
                        leftChildren={<div className="p1">{exampleTextLeft}</div>}
                        rightChildren={<div className="p1">{exampleTextRight}</div>}
                    />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">SplitLayout with multiple JSX.Elements on each side</label>
                <div className="form-control">
                    <SplitLayout
                        leftChildren={range(2).map((i) => (
                            <div key={i} className="p1">
                                {exampleTextLeft}
                            </div>
                        ))}
                        rightChildren={[
                            <div key="div" className="p1">
                                Something is loading:
                            </div>,
                            <StepProgressBar key="progress" className="p1" numberOfSteps={10} currentStep={5} />,
                        ]}
                    />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">SplitLayout with classes on container</label>
                <div className="form-control">
                    <SplitLayout
                        leftChildren={<div className="p1">{exampleTextLeft}</div>}
                        rightChildren={<div className="p1">{exampleTextRight}</div>}
                        className="bold"
                    />
                </div>
            </div>
            <div className="form-group">
                <label className="form-control-label">
                    SplitLayout with classes on left and right children container
                </label>
                <div className="form-control">
                    <div className="form-control">
                        <SplitLayout
                            leftChildren={range(2).map((i) => (
                                <div key={i} className="p1">
                                    {exampleTextLeft}
                                </div>
                            ))}
                            rightChildren={range(2).map((i) => (
                                <div key={i} className="p1">
                                    {exampleTextRight}
                                </div>
                            ))}
                            leftContainerClassName="bold"
                            rightContainerClassName="italic"
                        />
                    </div>
                </div>
            </div>
        </div>
    </PlasmaComponent>
);
// stop-print
export default SplitLayoutExamples;
