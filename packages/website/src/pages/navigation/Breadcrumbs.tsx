const code = `
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
`;

const complex = `
    import {BreadcrumbHeader, IBreadcrumbProps} from '@coveord/plasma-react';

    const defaultBreadcrumb: IBreadcrumbProps = {
        title: {
          text: 'Charmeleon',
          documentationLink: {
          target: '_blank',
          svg: {
            svgName: 'help',
            svgClass: 'documentation-link icon mod-20',
            className: 'flex',
          },
          tooltip: {
            title: "I'm a tooltip!",
            placement: 'bottom',
            container: 'body',
          },
        },
        },
        links: [{
          name: 'Pikachu',
          link: 'https://www.google.ca/?q=pikachu',
        }],
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
`;

const BreadcrumbsExamples = () => (
    <PageLayout
        id="BreadcrumbHeader"
        componentSourcePath="/breadcrumbs/BreadcrumbHeader.tsx"
        title="Breadcrumbs"
        section="Navigation"
        description="A breadcrumb is a secondary navigation that helps users to understand the hierarchy of interfaces and navigate through them."
        thumbnail="breadcrumb"
        code={code}
        examples={{complex: {code: complex, title: 'With documentation link and tabs'}}}
    />
);

export default BreadcrumbsExamples;
