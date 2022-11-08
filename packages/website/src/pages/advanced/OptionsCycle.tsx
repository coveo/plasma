import {OptionsCycleConnectedMetadata} from '@coveord/plasma-components-props-analyzer';

import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import {OptionsCycleConnected} from '@coveord/plasma-react';

    export default () => <OptionsCycleConnected id="Cycle-1" options={['Option 1', 'Option 2', 'Option 3', 'Option 4']} />;
`;

const buttonStyle = `
    import {OptionsCycleConnected} from '@coveord/plasma-react';

    export default () => (
        <OptionsCycleConnected 
            id="Cycle-1" 
            options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
            previousClassName="btn mod-border w4 center"
            buttonClassName="btn ml1"
            nextClassName="btn mod-border ml1 w4 center"
        />
    );
`;

export default () => (
    <PageLayout
        id="OptionsCycle"
        title="Options Cycle"
        section="Advanced"
        description="Allows to cycle through an ordered list of options using right-left arrow buttons."
        componentSourcePath="/optionsCycle/OptionsCycle.tsx"
        code={code}
        propsMetadata={OptionsCycleConnectedMetadata}
        examples={{
            buttonStyle: {code: buttonStyle, title: 'Styles like the Button'},
        }}
    />
);
