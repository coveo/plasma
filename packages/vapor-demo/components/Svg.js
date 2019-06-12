import * as VaporSVG from 'coveo-styleguide';

export const Svg = ({name, svgClass = '', ...props}) => {
    if (VaporSVG.svg[name]) {

        const withSvgClass = (svgString, svgClass) => {
            if (typeof document !== 'undefined') {
                const parser = document.createElement('div');
                parser.innerHTML = svgString;

                (parser.children[0]).setAttribute('class', svgClass);

                return parser.innerHTML;
            }
            return svgString;
        };

        const html = withSvgClass(VaporSVG.svg[name].svgString, svgClass);

        return (
            <span
                {...props}
                dangerouslySetInnerHTML={{__html: html}}
            />
        )
    }

    console.error(`SVG ${name} doesn't exists in Vapor`);

    return null;
};
export default Svg;
