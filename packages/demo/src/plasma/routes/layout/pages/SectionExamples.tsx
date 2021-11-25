import * as React from 'react';
import {
    Form,
    Input,
    InputConnected,
    Label,
    LabeledInput,
    Radio,
    RadioSelect,
    Section,
    SingleSelectConnected,
    Svg,
    Tooltip,
} from 'react-vapor';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

// start-print
export class SectionExamples extends React.Component<any, any> {
    render() {
        return (
            <VaporComponent id="sections" title="Sections" usage="" withSource>
                <Form>
                    <Section
                        title="Search panel"
                        description="Customizing the display and behavior of the interface displayed withing the search panel can be done by editing the code of your search interface directly or via the JavaScript Search Interface Editor. As for style, it can be modified by applying your own stylesheet or adding styling rules in the Advanced tab."
                    >
                        <Section title="Main button">
                            <LabeledInput
                                label="Location on screen"
                                helpText="The widget button's position is fixed, which means it is positioned relative to the viewport and stays in the same place even if the page is scrolled."
                                optionalInformation="INFORMATION"
                            >
                                <RadioSelect>
                                    <Radio value="1">
                                        <Label>Value 1</Label>
                                    </Radio>
                                    <Radio value="2">
                                        <Label>Value 2</Label>
                                    </Radio>
                                </RadioSelect>
                            </LabeledInput>
                            <Section title="Content">
                                <LabeledInput helpText="The text that appears on the main widget button.">
                                    <Input value="Help">
                                        <Label>Text</Label>
                                    </Input>
                                </LabeledInput>
                                <LabeledInput helpText="This is the font family that will be used on the button...">
                                    <Input value="Canada type gibson, sans serif">
                                        <Label>Font Family</Label>
                                    </Input>
                                </LabeledInput>
                            </Section>
                        </Section>
                    </Section>
                </Form>

                <Form>
                    <Section
                        title={
                            <div className="flex">
                                Custom title with a Svg and Tooltip
                                <Tooltip title="info title">
                                    <Svg svgName="info" className="ml1 icon mod-20 documentation-link" />
                                </Tooltip>
                            </div>
                        }
                    >
                        content
                    </Section>
                </Form>

                <Form className="mt4">
                    <Section
                        title="This is the prefered way of using Sections, insert the section title here."
                        description="Use this as a description for the section"
                    >
                        <LabeledInput
                            label="Wrap components that do not expose a label into this <LabeledInput /> component."
                            helpText="This `helpText` attribute helps the user understand which value to choose."
                        >
                            <SingleSelectConnected
                                id="first"
                                items={[
                                    {
                                        selected: true,
                                        value: 'Product',
                                    },
                                    {
                                        selected: false,
                                        value: 'Variant',
                                    },
                                ]}
                            />
                        </LabeledInput>
                        <InputConnected id="some-input" labelTitle="Label" />
                        <LabeledInput
                            label="Location on screen"
                            helpText="The widget button's position is fixed, which means it is positioned relative to the viewport and stays in the same place even if the page is scrolled."
                            optionalInformation="INFORMATION"
                        >
                            <RadioSelect>
                                <Radio value="1">
                                    <Label>Value 1</Label>
                                </Radio>
                                <Radio value="2">
                                    <Label>Value 2</Label>
                                </Radio>
                            </RadioSelect>
                        </LabeledInput>
                    </Section>
                </Form>
                <Form className="mt4">
                    <Section
                        title="These sections help you understand the various level spacing"
                        description="Each level has a different margin between each direct child. If you have extra spacing that you don't want, wrap the components into a single div to remove some spacing."
                    >
                        <LabeledInput
                            label="Product Object Type"
                            helpText="Select the object type value that identifies a Product object"
                        >
                            <SingleSelectConnected
                                id="first-level-1"
                                items={[
                                    {
                                        selected: true,
                                        value: 'Product',
                                    },
                                    {
                                        selected: false,
                                        value: 'Variant',
                                    },
                                ]}
                            />
                        </LabeledInput>
                        <LabeledInput
                            label="Product Id Field"
                            helpText="The product unique identifier is often associated with a model number. It is used to link variants and products together. This field should appear in both objects"
                            message="31 different products identified"
                        >
                            <SingleSelectConnected
                                id="second-level-1"
                                items={[
                                    {
                                        selected: true,
                                        value: 'productid',
                                    },
                                    {
                                        selected: false,
                                        value: 'anotherfield',
                                    },
                                ]}
                            />
                        </LabeledInput>
                    </Section>
                    <Section title="Level 2" description="Inputs inside a Section of level 2" level={2}>
                        <LabeledInput
                            label="Product Object Type"
                            helpText="Select the object type value that identifies a Product object"
                        >
                            <SingleSelectConnected
                                id="first-level-2"
                                items={[
                                    {
                                        selected: true,
                                        value: 'Product',
                                    },
                                    {
                                        selected: false,
                                        value: 'Variant',
                                    },
                                ]}
                            />
                        </LabeledInput>
                        <LabeledInput
                            label="Product Id Field"
                            helpText="The product unique identifier is often associated with a model number. It is used to link variants and products together. This field should appear in both objects"
                            message="31 different products identified"
                        >
                            <SingleSelectConnected
                                id="second-level-2"
                                items={[
                                    {
                                        selected: true,
                                        value: 'productid',
                                    },
                                    {
                                        selected: false,
                                        value: 'anotherfield',
                                    },
                                ]}
                            />
                        </LabeledInput>
                    </Section>
                    <Section title="Level 3" description="Inputs inside a Section of level 3" level={3}>
                        <LabeledInput
                            label="Product Object Type"
                            helpText="Select the object type value that identifies a Product object"
                        >
                            <SingleSelectConnected
                                id="first-level-3"
                                items={[
                                    {
                                        selected: true,
                                        value: 'Product',
                                    },
                                    {
                                        selected: false,
                                        value: 'Variant',
                                    },
                                ]}
                            />
                        </LabeledInput>
                        <LabeledInput
                            label="Product Id Field"
                            helpText="The product unique identifier is often associated with a model number. It is used to link variants and products together. This field should appear in both objects"
                            message="31 different products identified"
                        >
                            <SingleSelectConnected
                                id="second-level-3"
                                items={[
                                    {
                                        selected: true,
                                        value: 'productid',
                                    },
                                    {
                                        selected: false,
                                        value: 'anotherfield',
                                    },
                                ]}
                            />
                        </LabeledInput>
                    </Section>
                </Form>
            </VaporComponent>
        );
    }
}
// stop-print
