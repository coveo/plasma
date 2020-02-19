import {loremIpsum} from 'lorem-ipsum';
import * as React from 'react';
import {Button, PopoverConnected, SplitLayout} from 'react-vapor';

import {ExampleComponent} from '../ComponentsInterface';

const leftContent = (
    <div>
        <h2 className="h2">Popover Title Lorem</h2>
        <p className="h3 pt2 pb2">I am popping under the button. {loremIpsum({count: 5, sentenceUpperBound: 15})}</p>
    </div>
);
const rightContent = (
    <div
        className="video"
        style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
        }}
    >
        <iframe
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
            }}
            src={'https://www.youtube.com/embed/kmUTQMpi4BI'}
            frameBorder="0"
        />
    </div>
);

const PopoverConnectedExamples = () => (
    <div className="mb5">
        <div className="mt2 mb3">
            <PopoverConnected
                id="popover-connected-example1"
                attachment="top left"
                targetAttachment="bottom left"
                className="mod-width-70"
            >
                <div className="btn inline-block">Click to toggle the popover</div>
                <div className="coveo-child pb5">
                    <SplitLayout
                        className="pb4"
                        leftChildren={<div className="m2">{leftContent}</div>}
                        rightChildren={<div className="m2">{rightContent}</div>}
                    />
                    <div
                        className="modal-footer mod-small bg-pure-white"
                        style={{
                            position: 'absolute',
                            marginLeft: '-20px',
                            width: '100%',
                            bottom: 0,
                        }}
                    >
                        <Button enabled={true} small={true} name="Action Lorem" />
                    </div>
                </div>
            </PopoverConnected>
        </div>
        <div className="display-block w100 mb5">
            <p className="h3 mb2">{loremIpsum({count: 5, sentenceUpperBound: 15})}</p>
            <p className="h3 mb2">{loremIpsum({count: 5, sentenceUpperBound: 15})}</p>
        </div>
    </div>
);

export const PopoverExample: ExampleComponent = PopoverConnectedExamples;
PopoverConnectedExamples.description =
    'Popovers provide additional details or interactions. They are visually attached to interactive elements and support various contents and layouts.';
