///<reference path="../../node_modules/@types/webpack-env/index.d.ts"/>

import * as React from 'react';
import * as _ from 'underscore';

let svgsEnum = require('../../node_modules/coveo-styleguide/dist/svg/CoveoStyleGuideSvg.json') as { [key: string]: string };

const setSvgClass = (svgString: string, svgClass: string): string => {
  let parser = document.createElement('div');
  parser.innerHTML = svgString;

  (parser.children[0] as SVGElement).setAttribute('class', svgClass);

  return parser.innerHTML;
};

/**
 * Pass the required svgName to get your svg.
 * Use svgClass to pass the svg fill class (and the icon class if you didn't pass is as className).
 */
export interface ISvgProps extends React.HTMLProps<Svg> {
  svgClass?: string;
  svgName: string;
}

/**
 * List of props that where passed to the <Svg> component but that should not be passed to the <span> element to avoid warnings.
 * @type {string[]}
 */
const svgPropsToOmit = [
  'svgClass', 'svgName'
];

export class Svg extends React.Component<ISvgProps, any> {
  render() {
    let svgClass: string = this.props.svgClass ? this.props.svgClass : '';
    let svgString: string = svgsEnum[this.props.svgName];

    // Omit Svg props to avoid warnings.
    let svgSpanProps = _.extend({}, _.omit(this.props, svgPropsToOmit));

    if (svgString) {
      let svgStringWithClass = setSvgClass(svgString, svgClass);

      return (
        <span {...svgSpanProps} dangerouslySetInnerHTML={{ __html: svgStringWithClass }} />
      );
    } else {
      return (
        <span {...svgSpanProps} >
          <svg className={svgClass} />
        </span>
      );
    }
  }
}
