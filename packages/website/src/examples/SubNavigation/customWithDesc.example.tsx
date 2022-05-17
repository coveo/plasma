import {SubNavigationConnected} from '@coveord/plasma-react';

export default () => {
    const exampleItems = [
        {label: <h3>H3 React Node</h3>, id: 'react-node'},
        {label: 'Gummies', id: 'gummies'},
        {
            label: 'Cupcake',
            id: 'cupcake',
            description:
                'Cupcake ipsum dolor sit amet. Lemon drops croissant sesame snaps cookie jelly beans tootsie roll muffin. Liquorice liquorice fruitcake tiramisu sesame snaps sugar plum lollipop gummi bears cookie',
        },
        {label: 'Chocolate', id: 'chocolate'},
        {label: 'Banana', id: 'banana'},
    ];

    return <SubNavigationConnected id="first-sub-nav" items={exampleItems} />;
};
