import * as React from 'react';
import {
    FlatSelectConnected,
    Form,
    IContentProps,
    IFlatSelectOptionProps,
    ISvgProps,
    Loading,
    Section,
    Svg,
    UUID,
} from 'react-vapor';

export class FlatSelectExamples extends React.Component {
    render() {
        const defaultFlatSelectOption: IFlatSelectOptionProps[] = [
            {
                id: UUID.generate(),
                option: {content: 'Option 1'},
            },
            {
                id: UUID.generate(),
                option: {content: 'Option 2'},
            },
            {
                id: UUID.generate(),
                option: {content: 'Option 3'},
            },
        ];

        const svg: ISvgProps = {
            svgName: 'domain-google',
            svgClass: 'icon',
        };
        const prepend: IContentProps = {content: () => <Svg {...svg} />, classes: ['mr1']};
        const append: IContentProps = {content: () => <Svg {...svg} />, classes: ['ml1']};

        return (
            <Form>
                <Section title="Flat Select List">
                    <Section level={2} title="Default Flat Select">
                        <FlatSelectConnected
                            {...{
                                id: UUID.generate(),
                                options: defaultFlatSelectOption,
                            }}
                        />
                    </Section>
                    <Section level={2} title="Flat Select mod group">
                        <FlatSelectConnected
                            {...{
                                id: UUID.generate(),
                                options: defaultFlatSelectOption,
                                group: true,
                            }}
                        />
                    </Section>
                    <Section level={2} title="Flat Select mod option picker">
                        <FlatSelectConnected
                            {...{
                                id: UUID.generate(),
                                options: defaultFlatSelectOption,
                                optionPicker: true,
                            }}
                        />
                    </Section>
                    <Section level={2} title="Flat Select with option tooltip">
                        <FlatSelectConnected
                            {...{
                                id: UUID.generate(),
                                options: [
                                    {
                                        id: UUID.generate(),
                                        option: {content: 'Option 1'},
                                        tooltip: {title: 'Option 1 tooltip', container: 'body', placement: 'bottom'},
                                    },
                                    {
                                        id: UUID.generate(),
                                        option: {content: 'Option 2'},
                                        tooltip: {title: 'Option 2 tooltip', container: 'body', placement: 'bottom'},
                                    },
                                ],
                            }}
                        />
                    </Section>
                    <Section level={2} title="Flat Select with option append and prepend">
                        <FlatSelectConnected
                            {...{
                                id: UUID.generate(),
                                options: [
                                    {
                                        id: UUID.generate(),
                                        option: {content: 'Option 1'},
                                        prepend: prepend,
                                    },
                                    {
                                        id: UUID.generate(),
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
                                id: UUID.generate(),
                                options: [
                                    {
                                        id: UUID.generate(),
                                        option: {content: Loading},
                                    },
                                    {
                                        id: UUID.generate(),
                                        option: {content: Loading},
                                    },
                                ],
                            }}
                        />
                    </Section>
                </Section>
            </Form>
        );
    }
}
