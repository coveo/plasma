// start-print
import * as React from 'react';
import {useSelector} from 'react-redux';
import {
    FlatSelectConnected,
    // FlatSelectSelectors,
    IItemBoxProps,
    Section,
    SingleSelectConnected,
    StringUtils,
    SVG_NAMES,
    SvgNames,
} from 'react-vapor';

import {IReactVaporExampleState} from '../../../../../Reducers';
import VaporComponent from '../../../../../demo-building-blocs/VaporComponent';

export const SvgExamples: React.FC = () => {
    const LISTBOX_ID = 'svg-name-picker';
    const svgName = useSelector((state: IReactVaporExampleState) => {
        const selectedBox = state.listBoxes.find((box) => box.id === LISTBOX_ID);

        if (!selectedBox) {
            return null;
        }

        return {
            ...selectedBox,
            selected: selectedBox.selected as SvgNames[],
        };
    });

    // const selectedFontSize = useSelector((state) =>
    //     FlatSelectSelectors.getSelectedOptionId(state, {id: 'font-size-select-id'})
    // );

    const selectedSvg = svgName?.selected[0];

    const defaultItems: IItemBoxProps[] = Object.values(SVG_NAMES).map((name, i) => ({
        value: name,
        displayValue: StringUtils.separateCamelCase(name),
        selected: i === 0,
    }));

    return (
        <VaporComponent id="color-bar" title="SVG" withSource>
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

                            <FlatSelectConnected
                                id="font-size-select-id"
                                options={[
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
                                ]}
                                group
                            />
                        </div>
                        <p className="my3">svgName="{selectedSvg}"</p>
                    </Section>
                </Section>
            </Section>
        </VaporComponent>
    );
};
