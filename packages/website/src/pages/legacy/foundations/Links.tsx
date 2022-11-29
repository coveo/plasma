import ButtonLinkExample from '@examples/legacy/foundations/Links/ButtonLink.example.tsx';
import LinkExample from '@examples/legacy/foundations/Links/Link.example.tsx';
import LinkDisabledExample from '@examples/legacy/foundations/Links/LinkDisabled.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const Links = () => (
    <PageLayout
        id="Links"
        code={LinkExample}
        section="Foundations"
        title="Links"
        thumbnail="links"
        withPropsTable={false}
        description="A link is a navigational element that guides users to external resources or other sections of the product."
        sourcePath="packages/style/scss/elements/links.scss"
        examples={{
            disabledLink: {code: LinkDisabledExample, title: 'Disabled'},
            buttonLink: {code: ButtonLinkExample, title: 'A button disguised as a link'},
        }}
    />
);
export default Links;
