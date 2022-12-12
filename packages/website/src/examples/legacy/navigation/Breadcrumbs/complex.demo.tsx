import {BreadcrumbHeader, IBreadcrumbProps} from '@coveord/plasma-react';
import {QuestionSize24Px} from '@coveord/plasma-react-icons';

const defaultBreadcrumb: IBreadcrumbProps = {
    title: {
        text: 'Charmeleon',
        documentationLink: {
            target: '_blank',
            icon: QuestionSize24Px,
            tooltip: {
                title: "I'm a tooltip!",
                placement: 'bottom',
                container: 'body',
            },
        },
    },
    links: [
        {
            name: 'Pikachu',
            link: 'https://www.google.ca/?q=pikachu',
        },
    ],
};

export default () => (
    <BreadcrumbHeader
        breadcrumb={defaultBreadcrumb}
        description="Simple description for the title"
        tabs={[
            {groupId: 'example2', id: 'tab1', title: 'Digimon'},
            {groupId: 'example2', id: 'tab2', title: 'Beyblade'},
            {groupId: 'example2', id: 'tab3', title: 'Pokemon'},
        ]}
    />
);
