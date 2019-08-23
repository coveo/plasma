import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';

const withSvgClass = (svgString: string, svgClass: string) => {
    return svgString.replace('<svg ', `<svg className='${svgClass}' `);
};

export const Svg: React.FunctionComponent<
    {name: string; svgClass?: string} & React.HTMLAttributes<HTMLSpanElement>
> = ({name, svgClass = '', ...props}) => {
    if (VaporSVG.svg[name]) {
        const html = withSvgClass(VaporSVG.svg[name].svgString, svgClass);

        return <span {...props} dangerouslySetInnerHTML={{__html: html}} />;
    }

    console.error(`SVG ${name} doesn't exists in Vapor`);

    return null;
};

export default Svg;
