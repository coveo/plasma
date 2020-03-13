import * as React from 'react';

import {Section} from 'react-vapor';
import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default function Whitespace() {
    return (
        <VaporComponent id="whitespace" title="Whitespace" withSource>
            <Section level={2} title="Paddings" description="Give custom padding to your element">
                <div className="p2 bg-red">Use p0[..n] to add a uniform padding around the box.</div>
                <br />

                <div className="px1 bg-orange">Use px1[..n] to add padding right and left (x axis).</div>
                <br />

                <div className="py1 bg-yellow">Use py1[..n] to add padding top and bottom (y axis).</div>
                <br />
            </Section>
            <Section level={2} title="Margins" description="Give custom margin to your element">
                <div className="m2 bg-green">Use m0[..n] to add a uniform margin around the box.</div>

                <div className="mt2 bg-blue">
                    Use m[t|r|b|l][1..n] to add a top, right, bottom or left margin on the element.
                </div>
                <br />

                <div className="p3 bg-grey-2">
                    <div className="mt-2 bg-grey-7">
                        Use m[t|r|b|l][-5..-1] to add a negative top, right, bottom or left margin on the element.
                    </div>
                </div>

                <div className="mx-auto" style={{width: 200, backgroundColor: 'darkmagenta'}}>
                    Use mx-auto to have a auto margin-left and margin-right.
                </div>
            </Section>
        </VaporComponent>
    );
}
