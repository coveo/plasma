import {Section} from '@coveord/plasma-react';
import {NextPage} from 'next';
import Head from 'next/head';

import {Button} from './Button';
import {Form} from './Form';
import {Typography} from './Typography';

const Index: NextPage = () => (
    <Section className="home flex-auto overflow-auto">
        <Head>
            <title>Mantine components with the Plasmantine theme</title>
            <meta property="og:title" content="Mantine components with the Plasmantine theme" key="title" />
        </Head>
        <div className="section intro">
            <h5 className="welcome-to">Welcome to</h5>
            <div className="page-title">Plasmantine</div>
        </div>
        <Typography />
        <Button />
        <Form />
    </Section>
);

export default Index;
