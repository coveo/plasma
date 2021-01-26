import * as React from 'react';
import {Form, Section, Svg} from 'react-vapor';

export class SvgExamples extends React.Component<any, any> {
    render() {
        return (
            <Form>
                <Section
                    level={1}
                    title="Style modifiers"
                    description="Add the specific class to change the style of the icons from vapor"
                >
                    <Section level={2} title="Size modifiers" description="Change the size of the icons">
                        <Svg svgName="clear" className="icon" />
                        <Svg svgName="clear" className="icon mod-16" />
                        <Svg svgName="clear" className="icon mod-lg" />
                        <Svg svgName="clear" className="icon mod-2x" />
                        <Svg svgName="clear" className="icon mod-3x" />
                        <Svg svgName="clear" className="icon mod-4x" />
                        <Svg svgName="clear" className="icon mod-5x" />
                    </Section>
                </Section>
            </Form>
        );
    }
}
