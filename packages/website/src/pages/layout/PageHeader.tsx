import code from '@examples/Header/main.example.tsx';
import loading from '@examples/Header/loading.example.tsx';
import React from 'react';

import {PageLayout} from '../../building-blocs/PageLayout';

export const PageHeaderExamples = () => (
    <PageLayout
        id="BasicHeader"
        componentSourcePath="/headers/BasicHeader.tsx"
        title="Page header"
        section="Layout"
        description="A page header informs a user of the section of the product they are currently in. It includes a breadcrumb and optional tabs."
        thumbnail="header"
        code={code}
        examples={{
            loading: {code: loading, title: 'Loading'},
        }}
    />
);
export default PageHeaderExamples;
