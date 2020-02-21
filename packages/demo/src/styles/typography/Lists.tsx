import * as React from 'react';

import VaporComponent from '../../demo-building-blocs/VaporComponent';

export default function Lists() {
    return (
        <VaporComponent id="lists" title="Lists" usage="Apply styles to unordered and ordered lists" withSource>
            <h3>
                <ul className="list-reset">
                    <li>list reset item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul>

                <ul className="list-disc">
                    <li>Disc list item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul>

                <ul className="list-circle">
                    <li>Circles list item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul>

                <ul className="list-square">
                    <li>Squares list item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul>

                <ol className="list-decimal">
                    <li>Decimal list item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ol>

                <ol className="list-lower-alpha">
                    <li>Lower alpha list item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ol>

                <ol className="list-upper-alpha">
                    <li>Upper alpha list item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ol>
            </h3>
        </VaporComponent>
    );
}
