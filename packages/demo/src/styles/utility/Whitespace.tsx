import * as React from 'react';
import {Section} from 'react-vapor';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default () => (
    <VaporComponent id="whitespace" title="Whitespace" withSource>
        <Section level={2} title="Paddings" description="Give custom padding to your element">
            <div className="p2" style={{backgroundColor: '#e5e8e8'}}>
                Use p0[..n] to add a uniform padding around the box.
            </div>
            <br />

            <div className="px1" style={{backgroundColor: '#e5e8e8'}}>
                Use px1[..n] to add padding right and left (x axis).
            </div>
            <br />

            <div className="py1" style={{backgroundColor: '#e5e8e8'}}>
                Use py1[..n] to add padding top and bottom (y axis).
            </div>
            <br />
        </Section>
        <Section level={2} title="Margins" description="Give custom margin to your element">
            <div className="m2" style={{backgroundColor: '#e5e8e8'}}>
                Use m0[..n] to add a uniform margin around the box.
            </div>

            <div className="mt2" style={{backgroundColor: '#e5e8e8'}}>
                Use m[t|r|b|l][1..n] to add a top, right, bottom or left margin on the element.
            </div>
            <br />

            <div className="p3" style={{backgroundColor: '#f6f7f9'}}>
                <div className="mt-2" style={{backgroundColor: '#e5e8e8'}}>
                    Use m[t|r|b|l][-5..-1] to add a negative top, right, bottom or left margin on the element.
                </div>
            </div>

            <div className="mx-auto" style={{width: 200, backgroundColor: '#e5e8e8'}}>
                Use mx-auto to have a auto margin-left and margin-right.
            </div>
        </Section>
    </VaporComponent>
);
