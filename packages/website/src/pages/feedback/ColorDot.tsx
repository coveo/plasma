import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    export default () => (
        <>
            <span className="inline-flex label">
                <i className="color-dot mr1" />
                Success
            </span>
        </>
    );
`;

const size = `
    export default () => (
        <>
            <i className="color-dot mr1" />
            <i className="color-dot state-critical mr1" />
            <i className="color-dot state-major mr1" />
            <i className="color-dot state-minor mr1" />
            <i className="color-dot state-warning mr1" />
            <i className="color-dot state-info mr1" />
            <i className="color-dot state-disabled mr1" />
            <i className="color-dot state-waiting mr1" />
            <i className="color-dot state-new mr1" />
            <i className="color-dot state-maintenance mr1" />
            <br></br>
            <br></br>
            <i className="color-dot mod-small mr1" />
            <i className="color-dot mod-small state-critical mr1" />
            <i className="color-dot mod-small state-major mr1" />
            <i className="color-dot mod-small state-minor mr1" />
            <i className="color-dot mod-small state-warning mr1" />
            <i className="color-dot mod-small state-info mr1" />
            <i className="color-dot mod-small state-disabled mr1" />
            <i className="color-dot mod-small state-waiting mr1" />
            <i className="color-dot mod-small state-new mr1" />
            <i className="color-dot mod-small state-maintenance" />
        </>
    );
`;

const executing = `
    export default () => (
        <>
            <i className="color-dot state-executing mr1" />
            <i className="color-dot state-executing state-critical mr1" />
            <i className="color-dot state-executing state-major mr1" />
            <i className="color-dot state-executing state-minor mr1" />
            <i className="color-dot state-executing state-warning mr1" />
            <i className="color-dot state-executing state-info mr1" />
            <i className="color-dot state-executing state-disabled mr1" />
            <i className="color-dot state-executing state-waiting mr1" />
            <i className="color-dot state-executing state-new mr1" />
            <i className="color-dot state-executing state-maintenance" />
        </>
    );
`;

export const ColorDotsExamples = () => (
    <PageLayout
        id="ColorDot"
        sourcePath="packages/style/scss/elements/color-dot.scss"
        title="Color dot"
        section="Feedback"
        withPropsTable={false}
        description="A color dot indicates the status of an item."
        thumbnail="placeholder"
        code={code}
        examples={{
            size: {code: size, title: 'Color dots sizes'},
            executing: {code: executing, title: 'Flashing color dots'},
        }}
    />
);

export default ColorDotsExamples;
