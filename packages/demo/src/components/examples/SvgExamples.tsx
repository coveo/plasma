import * as React from 'react';
import {Section, Svg} from 'react-vapor';

// start-print
export const SvgExamples: React.FC = () => (
    <Section level={1} title="Size modifiers" description="Change the size of the icons">
        <Section level={2} title="Based on the relative font size:">
            <Section level={3} description="Default">
                <div>
                    <Svg svgName="clear" className="icon mod-info mod-lg" />
                    <Svg svgName="clear" className="icon documentation-link mod-2x" />
                    <Svg svgName="clear" className="icon mod-error mod-3x" />
                    <Svg svgName="clear" className="icon mod-warning mod-4x" />
                    <Svg svgName="clear" className="icon mod-success mod-5x" />
                </div>
            </Section>
            <Section level={3} description="font-size: 0.5rem;">
                <div style={{fontSize: '0.5rem'}}>
                    <Svg svgName="clear" className="icon mod-info mod-lg" />
                    <Svg svgName="clear" className="icon documentation-link mod-2x" />
                    <Svg svgName="clear" className="icon mod-error mod-3x" />
                    <Svg svgName="clear" className="icon mod-warning mod-4x" />
                    <Svg svgName="clear" className="icon mod-success mod-5x" />
                </div>
            </Section>
            <Section level={3} description="font-size: 20px;">
                <div style={{fontSize: '20px'}}>
                    <Svg svgName="clear" className="icon mod-info mod-lg" />
                    <Svg svgName="clear" className="icon documentation-link mod-2x" />
                    <Svg svgName="clear" className="icon mod-error mod-3x" />
                    <Svg svgName="clear" className="icon mod-warning mod-4x" />
                    <Svg svgName="clear" className="icon mod-success mod-5x" />
                </div>
            </Section>
        </Section>
        <Section level={2} title="Based on a fixed size">
            <Svg svgName="clear" className="icon mod-info mod-10" />
            <Svg svgName="clear" className="icon mod-info mod-12" />
            <Svg svgName="clear" className="icon documentation-link mod-14" />
            <Svg svgName="clear" className="icon documentation-link mod-16" />
            <Svg svgName="clear" className="icon mod-error mod-18" />
            <Svg svgName="clear" className="icon mod-error mod-20" />
            <Svg svgName="clear" className="icon mod-warning mod-22" />
            <Svg svgName="clear" className="icon mod-warning mod-24" />
            <Svg svgName="clear" className="icon mod-success mod-26" />
            <Svg svgName="clear" className="icon mod-success mod-28" />
            <Svg svgName="clear" className="icon office365-red mod-30" />
            <Svg svgName="clear" className="icon office365-red mod-32" />
            <Svg svgName="clear" className="icon salesforce-blue mod-34" />
            <Svg svgName="clear" className="icon salesforce-blue mod-36" />
        </Section>
    </Section>
);
