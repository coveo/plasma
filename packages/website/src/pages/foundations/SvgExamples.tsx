import {
    FlatSelectConnected,
    FlatSelectSelectors,
    IItemBoxProps,
    PlasmaState,
    Section,
    SingleSelectConnected,
    StringUtils,
    Svg,
    SVG_NAMES,
    SvgNames,
} from '@coveord/plasma-react';
import * as React from 'react';
import {useSelector} from 'react-redux';

import VaporComponent from '../../building-blocs/VaporComponent';

// start-print
export const SvgExamples: React.FC = () => {
    const LISTBOX_ID = 'svg-name-picker';
    const svgName = useSelector((state: PlasmaState) => {
        const selectedBox = state.listBoxes.find((box) => box.id === LISTBOX_ID);

        if (!selectedBox) {
            return null;
        }

        return {
            ...selectedBox,
            selected: selectedBox.selected as SvgNames[],
        };
    });

    const selectedFontSize = useSelector((state) =>
        FlatSelectSelectors.getSelectedOptionId(state, {id: 'font-size-select-id'})
    );

    const selectedSvg = svgName?.selected[0];

    const defaultItems: IItemBoxProps[] = Object.values(SVG_NAMES).map((name, i) => ({
        value: name,
        displayValue: StringUtils.separateCamelCase(name),
        selected: i === 0,
    }));

    const FONT_SIZE_OPTIONS = [
        {
            id: 'inherit',
            option: {content: 'Normal'},
        },
        {
            id: '2rem',
            option: {content: '2rem'},
        },
        {
            id: '20px',
            option: {content: '20px'},
        },
    ];

    return (
        <VaporComponent id="ColorBar" title="SVG" withSource>
            <Section
                level={1}
                title="Size modifiers"
                description="Icons can take multiple modifiers, but its important to realize that size modifiers are either fixed or relative. Play around below to see how the modifier affects the size when a parent font-size is applied"
            >
                <Section level={2} title="Select an icon and font size for the parent element">
                    <Section level={3} title="A list of all our icons">
                        <div className="flex flex-center space-between">
                            <SingleSelectConnected
                                id={LISTBOX_ID}
                                items={defaultItems}
                                placeholder="Select something"
                                canClear
                            />

                            <FlatSelectConnected id="font-size-select-id" options={FONT_SIZE_OPTIONS} group />
                        </div>
                        <p className="my3">svgName="{selectedSvg}"</p>
                    </Section>
                </Section>
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
        </VaporComponent>
    );
};
