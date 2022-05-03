import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import {LabeledValue} from '@coveord/plasma-react';

    export default () => (
        <LabeledValue label="Super cool label" value="Value under the super cool label" />
    );
`;

const withInformation = `
    import {LabeledValue, TooltipPlacement} from '@coveord/plasma-react';

    export default () => (
        <LabeledValue 
            label="Super cool label" 
            value="Value under the super cool label" 
            information={'Some valuable informations go here.'}
            informationPlacement={TooltipPlacement.Bottom} 
        />
    );
`;

const fullRow = `
    import {LabeledValue} from '@coveord/plasma-react';

    export default () => (
        <div className="flex flex-wrap">
            <LabeledValue label="Super cool label taking the full row" value="Value under the super cool label" fullRow/>
            <LabeledValue label="Too much bubbly debat at the office" value="WE ARE TWO" />
            <LabeledValue label="Buddy" value="TO DANCE" />
        </div>
    );
`;

const LabeledValueExamples = () => (
    <PageLayout
        id="LabeledValue"
        componentSourcePath="/labeledValue/LabeledValue.tsx"
        title="Labeled value"
        section="Layout"
        thumbnail="placeholder"
        code={code}
        examples={{
            withInformation: {code: withInformation, title: 'With more information (tooltip)'},
            fullRow: {code: fullRow, title: 'With fullRow option'},
        }}
    />
);

export default LabeledValueExamples;
