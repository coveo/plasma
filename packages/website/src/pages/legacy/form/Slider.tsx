import {SliderMetadata} from '@coveord/plasma-components-props-analyzer';
import code from '@examples/Slider/Slider.example.tsx';
import append from '@examples/Slider/SliderAppend.example.tsx';
import asymetric from '@examples/Slider/SliderAsymetric.example.tsx';
import onChange from '@examples/Slider/SliderOnChange.example.tsx';

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
