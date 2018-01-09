import * as React from 'react';
import Slider, {createSliderWithTooltip, Range} from 'rc-slider';
import 'rc-slider/assets/index.css';

export class SliderExamples extends React.Component<any, any> {

  render() {
    const SliderWithTooltip = createSliderWithTooltip(Slider);

    const style = {width: 600, margin: 25};
    return (
      <div className='mt2'>
        <h1 className='text-blue mb1 bold'>Slider List</h1>
        <div className='form-group'>
          <label className='form-control-label'>Default Slider</label>
          <div className='form-control'>
            <div style={style}>
              <Slider className='vapor-slider'/>
            </div>
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Slider with default value</label>
          <div className='form-control'>
            <div style={style}>
              <Slider className='vapor-slider'
                      defaultValue={20}
              />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Slider with marks</label>
          <div className='form-control'>
            <div style={style}>
              <Slider className='vapor-slider'
                      marks={{
                        0: 'Lower',
                        50: 'Middle',
                        100: 'Higher',
                      }}
              />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Slider with tooltip</label>
          <div className='form-control'>
            <div style={style}>
              <SliderWithTooltip
                className='vapor-slider'
                tipProps={{
                  overlayClassName: 'vapor-slider-overlay',
                  visible: true,
                  defaultVisible: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
