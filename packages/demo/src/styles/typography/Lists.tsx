import * as React from 'react';
import {Section} from 'react-vapor';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default () => (
    <VaporComponent id="lists" title="Lists" usage="Apply styles to unordered and ordered lists" withSource>
        <Section level={2} title="List disc">
            <ul className="list-disc body-m-subdued">
                <li>Disc list item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </Section>
        <Section level={2} title="List circle">
            <ul className="list-circle body-m-subdued">
                <li>Circles list item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </Section>
        <Section level={2} title="List square">
            <ul className="list-square body-m-subdued">
                <li>Squares list item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </Section>
        <Section level={2} title="List decimal">
            <ol className="list-decimal body-m-subdued">
                <li>Decimal list item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>
        </Section>
        <Section level={2} title="List lower alpha">
            <ol className="list-lower-alpha body-m-subdued">
                <li>Lower alpha list item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>
        </Section>
        <Section level={2} title="List upper alpha">
            <ol className="list-upper-alpha body-m-subdued">
                <li>Upper alpha list item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>
        </Section>
        <Section level={2} title="List reset">
            <ul className="list-reset body-m-subdued">
                <li>list reset item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
        </Section>
    </VaporComponent>
);
