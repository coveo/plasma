import {DiffViewer} from '@coveord/plasma-react';

const Demo = () => {
    const diffText = ``;

    return (
        <DiffViewer
            difference={diffText}
            noChangesLabel={'No changes'}
            noChangesDescription={'There are no changes to display since oldValue and newValues are equal'}
        />
    );
};
export default Demo;
