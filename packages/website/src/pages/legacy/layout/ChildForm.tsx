import {PageLayout} from '../../../building-blocs/PageLayout';

const code = `
    import {ChildForm} from '@coveord/plasma-react';

    export default () => (
        <>
            Parent
            <ChildForm>Child</ChildForm>
        </>
    );
`;

const vertical = `
    import {ChildForm} from '@coveord/plasma-react';

    export default () => (
        <div className="inline-flex center-align">
            Parent
            <ChildForm className="vertical">Child</ChildForm>
        </div>
    );
`;

const ChildFormExamples = () => (
    <PageLayout
        id="ChildForm"
        title="Child Form"
        section="Layout"
        description="A child form associates a subset of options or content to its parent option."
        componentSourcePath="/childForm/ChildForm.tsx"
        code={code}
        examples={{
            vertical: {code: vertical, title: 'Vertical'},
        }}
    />
);

export default ChildFormExamples;
