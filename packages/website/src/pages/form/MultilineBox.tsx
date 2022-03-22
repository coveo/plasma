import code from '@examples/multiline-box/MultilineBox.example.tsx';
import withContainer from '@examples/multiline-box/MultilineBoxWithContainer.example.tsx';
import withRemove from '@examples/multiline-box/MultilineBoxWithRemove.example.tsx';
import withDragAndDrop from '@examples/multiline-box/MultilineBoxWithDragAndDrop.example.tsx';
import complex from '@examples/multiline-box/MultilineBoxComplex.example.tsx';

import {PageLayout} from '../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="MultilineBox"
        title="Multiline Box"
        description="A multiline box allows users to provide multiple inputs for the same parameter. Each input appears on a different line."
        section="Form"
        code={code}
        examples={{
            withContainer: {code: withContainer, title: 'Custom container'},
            withRemove: {code: withRemove, title: 'Remove button'},
            withDragAndDrop: {code: withDragAndDrop, title: 'Drag and drop'},
            complex: {code: complex, title: 'Everything combined'},
        }}
    />
);
