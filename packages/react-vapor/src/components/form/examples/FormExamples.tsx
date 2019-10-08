import * as React from 'react';
import {Input} from '../../input/Input';
import {Label} from '../../input/Label';
import {LabeledInput} from '../../input/LabeledInput';
import {Radio} from '../../radio/Radio';
import {RadioSelect} from '../../radio/RadioSelect';
import {SingleSelectConnected} from '../../select/SingleSelectConnected';
import {Form} from '../Form';
import {FormGroup} from '../FormGroup';

export class FormExamples extends React.Component<any, any> {
    render() {
        return (
            // start-print
            <>
                <Form>
                    <FormGroup
                        title="Search panel"
                        description="Customizing the display and behavior of the interface displayed withing the search panel can be done by editing the code of your search interface directly or via the JavaScript Search Interface Editor. As for style, it can be modified by applying your own stylesheet or adding styling rules in the Advanced tab."
                    />
                    <FormGroup title="Main button">
                        <LabeledInput
                            label="Location on screen"
                            description="The widget button's position is fixed, which means it is positioned relative to the viewport and stays in the same place even if the page is scrolled."
                            information="INFORMATION"
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
                        <FormGroup title="Content" level={2}>
                            <LabeledInput description="The text that appears on the main widget button.">
                                <Input value="Help">
                                    <Label>Text</Label>
                                </Input>
                            </LabeledInput>
                            <LabeledInput description="This is the font family that will be used on the button...">
                                <Input value="Lato, Arial, sans serif">
                                    <Label>Font Family</Label>
                                </Input>
                            </LabeledInput>
                        </FormGroup>
                    </FormGroup>
                </Form>
                <Form>
                    <FormGroup title="Define your products structure">
                        <LabeledInput
                            label="Product Object Type"
                            description="Select the object type value that identifies a Product object"
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
                        <LabeledInput
                            label="Product Id Field"
                            description="The product unique identifier is often associated with a model number. It is used to link variants and products together. This field should appear in both objects"
                            message="31 different products identified"
                        >
                            <SingleSelectConnected
                                id="second"
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
                    </FormGroup>
                </Form>
            </>
            // stop-print
        );
    }
}
