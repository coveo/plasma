import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import {TargetSize16Px} from '@coveord/plasma-react-icons';

    export default () => (
        <a className="link" href="/foundations/Links">
            Link <TargetSize16Px height={16} />
        </a>
    );
`;

const disabledLink = `
    import {TargetSize16Px} from '@coveord/plasma-react-icons';

    export default () => (
        <a className="link disabled" href="/foundations/Links">
            Link <TargetSize16Px height={16} />
        </a>
    );
`;

const buttonLink = `
    import {TargetSize16Px} from '@coveord/plasma-react-icons';

    export default () => (
        <button className="link" onClick={() => alert('The button was clicked')}>
            Link <TargetSize16Px height={16} />
        </button>
    );
`;

export const Links = () => (
    <PageLayout
        id="Links"
        code={code}
        section="Foundations"
        title="Links"
        thumbnail="links"
        withPropsTable={false}
        description="A link is a navigational element that guides users to external resources or other sections of the product."
        sourcePath="packages/style/scss/elements/links.scss"
        examples={{
            disabledLink: {code: disabledLink, title: 'Disabled'},
            buttonLink: {code: buttonLink, title: 'A button disguised as a link'},
        }}
    />
);
export default Links;
