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
                    <Section level={2} title="Color modifiers" description="Give custom colors to icons">
                        <Svg svgName="clear" className="icon mod-2x" svgClass="fill-light-grey" />
                        <Svg svgName="clear" className="icon mod-2x" svgClass="fill-medium-grey" />
                        <Svg svgName="clear" className="icon mod-2x" svgClass="fill-dark-grey" />
                        <Svg svgName="clear" className="icon mod-2x" svgClass="fill-blue" />
                        <Svg svgName="clear" className="icon mod-2x" svgClass="fill-light-blue" />
                        <Svg svgName="clear" className="icon mod-2x" svgClass="fill-medium-blue" />
                        <Svg svgName="clear" className="icon mod-2x" svgClass="fill-dark-blue" />
                        <Svg svgName="clear" className="icon mod-2x" svgClass="fill-darker-blue" />
                        <Svg svgName="clear" className="icon mod-2x" svgClass="fill-green" />
                        <Svg svgName="clear" className="icon mod-2x" svgClass="fill-orange" />
                        <Svg svgName="clear" className="icon mod-2x" svgClass="fill-red" />
                        <Svg svgName="clear" className="icon mod-2x" svgClass="fill-yellow" />
                        <Svg svgName="clear" className="icon mod-2x" svgClass="fill-white bg-light-blue" />
                        <Svg svgName="clear" className="icon mod-2x" svgClass="fill-yellow bg-red" />
                    </Section>
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
