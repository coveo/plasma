///<reference path="../../node_modules/@types/webpack-env/index.d.ts"/>
import * as React from 'react';

let svgsEnum = require('../../node_modules/coveo-styleguide/dist/svg/CoveoStyleGuideSvg.json') as { [key: string]: string };

const parseSVG = (str: string): SVGElement => {
  let container = document.createElement('div');

  container.innerHTML = str;

  return container.children[0] as SVGElement;
};

const getElementAttributes = (element: Element): { [key: string]: string } => {
  let attibutes: { [key: string]: string } = {};

  for (let i = 0; i < element.attributes.length; i++) {
    let attr: Attr = element.attributes[i];
    attibutes[attr.name] = attr.value;
  }

  return attibutes;
};

export interface ISvgProps extends React.ClassAttributes<Svg> {
  svgName: string;
  className?: string;
}

export class Svg extends React.Component<ISvgProps, any> {
  render() {
    let className: string = this.props.className ? this.props.className : '';
    let svgString: string = svgsEnum[this.props.svgName];

    if (svgString) {
      let parsedSvg: SVGElement = parseSVG(svgString);

      return (
        <svg {...getElementAttributes(parsedSvg) } className={className} dangerouslySetInnerHTML={{ __html: parsedSvg.innerHTML }} />
      );
    } else {
      return (
        <svg className={className} />
      );
    }
  }
}
