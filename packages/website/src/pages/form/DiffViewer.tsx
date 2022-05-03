import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
import {DiffViewer} from '@coveord/plasma-react';

export default () => {
    const oldValue = JSON.stringify({
        hello: "world",
        those: ["are", "some", "words"]
    }, null, 2);
    const newValue = JSON.stringify({
        hello: "world",
        those: ["are", "some", "great", "words"],
        aNewProperty: 5
    }, null, 2);
    return (
        <DiffViewer oldValue={oldValue} newValue={newValue} />
    );
};
`;

const unified = `
import {DiffViewer} from '@coveord/plasma-react';

export default () => {
    const oldValue = JSON.stringify({
        hello: "world",
        those: ["are", "some", "words"]
    }, null, 2);
    const newValue = JSON.stringify({
        hello: "world",
        those: ["are", "some", "great", "words"],
        aNewProperty: 5
    }, null, 2);
    return (
        <DiffViewer oldValue={oldValue} newValue={newValue} splitView={false} />
    );
};
`;

const noChanges = `
import {DiffViewer} from '@coveord/plasma-react';

export default () => {
    const oldValue = JSON.stringify({
        hello: "world",
        those: ["are", "some", "words"]
    }, null, 2);
    const newValue = JSON.stringify({
        hello: "world",
        those: ["are", "some", "words"]
    }, null, 2);
    return (
        <DiffViewer
            oldValue={oldValue}
            newValue={newValue}
            noChangesLabel={"No changes"}
            noChangesDescription={"There are no changes to display since oldValue and newValues are equal"}
        />
    );
};
`;

export default () => (
    <PageLayout
        id="DiffViewer"
        title="Diff Viewer"
        section="Form"
        description="A diff viewer allows users to compare code files by showing them side by side and highlighting differences between them."
        componentSourcePath="/diffViewer/DiffViewer.tsx"
        code={code}
        examples={{
            unified: {code: unified, title: 'Unified View'},
            noChanges: {code: noChanges, title: 'Equal Values'},
        }}
    />
);
