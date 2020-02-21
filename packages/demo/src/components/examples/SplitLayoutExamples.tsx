import {loremIpsum} from 'lorem-ipsum';
import * as React from 'react';
import {SplitLayout, StepProgressBar} from 'react-vapor';
import {range} from 'underscore';

const exampleTextLeft = `I am a left child. ${loremIpsum({count: 5, sentenceUpperBound: 15})}`;
const exampleTextRight = `I am a right child. ${loremIpsum({count: 5, sentenceUpperBound: 15})}`;

export const SplitLayoutExamples = () => (
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
                    className="text-medium-blue bold"
                />
            </div>
        </div>
        <div className="form-group">
            <label className="form-control-label">SplitLayout with classes on left and right children container</label>
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
                        leftContainerClassName="text-medium-blue bold"
                        rightContainerClassName="text-orange italic"
                    />
                </div>
            </div>
        </div>
    </div>
);
