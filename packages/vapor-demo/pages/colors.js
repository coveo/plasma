import Component from '../components/Component';
import Layout from '../layouts/Layout';

const Cards = () => {
    return (
        <Layout>
            <Component
                id="palette"
                title="Palette"
                usage="A compact and interactive way of displaying content"
                stylesheet="scss/common/palette.scss"
            >
                <div className="spaced-boxes-container flex flex-wrap">
                    <a href="http://react-vapor.surge.sh/#Colors" className="h3" target="blank">
                        See colors usage and guidelines
                    </a>
                </div>
            </Component>
        </Layout>
    );
};

export default Cards;
