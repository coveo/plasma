import {SubNavigationConnected} from '@coveord/plasma-react';

export default () => {
    const exampleItems = [
        {label: <h3>H3 React Node</h3>, id: 'react-node'},
        {
            label: 'Gummies',
            id: 'gummies',
            description:
                'Brownie cheesecake brownie shortbread toffee. Candy danish gingerbread cake powder cake. Marzipan marzipan sweet roll apple pie cupcake lollipop.',
        },
        {
            label: 'Cupcake',
            id: 'cupcake',
            description:
                'Cupcake ipsum dolor sit amet. Lemon drops croissant sesame snaps cookie jelly beans tootsie roll muffin. Liquorice liquorice fruitcake tiramisu sesame snaps sugar plum lollipop gummi bears cookie',
        },
        {label: 'Chocolate', id: 'chocolate'},
        {
            label: 'Banana',
            id: 'banana',
            description:
                'Sweet lollipop toffee donut candy brownie shortbread icing pudding. Caramels ice cream dragée lemon drops soufflé cotton candy cheesecake. Toffee apple pie pastry gummi bears danish.',
        },
    ];

    return <SubNavigationConnected id="first-sub-nav" items={exampleItems} />;
};
