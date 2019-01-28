import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {extend, omit} from 'underscore';
import {camelize} from 'underscore.string';
import {keys} from 'ts-transformer-keys';

/**
 * Pass the required svgName to get your svg.
 * Use svgClass to pass the svg fill class (and the icon class if you didn't pass is as className).
 */
export interface ISvgProps {
    svgClass?: string;
    svgName: string;
}

/**
 * List of props that were passed to the <Svg> component but that should not be passed to the <span> element to avoid warnings.
 * @type {string[]}
 */
const svgPropsToOmit = keys<ISvgProps>();

export class Svg extends React.Component<ISvgProps & React.HTMLAttributes<HTMLSpanElement>> {
    static defaultProps: Partial<ISvgProps> = {
        svgClass: '',
    };

    private setSvgClass = (svgString: string, svgClass: string): string => {
        const parser = document.createElement('div');
        parser.innerHTML = svgString;

        (parser.children[0] as SVGElement).setAttribute('class', svgClass);

        return parser.innerHTML;
    }

    render() {
        const formattedSvgName: string = camelize(this.props.svgName);
        const svgString: string = VaporSVG.svg[formattedSvgName] && VaporSVG.svg[formattedSvgName].svgString;

        // Omit Svg props to avoid warnings.
        const svgSpanProps = extend({}, omit(this.props, svgPropsToOmit));

        if (svgString) {
            return (
                <span {...svgSpanProps} dangerouslySetInnerHTML={{__html: this.setSvgClass(svgString, this.props.svgClass)}} />
            );
        } else {
            return (
                <span {...svgSpanProps} >
                    <svg className={this.props.svgClass} />
                </span>
            );
        }
    }
}
