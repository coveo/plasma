import Component from '../components/Component';
import Layout from '../layouts/Layout';
import Picker from '../components/filtering/FilterPicker';
import Headings from '../components/typography/Headings';
import Colors from '../components/typography/Colors';
import Utilities from '../components/typography/Utilities';
import Lists from '../components/typography/Lists';
import LineHeight from '../components/typography/LineHeight';

const Typography = () => {
    return (
        <Layout>
            <Component
                id="headings"
                title="Headings"
                usage="All HTML headings, `h1` through `h6`, are available."
                stylesheet="scss/typography/headings.scss"
                withSource
            >
                <Headings />
            </Component>

            <Component
                id="colors"
                title="Colors"
                usage="Use this suite of color utilities for text colors."
                stylesheet="scss/common/palette.scss"
                withSource
            >
                <Colors />
            </Component>

            <Component
                id="utilities"
                title="Utilities"
                usage="Change typographic weights, styles, and alignment with these utility classes."
                stylesheet="scss/typography/utility.scss"
                withSource
            >
                <Utilities />
            </Component>

            <Component
                id="lists"
                title="Lists"
                usage="Apply styles to unordered and ordered lists"
                stylesheet="scss/typography/lists.scss"
                withSource
            >
                <Lists />
            </Component>

            <Component
                id="line-height"
                title="Line-height"
                usage="Change line-height for headings and paragraph."
                stylesheet="scss/typography/line-height.scss"
                withSource
            >
                <LineHeight />
            </Component>
        </Layout>
    );
};

export default Typography;
