import * as VaporSVG from 'coveo-styleguide';
import Svg from '../Svg';

export const ColorModifiers = () => (
    <>
        <div className='mb1'>
            <button type="button" className="btn">
                Default
                <Svg name={VaporSVG.svg.arrowRight.name} className='icon' />
            </button>
            <button type="button" className="btn" disabled>
                Disabled
                <Svg name={VaporSVG.svg.arrowRight.name} className='icon' />
            </button>
        </div>


        <div className='mb1'>
            <button type="button" className="btn mod-primary">
                mod-primary
                <Svg name={VaporSVG.svg.arrowRight.name} className='icon' />
            </button>
            <button type="button" className="btn mod-primary" disabled>
                mod-primary disabled
                <Svg name={VaporSVG.svg.arrowRight.name} className='icon' />
            </button>
        </div>


        <div className='mb1'>
            <button type="button" className="btn mod-danger">
                mod-danger
                <Svg name={VaporSVG.svg.arrowRight.name} className='icon' />
            </button>
            <button type="button" className="btn mod-danger" disabled>
                mod-danger disabled
                <Svg name={VaporSVG.svg.arrowRight.name} className='icon' />
            </button>
        </div>

        <div className='mb1'>
            <button type="button" className="btn mod-link">
                mod-link
                <Svg name={VaporSVG.svg.arrowRight.name} className='icon' />
            </button>
            <button type="button" className="btn mod-link" disabled>
                mod-link disabled
                <Svg name={VaporSVG.svg.arrowRight.name} className='icon' />
            </button>
        </div>
    </>
);
export default ColorModifiers;
