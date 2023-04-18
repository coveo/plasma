import {BasicHeader} from '@coveord/plasma-react';

const Demo = () => (
    <BasicHeader
        title={{
            text: 'Charmeleon title',
        }}
        description="Simple description for the title"
        tabs={[
            {groupId: 'example1', id: 'tab1', title: 'Digimon'},
            {groupId: 'example1', id: 'tab2', title: 'Beyblade'},
            {groupId: 'example1', id: 'tab3', title: 'Pokemon'},
        ]}
    />
);
export default Demo;
