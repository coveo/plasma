import {SubNavigationConnected} from '@coveord/plasma-react';

const Demo = () => {
    const exampleItems = [
        {label: 'Avatar', id: 'avatar'},
        {label: 'Titanic', id: 'titanic'},
        {label: 'The Avengers', id: 'the-avengers'},
        {label: 'Banana', id: 'banana'},
    ];

    return <SubNavigationConnected id="first-sub-nav" items={exampleItems} />;
};
export default Demo;
