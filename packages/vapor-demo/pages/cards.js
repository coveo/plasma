import Component from '../components/Component';
import Layout from '../layouts/Layout';
import Flippable from '../components/cards/Flippable';
import Home from '../components/cards/Home';
import Logo from '../components/cards/Logo';
import Limit from '../components/cards/Limit';
import Material from '../components/cards/Material';
import Wizard from '../components/cards/Wizard';

const Cards = () => {

    return (
        <Layout>
            <Component
                key='flippable'
                id='flippable'
                title="Flippable"
                usage='A compact and interactive way of displaying content'
                stylesheet="scss/components/flippable.scss"
                withSource
            >
                <Flippable />
            </Component>

            <Component
                key='home'
                id='home'
                title="Home"
                stylesheet="scss/components/home-card.scss"
                withSource
            >
                <Home />
            </Component>

            <Component
                key='logo'
                id='logo'
                title="Logo"
                usage='Logo driven way of displaying information'
                stylesheet="scss/components/logo-card.scss"
                withSource
            >
                <Logo />
            </Component>

            <Component
                key='limit'
                id='limit'
                title="Limit"
                usage='Visually show the usage of a limit'
                stylesheet="scss/components/limit-box.scss"
                withSource
            >
                <Limit />
            </Component>

            <Component
                key='material'
                id='material'
                title="Material"
                usage='A container to display content'
                stylesheet="scss/components/material-card.scss"
                withSource
            >
                <Material />
            </Component>

            <Component
                key='wizard'
                id='wizard'
                title="Wizard"
                usage='Use it with configuration wizards'
                stylesheet="scss/components/wizard-card.scss"
                withSource
            >
                <Wizard />
            </Component>
        </Layout>
    );
};

export default Cards;
