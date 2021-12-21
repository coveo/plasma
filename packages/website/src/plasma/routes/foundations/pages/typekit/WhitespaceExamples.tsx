import * as React from 'react';
import {Section} from '@coveord/plasma-react';

import VaporComponent from '../../../../../demo-building-blocs/VaporComponent';

export const Whitespace = () => (
    <VaporComponent id="Whitespaces" title="Whitespace" withSource>
        <Section level={2} title="Paddings" description="Give custom padding to your element">
            <div className="p2" style={{backgroundColor: '#e5e8e8'}}>
                Use <span className="bolder">p0[..n]</span> to add a uniform padding around the box.
            </div>
            <br />

            <div className="px1" style={{backgroundColor: '#e5e8e8'}}>
                Use <span className="bolder">px1[..n]</span> to add padding right and left (x axis).
            </div>
            <br />

            <div className="py1" style={{backgroundColor: '#e5e8e8'}}>
                Use <span className="bolder">py1[..n]</span> to add padding top and bottom (y axis).
            </div>
            <br />
        </Section>
        <Section level={2} title="Margins" description="Give custom margin to your element">
            <div className="m2" style={{backgroundColor: '#e5e8e8'}}>
                Use <span className="bolder">m0[..n]</span> to add a uniform margin around the box.
            </div>

            <div className="mt2" style={{backgroundColor: '#e5e8e8'}}>
                Use <span className="bolder">m[t|r|b|l][1..n]</span> to add a top, right, bottom or left margin on the
                element.
            </div>
            <br />

            <div className="p3" style={{backgroundColor: '#f6f7f9'}}>
                <div className="mt-2" style={{backgroundColor: '#e5e8e8'}}>
                    Use <span className="bolder">m[t|r|b|l][-5..-1]</span> to add a negative top, right, bottom or left
                    margin on the element.
                </div>
            </div>

            <div className="mx-auto" style={{width: 200, backgroundColor: '#e5e8e8'}}>
                Use <span className="bolder">mx-auto</span> to have a auto margin-left and margin-right.
            </div>
        </Section>
    </VaporComponent>
);
