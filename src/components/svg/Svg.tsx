import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import {extend, omit} from 'underscore';
import {camelize} from 'underscore.string';

export interface ISvgTagProps {
    svgClass?: string;
    svgName: string;
}

export interface ISvgProps extends ISvgTagProps, React.HTMLAttributes<HTMLSpanElement> {}

const svgPropsToOmit = keys<ISvgTagProps>();

export class Svg extends React.Component<ISvgProps> {
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
