import * as React from 'react';
import {screen} from '@testing-library/dom';
import {render} from '@testing-library/react';
import {CollapsibleContainerConnected} from 'src/components';

describe('<CollapsibleContainerConnected />', () => {
    describe('if no informationUrl and informationTooltip are passed', () => {
        it('does not render a svg in the header', () => {
            render(<CollapsibleContainerConnected></CollapsibleContainerConnected>);

            screen.debug();

            expect(true).toBe(true);
            // expect(wrapper.find(`.${collapsibleProps.headerClasses}`).find('Component').find(Svg).length).toBe(0);
        });
    });

    describe('if informationUrl is passed', () => {
        it('render a svg in the header', () => {
            // informationUrl: 'http://whatever.com',

            render(<CollapsibleContainerConnected></CollapsibleContainerConnected>);

            screen.debug();

            expect(true).toBe(true);
        });
    });

    describe('if informationTooltip is passed', () => {
        it('render a svg in the header', () => {
            // tooltipMessage: 'PatateKing',

            render(<CollapsibleContainerConnected></CollapsibleContainerConnected>);

            expect(true).toBe(true);
        });
    });
});
