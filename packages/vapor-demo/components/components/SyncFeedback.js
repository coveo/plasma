import * as VaporSVG from 'coveo-styleguide';
import Svg from '../Svg';

export const SyncFeedback = () => (
    <>
        <div className='sync-feedback'>
            <span className='status-dot syncing sync-feedback-icon' />
            <span className='sync-feedback-text'>Saving changes...</span>
        </div>

        <div className='sync-feedback mod-success mt2'>
            <span className='sync-feedback-icon'>
                <Svg name={VaporSVG.svg.check.name} className='icon' />
            </span>
            <span className='sync-feedback-text'>Changes saved</span>
        </div>

        <div className='sync-feedback mod-error mt2'>
            <span className='sync-feedback-icon'>
                <Svg name={VaporSVG.svg.close.name} className='icon' />
            </span>
            <span className='sync-feedback-text'>Changes could not be saved.</span>
        </div>
    </>
);
export default SyncFeedback;
