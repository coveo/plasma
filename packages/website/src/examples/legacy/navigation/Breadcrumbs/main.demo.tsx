import {BreadcrumbHeader} from '@coveord/plasma-react';

const Demo = () => (
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
export default Demo;
