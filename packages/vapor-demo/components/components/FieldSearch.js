import * as VaporSvg from 'coveo-styleguide';
import Svg from '../Svg';

export const FieldSearch = () => (
    <>
        <div className="mb2">
            <div className='search-bar' style={{width: 500}}>
                <input type='text' className='search-bar-input' placeholder="Search awesome things" />
                <div className='search-bar-icon-container'>
                    <Svg name={VaporSvg.svg.search.name} />
                </div>
            </div>
        </div>

        <div className="mb2">
            <div className='search-bar search-bar-disabled' style={{width: 500}}>
                <input type='text' className='search-bar-input' placeholder="Search bar disabled. You cannot search awesome things yet." disabled />
                <div className='search-bar-icon-container'>
                    <Svg name={VaporSvg.svg.search.name} />
                </div>
            </div>
        </div>

        <div>
            <div className='search-bar search-bar-loading' style={{width: 500}}>
                <input type='text' className='search-bar-input' placeholder="Currently searching..." />
                <div className='search-bar-icon-container'>
                    <div className='search-bar-spinner' />
                </div>
            </div>
        </div>
    </>
);
export default FieldSearch;
