import {BreadcrumbHeader} from '@coveord/plasma-react';

export default () => (
    <BreadcrumbHeader
        breadcrumb={{
            title: {
                text: 'Charmeleon',
            },
            links: [
                {
                    name: 'Pikachu',
                    link: 'https://www.google.ca/?q=pikachu',
                },
            ],
        }}
        description="Simple description for the title"
        hasBorderBottom={false}
    />
);
