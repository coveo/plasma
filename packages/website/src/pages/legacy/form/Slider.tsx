import {SliderMetadata} from '@coveord/plasma-components-props-analyzer';
import code from '@examples/legacy/form/Slider/Slider.demo.tsx';
import append from '@examples/legacy/form/Slider/SliderAppend.demo.tsx';
import asymetric from '@examples/legacy/form/Slider/SliderAsymetric.demo.tsx';
import onChange from '@examples/legacy/form/Slider/SliderOnChange.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="Slider"
        title="Slider"
        section="Form"
        description="A slider offers a quick and visual way for users to select a value within a given range."
        componentSourcePath="/slider/Slider.tsx"
        code={code}
        propsMetadata={SliderMetadata}
        examples={{
            asymetric: {code: asymetric, title: 'Asymetric'},
            onChange: {code: onChange, title: 'Change handler'},
            append: {code: append, title: 'Append values'},
        }}
    />
);
