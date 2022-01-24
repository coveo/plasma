import {
    FlatSelectConnected,
    Form,
    IContentProps,
    IFlatSelectOptionProps,
    ISvgProps,
    Loading,
    Section,
    Svg,
} from '@coveord/plasma-react';
import * as React from 'react';

import VaporComponent from '../../building-blocs/VaporComponent';

// start-print
export class FlatSelectExamples extends React.Component {
    render() {
        const defaultFlatSelectOption: IFlatSelectOptionProps[] = [
            {
                id: 'uniqueId-1',
                option: {content: 'Option 1'},
            },
            {
                id: 'uniqueId-2',
                option: {content: 'Option 2'},
            },
            {
                id: 'uniqueId-3',
                option: {content: 'Option 3'},
            },
        ];

        const svg: ISvgProps = {
            svgName: 'domainGoogle',
            svgClass: 'icon',
        };
        const prepend: IContentProps = {content: () => <Svg {...svg} />, classes: ['mr1']};
        const append: IContentProps = {content: () => <Svg {...svg} />, classes: ['ml1']};

        return (
            <VaporComponent id="FlatSelect" title="Flat Select" withSource>
                <Form>
                    <Section title="Flat Select List">
                        <Section level={2} title="Default Flat Select">
                            <FlatSelectConnected
                                {...{
                                    id: 'flatSelectId-1',
                                    options: defaultFlatSelectOption,
                                }}
                            />
                        </Section>
                        <Section level={2} title="Flat Select mod group">
                            <FlatSelectConnected
                                {...{
                                    id: 'flatSelectId-2',
                                    options: defaultFlatSelectOption,
                                    group: true,
                                }}
                            />
                        </Section>
                        <Section level={2} title="Flat Select mod option picker">
                            <FlatSelectConnected
                                {...{
                                    id: 'flatSelectId-3',
                                    options: defaultFlatSelectOption,
                                    optionPicker: true,
                                }}
                            />
                        </Section>
                        <Section level={2} title="Flat Select with option tooltip">
                            <FlatSelectConnected
                                {...{
                                    id: 'flatSelectId-4',
                                    options: [
                                        {
                                            id: 'itemTooltipId-1',
                                            option: {content: 'Option 1'},
                                            tooltip: {
                                                title: 'Option 1 tooltip',
                                                container: 'body',
                                                placement: 'bottom',
                                            },
                                        },
                                        {
                                            id: 'itemTooltipId-2',
                                            option: {content: 'Option 2'},
                                            tooltip: {
                                                title: 'Option 2 tooltip',
                                                container: 'body',
                                                placement: 'bottom',
                                            },
                                        },
                                    ],
                                }}
                            />
                        </Section>
                        <Section level={2} title="Flat Select with option append and prepend">
                            <FlatSelectConnected
                                {...{
                                    id: 'flatSelectId-5',
                                    options: [
                                        {
                                            id: 'prependItemId',
                                            option: {content: 'Option 1'},
                                            prepend: prepend,
                                        },
                                        {
                                            id: 'appendItemId',
                                            option: {content: 'Option 2'},
                                            append: append,
                                        },
                                    ],
                                }}
                            />
                        </Section>
                        <Section level={2} title="Flat Select with option component">
                            <FlatSelectConnected
                                {...{
                                    id: 'flatSelectId-6',
                                    options: [
                                        {
                                            id: 'loadingId-1',
                                            option: {content: Loading},
                                        },
                                        {
                                            id: 'loadingId-2',
                                            option: {content: Loading},
                                        },
                                    ],
                                }}
                            />
                        </Section>
                        <Section level={2} title="Flat Select with a disabled option">
                            <FlatSelectConnected
                                {...{
                                    id: 'flatSelectId-7',
                                    options: [
                                        {
                                            id: 'disabledId-1',
                                            option: {content: 'disabled'},
                                            disabled: true,
                                        },
                                        {
                                            id: 'disabledId-1',
                                            option: {content: 'enabled'},
                                        },
                                    ],
                                }}
                            />
                        </Section>
                        <Section level={2} title="Flat Select with all options disabled">
                            <FlatSelectConnected
                                {...{
                                    id: 'flatSelectId-8',
                                    options: [
                                        {
                                            id: 'disabledId-3',
                                            option: {content: "I'm a disabled FlatSelectOption"},
                                            disabled: true,
                                        },
                                        {
                                            id: 'disabledId-4',
                                            option: {content: "I'm a disabled FlatSelectOption too!"},
                                        },
                                    ],
                                    disabled: true,
                                }}
                            />
                        </Section>
                    </Section>
                </Form>
            </VaporComponent>
        );
    }
}
