import Layout from '../layouts/Layout.js';
import Overview from '../components/buttons/Overview';
import Component from '../components/Component';
import Base from '../components/buttons/Base';
import ColorModifiers from '../components/buttons/ColorModifiers';
import AppendPrepend from '../components/buttons/AppendPrepend';

const Buttons = () => {
    return (
        <Layout>
            <Component key="overview" id="overview" title="Overview">
                <Overview />
            </Component>
            <Component
                key="base"
                id="base"
                title="Base"
                usage='Base style for all buttons and links with the "btn" class.'
                stylesheet="scss/elements/btn.scss"
                withSource
            >
                <Base />
            </Component>

            <Component
                key="color-modifiers"
                id="color-modifiers"
                title="Color modifiers"
                usage="Use any of the available button classes to quickly create a styled button."
                stylesheet="/scss/elements/btn.scss"
                withSource
            >
                <ColorModifiers />
            </Component>

            <Component
                key="size-modifiers"
                id="size-modifiers"
                title="Size modifiers"
                usage="Fancy larger buttons? Use `.mod-large` for a larger button, used in our login form."
                stylesheet="/scss/elements/btn.scss"
                withSource
            >
                <button type="button" className="btn mod-small">
                    Small
                </button>
                <button type="button" className="btn">
                    Default
                </button>
                <button type="button" className="btn mod-large">
                    Large
                </button>
            </Component>

            <Component
                key="append-prepend"
                id="append-prepend"
                title="Append and Prepend"
                usage="Add text or icons before and after any button."
                stylesheet="/scss/elements/btn-prepend.scss"
                withSource
            >
                <AppendPrepend />
            </Component>

            <Component
                key="alignment"
                id="alignment"
                title="Alignment"
                usage="Show how to dispose your multiple buttons"
                stylesheet="/scss/elements/btn.scss"
                withSource
            >
                <a className="btn mod-primary">Link</a>
                <button className="btn btn-primary">Primary button</button>
                <div className="btn-container">
                    <button className="btn">Button with container</button>
                </div>
                <div className="btn-container" title="tooltip ...">
                    <a className="btn mod-primary state-disabled">Link disabled with a tooltip</a>
                </div>
                <div className="btn-container" title="tooltip ...">
                    <button className="btn" disabled>
                        Button disabled with a tooltip
                    </button>
                </div>
            </Component>
        </Layout>
    );
};

export default Buttons;
