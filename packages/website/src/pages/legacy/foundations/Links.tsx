import ButtonLinkDemo from '@examples/legacy/foundations/Links/ButtonLink.demo.tsx';
import LinkDemo from '@examples/legacy/foundations/Links/Link.demo.tsx';
import LinkDisabledDemo from '@examples/legacy/foundations/Links/LinkDisabled.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const Links = () => (
    <PageLayout
        id="Links"
        demo={<LinkDemo center />}
        section="Foundations"
        title="Links"
        thumbnail="links"
        withPropsTable={false}
        description="A link is a navigational element that guides users to external resources or other sections of the product."
        sourcePath="/packages/style/scss/elements/links.scss"
        examples={{
            disabledLink: <LinkDisabledDemo center title="Disabled" />,
            buttonLink: <ButtonLinkDemo center title="A button disguised as a link" />,
        }}
    />
);
export default Links;
