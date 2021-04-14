import * as React from 'react';
import {Form, Section, Svg} from 'react-vapor';

export class SvgExamples extends React.Component<any, any> {
    render() {
        return (
            <Form>
                <Section level={1} title="Size modifiers" description="Change the size of the icons">
                    <Section level={2} title="Based on the ambient font size">
                        <Svg svgName="clear" className="icon mod-lg" />
                        <Svg svgName="clear" className="icon mod-2x" />
                        <Svg svgName="clear" className="icon mod-3x" />
                        <Svg svgName="clear" className="icon mod-4x" />
                        <Svg svgName="clear" className="icon mod-5x" />
                    </Section>
                    <Section level={2} title="Based on a fixed size">
                        <Svg svgName="clear" className="icon mod-10" />
                        <Svg svgName="clear" className="icon mod-12" />
                        <Svg svgName="clear" className="icon mod-14" />
                        <Svg svgName="clear" className="icon mod-16" />
                        <Svg svgName="clear" className="icon mod-18" />
                        <Svg svgName="clear" className="icon mod-20" />
                        <Svg svgName="clear" className="icon mod-22" />
                        <Svg svgName="clear" className="icon mod-24" />
                        <Svg svgName="clear" className="icon mod-26" />
                        <Svg svgName="clear" className="icon mod-28" />
                        <Svg svgName="clear" className="icon mod-30" />
                    </Section>
                </Section>
            </Form>
        );
    }
}
