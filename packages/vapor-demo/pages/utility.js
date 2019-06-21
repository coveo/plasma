import Component from '../components/Component';
import Layout from '../layouts/Layout';
import Borders from '../components/utility/Borders';
import ColorDots from '../components/utility/ColorDot';
import Cursor from '../components/utility/Cursor';
import Hover from '../components/utility/Hover';
import SpacedBoxes from '../components/utility/SpacedBoxes';
import Transparency from '../components/utility/Transparency';
import Whitespace from '../components/utility/Whitespace';
import Shadows from '../components/utility/Shadow';

const Utility = () => {
    return (
        <Layout>
            <Component
                id="whitespace"
                title="Whitespace"
                usage={
                    <>
                        Immutable margin and padding utilities are based on a multiple of a basic spacing unit.
                        <br />
                        These can dramatically help reduce the size of large stylesheets and allow for greater
                        flexibility and quicker iteration when designing in the browser.
                        <br />
                        Those classes are available from p0 to p2 and m0 to m2.
                    </>
                }
                stylesheet="scss/utility/white-space.scss"
                withSource
            >
                <Whitespace />
            </Component>

            <Component
                id="spaced-box"
                title="Spaced box"
                usage="Simple spaced boxes container that you can use for alomost everything. Pair it with flex and flex-wrap and you get a nice container."
                stylesheet="scss/utility/white-space.scss"
                withSource
            >
                <SpacedBoxes />
            </Component>

            <Component
                id="cursor"
                title="Cursor"
                usage="Set a specific cursor style on any element."
                stylesheet="scss/utility/cursor.scss"
                withSource
            >
                <Cursor />
            </Component>

            <Component
                id="color-dots"
                title="Color dots"
                usage="Display a status.'"
                stylesheet="scss/elements/color-dot.scss"
                withSource
            >
                <ColorDots />
            </Component>

            <Component
                id="borders"
                title="Borders"
                usage="Clearly define the edge of components or layouts."
                stylesheet="sscss/utility/border.scss"
                withSource
            >
                <Borders />
            </Component>

            <Component
                id="transparency"
                title="Transparency"
                usage="Utility to modify the transparency."
                stylesheet="scss/utility/transparency.scss"
                withSource
            >
                <Transparency />
            </Component>

            <Component
                id="hover"
                title="hover"
                usage="Utility to apply hover on element."
                stylesheet="scss/utility/layout.scss"
                withSource
            >
                <Hover />
            </Component>

            <Component
                id="shadow"
                title="shadow"
                usage="Utility to apply shadow on element."
                stylesheet="scss/utility/shadow.scss"
                withSource
            >
                <Shadows />
            </Component>
        </Layout>
    );
};

export default Utility;
