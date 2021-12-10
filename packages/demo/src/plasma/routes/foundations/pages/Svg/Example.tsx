/* eslint-disable arrow-body-style */
// start-print
import * as React from 'react';
import * as ReactRedux from 'react-redux';
import {FlatSelectSelectors, IListBoxState, Section, Svg, SvgNames} from 'react-vapor';

const Example = () => {
    const LISTBOX_ID = 'svg-name-picker';
    const svgName = ReactRedux.useSelector((state: any) => {
        const selectedBox = state.listBoxes.find((box: IListBoxState) => box.id === LISTBOX_ID);

        if (!selectedBox) {
            return null;
        }

        return {
            ...selectedBox,
            selected: selectedBox.selected as SvgNames[],
        };
    });

    const selectedSvg = svgName?.selected[0];

    const selectedFontSize = ReactRedux.useSelector((state) =>
        FlatSelectSelectors.getSelectedOptionId(state, {id: 'font-size-select-id'})
    );

    return (
        <Section>
            <Section level={2} title="Based on a relative size (eg mod-2x, mod-3x)">
                <div style={{fontSize: selectedFontSize}} className="flex flex-center mb5">
                    <Svg svgName={selectedSvg} className="mr1 icon mod-small" />
                    <Svg svgName={selectedSvg} className="mr1 icon mod-warning mod-lg" />
                    <Svg svgName={selectedSvg} className="mr1 icon mod-info mod-2x" />
                    <Svg svgName={selectedSvg} className="mr1 icon documentation-link mod-3x" />
                    <Svg svgName={selectedSvg} className="mr1 icon documentation-link mod-4x" />
                    <Svg svgName={selectedSvg} className="mr1 icon mod-error mod-5x" />
                </div>
            </Section>
            <Section level={2} title="Based on a fixed size (eg mod-10, mod-20)">
                <div style={{fontSize: selectedFontSize}} className="flex flex-center space-between mb5">
                    <Svg svgName={selectedSvg} className="icon mod-info mod-10" />
                    <Svg svgName={selectedSvg} className="icon mod-info mod-12" />
                    <Svg svgName={selectedSvg} className="icon documentation-link mod-14" />
                    <Svg svgName={selectedSvg} className="icon documentation-link mod-16" />
                    <Svg svgName={selectedSvg} className="icon mod-error mod-18" />
                    <Svg svgName={selectedSvg} className="icon mod-error mod-20" />
                    <Svg svgName={selectedSvg} className="icon mod-warning mod-22" />
                    <Svg svgName={selectedSvg} className="icon mod-warning mod-24" />
                    <Svg svgName={selectedSvg} className="icon mod-success mod-26" />
                    <Svg svgName={selectedSvg} className="icon mod-success mod-28" />
                    <Svg svgName={selectedSvg} className="icon office365-red mod-30" />
                    <Svg svgName={selectedSvg} className="icon office365-red mod-32" />
                    <Svg svgName={selectedSvg} className="icon salesforce-blue mod-34" />
                    <Svg svgName={selectedSvg} className="icon salesforce-blue mod-50" />
                    <Svg svgName={selectedSvg} className="icon salesforce-blue mod-60" />
                    <Svg svgName={selectedSvg} className="icon salesforce-blue mod-70" />
                </div>
            </Section>
        </Section>
    );
};
// stop-print

export default Example;
