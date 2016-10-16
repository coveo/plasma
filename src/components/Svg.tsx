///<reference path="../../node_modules/@types/webpack-env/index.d.ts"/>
import * as React from 'react';

import '../utils/Polyfills';

let svgsEnum = require('../../node_modules/coveo-styleguide/dist/svg/CoveoStyleGuideSvg.json') as { [key: string]: string };

const setSvgClass = (svgString: string, svgClass: string): string => {
  let parser = document.createElement('div');
  parser.innerHTML = svgString;

  let svgElement: SVGElement = parser.children[0] as SVGElement;
  svgElement.setAttribute('class', svgClass);
  return svgElement.outerHTML; // Polyfill required here!
};

/**
 * Pass the required svgName to get your svg.
 * Use className to pass the "icon" class and any sizing class.
 * Use svgClass to pass the svg fill class.
 */
export interface ISvgProps extends React.ClassAttributes<Svg> {
  className?: string;
  svgClass?: string;
  svgName: string;
}

export class Svg extends React.Component<ISvgProps, any> {
  render() {
    let className: string = this.props.className ? this.props.className : '';
    let svgClass: string = this.props.svgClass ? this.props.svgClass : '';
    let svgString: string = svgsEnum[this.props.svgName];

    if (svgString) {
      let svgStringWithClass = setSvgClass(svgString, svgClass);

      return (
        <span className={className} dangerouslySetInnerHTML={{ __html: svgStringWithClass }} />
      );
    } else {
      return (
        <span className={className}>
          <svg className={svgClass} />
        </span>
      );
    }
  }
}
