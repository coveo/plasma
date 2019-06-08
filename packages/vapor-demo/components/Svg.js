import * as VaporSVG from 'coveo-styleguide';

export const Svg = ({name, ...props}) => {
    if (VaporSVG.svg[name]) {
        return (
            <span {...props} dangerouslySetInnerHTML={{__html: VaporSVG.svg[name].svgString}} />
        )
    }

    console.error(`SVG ${name} doesn't exists in Vapor`);

    return null;
};
export default Svg;
