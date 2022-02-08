import {svg as Icons, SvgName} from '@coveord/plasma-style';
import * as React from 'react';

export interface ISvgTagProps {
    svgClass?: string;
    svgName: SvgName;
}

export interface ISvgProps extends ISvgTagProps, React.HTMLAttributes<HTMLSpanElement> {}

export const Svg: React.FunctionComponent<ISvgProps> = ({svgClass = '', svgName, ...props}) => {
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
