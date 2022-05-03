import {svg as Icons, SvgName} from '@coveord/plasma-style';
import {HTMLAttributes, FunctionComponent} from 'react';

export interface ISvgTagProps {
    /**
     * CSS classes that the svg element has
     */
    svgClass?: string;
    /**
     * The name of the svg image to display
     */
    svgName: SvgName;
}

export interface ISvgProps extends ISvgTagProps, HTMLAttributes<HTMLSpanElement> {}

export const Svg: FunctionComponent<ISvgProps> = ({svgClass = '', svgName, ...props}) => {
    const setSvgClass = (svgStr: string): string =>
        svgStr
            .replace('<svg ', `<svg class="${svgClass}" role="img" aria-label="${svgName} icon" `)
            .replace('<svg>', `<svg class="${svgClass}">`);

    if (Icons[svgName]) {
        return <span {...props} dangerouslySetInnerHTML={{__html: setSvgClass(Icons[svgName].svgString)}} />;
    }

    return (
        <span {...props}>
            <svg className={svgClass} aria-label={`icon-${svgName}`} />
        </span>
    );
};
