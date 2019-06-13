import * as VaporSVG from 'coveo-styleguide';

const withSvgClass = (svgString, svgClass) => {
    return svgString.replace('<svg ', `<svg class='${svgClass}' `);
};

export const Svg = ({name, svgClass = '', ...props}) => {
    if (VaporSVG.svg[name]) {
        const html = withSvgClass(VaporSVG.svg[name].svgString, svgClass);

        return <span {...props} dangerouslySetInnerHTML={{__html: html}} />;
    }

    console.error(`SVG ${name} doesn't exists in Vapor`);

    return null;
};
export default Svg;
