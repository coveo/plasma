import React from 'react';
import {Tile} from 'react-vapor';

const Home: React.FC = () => (
    <div>
        <h2>Plasma</h2>
        <Tile
            title="Patate King"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel justo sit amet tortor aliquam. Patate King is a God. 🥔"
            svgName="plasmaComponentBox"
            href="#/styles/icons/list"
        />
    </div>
);

export default Home;
