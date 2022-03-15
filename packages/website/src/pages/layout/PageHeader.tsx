import React from 'react';

import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import * as React from 'react';
    import {BasicHeader} from '@coveord/plasma-react';

    export default () => (
        <BasicHeader
            title={{
                text: 'Charmeleon title'
            }}
            description="Simple description for the title"
            tabs={[
                {groupId: 'example1', id: 'tab1', title: 'Digimon'},
                {groupId: 'example1', id: 'tab2', title: 'Beyblade'},
                {groupId: 'example1', id: 'tab3', title: 'Pokemon'},
            ]}
        />
    );
`;

export const PageHeaderExamples = () => (
    <PageLayout
        id="BasicHeader"
        componentSourcePath="/headers/BasicHeader.tsx"
        title="Page header"
        section="Layout"
        description="A page header informs a user of the section of the product they are currently in. It includes a breadcrumb and optional tabs."
        thumbnail="header"
        code={code}
    />
);
export default PageHeaderExamples;
