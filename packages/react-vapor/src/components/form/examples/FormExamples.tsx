import * as React from 'react';
import {Checkbox} from '../../checkbox/Checkbox';
import {Input} from '../../input/Input';
import {Label} from '../../input/Label';
import {Radio} from '../../radio/Radio';
import {RadioSelect} from '../../radio/RadioSelect';
import {Form} from '../Form';
import {FormGroup} from '../FormGroup';

export class FormExamples extends React.Component<any, any> {
    render() {
        return (
            // start-print
            <div className="mt2">
                <h1 className="text-blue mb1 bold">Simple Forms</h1>
                <Form title="A Simple Form">
                    <Input placeholder="Just a simple input">
                        <Label>An Input Box</Label>
                    </Input>
                    <Input placeholder="Just another simple input">
                        <Label>Another Input Box</Label>
                    </Input>
                </Form>
                <Form title="A Card Form" mods="material-card">
                    <Input placeholder="Isn't it cool">
                        <Label>This one looks like a card</Label>
                    </Input>
                </Form>
                <Form title="A Form With a Mod" mods="mod-header-padding">
                    <Input placeholder="Amazing">
                        <Label>It would now be aligned with a padded header</Label>
                    </Input>
                </Form>
                <Form title="A Form With Form Groups">
                    <FormGroup title="A form group delimits sections of a form">
                        <Input placeholder="This is useful">
                            <Label>Here you have only one input</Label>
                        </Input>
                    </FormGroup>
                    <FormGroup
                        title="Here you have a second section"
                        description="It has a description for more details on how to fill this section"
                    >
                        <Input placeholder="#1">
                            <Label>Another input </Label>
                        </Input>
                        <Input placeholder="#2">
                            <Label>Another input</Label>
                        </Input>
                    </FormGroup>
                    <FormGroup title="Checkbox">
                        <Checkbox>
                            <Label classes={['label']}>A checkbox</Label>
                        </Checkbox>
                    </FormGroup>
                    <FormGroup title="Radio">
                        <RadioSelect>
                            <Radio value="1">
                                <Label>Value 1</Label>
                            </Radio>
                            <Radio value="2">
                                <Label>Value 2</Label>
                            </Radio>
                        </RadioSelect>
                    </FormGroup>
                </Form>
            </div>
            // stop-print
        );
    }
}
