/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const t = require('@babel/types');

const findSvgTag = (variables) => variables.jsx.openingElement;

const addAttributeToSvgTag = (svgTag, attribute) => {
    svgTag.attributes.push(attribute);
};

const deconstructSvgProps = (props) => {
    const svgProps = t.objectPattern([
        ...props.map((prop) => t.objectProperty(t.identifier(prop), t.identifier(prop), false, true)),
        t.restElement(t.identifier('svgProps')),
    ]);
    svgProps.typeAnnotation = t.tsTypeAnnotation(
        t.tsTypeReference(
            t.identifier('SVGProps'),
            t.tsTypeParameterInstantiation([t.tsTypeReference(t.identifier('SVGSVGElement'))])
        )
    );
    return svgProps;
};

const template = (variables, {tpl}) => {
    const svgTag = findSvgTag(variables);
    const styleAttr = t.jsxAttribute(
        t.jsxIdentifier('style'),
        t.jsxExpressionContainer(
            t.objectExpression([
                t.objectProperty(t.identifier('verticalAlign'), t.stringLiteral('text-bottom')),
                t.spreadElement(t.identifier('style')),
            ])
        )
    );
    const svgPropsAttr = t.jsxSpreadAttribute(t.identifier('svgProps'));

    addAttributeToSvgTag(svgTag, styleAttr);
    addAttributeToSvgTag(svgTag, svgPropsAttr);

    const props = [deconstructSvgProps(['width', 'height', 'style'])];

    return tpl`
${variables.imports};

import {forwardRef, SVGProps} from 'react';

const ${variables.componentName} = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((${props}, ref) => (${variables.jsx}));

${variables.exports};
`;
};

module.exports = template;
