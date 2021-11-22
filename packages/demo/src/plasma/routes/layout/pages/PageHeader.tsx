import React from 'react';
import {BasicHeader, Section} from 'react-vapor';
import {defaultTitle, actions} from '../../../example-utils/ExamplesUtils';

export const SimpleHeader: React.FunctionComponent = () => (
    <Section title="Simple Header">
        <Section level={2} title="Basic header with actions and tabs">
            <BasicHeader
                title={defaultTitle}
                description="Simple description for the title"
                actions={actions}
                tabs={[
                    {groupId: 'example1', id: 'tab1', title: 'Digimon'},
                    {groupId: 'example1', id: 'tab2', title: 'Beyblade'},
                    {groupId: 'example1', id: 'tab3', title: 'Pokemon'},
                    {groupId: 'example1', id: 'tab4', title: 'Perdu', url: 'http://www.perdu.com'},
                ]}
            />
        </Section>
    </Section>
);
