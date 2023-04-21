import {SubNavigationConnected} from '@coveord/plasma-react';

const Demo = () => {
    const exampleItems = [
        {label: 'Avatar', id: 'avatar'},
        {label: 'Titanic', id: 'titanic'},
        {label: 'Star Wars: The Force Awakens', id: 'star-wars'},
        {label: 'Jurassic World', id: 'jurasic-world'},
        {label: 'The Avengers', id: 'the-avengers'},
    ];

    return <SubNavigationConnected id="second-sub-nav" items={exampleItems} defaultSelected="star-wars" />;
};
export default Demo;
