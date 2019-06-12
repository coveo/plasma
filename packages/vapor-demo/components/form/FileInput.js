import * as VaporSVG from 'coveo-styleguide';
import Svg from '../Svg';

export default function FileInput() {
    return (
        <div className="coveo-form">
            <div className='form-group'>
                <div className="file-input">
                    <div className="input-field file-path-wrapper">
                        <input className="file-path" required placeholder="Placeholder text" type="text" />
                        <label>File input</label>
                        <span className="hidden clear-file" title="Clear file">
                            <Svg name={VaporSVG.svg.clear.name} className='icon fill-medium-grey' />
                        </span>
                    </div>
                    <div className="btn">
                        <span>Choose file</span>
                        <input type="file"/>
                    </div>
                </div>
            </div>

            <div className='form-group'>
                <div className="file-input">
                    <div className="input-field file-path-wrapper">
                        <input className="file-path has-file" required placeholder="Placeholder text" type="text" value="path/to/file.js" />
                        <label>File input</label>
                        <span className="clear-file" title="Clear file">
                            <Svg name={VaporSVG.svg.clear.name} className='icon fill-medium-grey' />
                        </span>
                    </div>
                    <div className="btn">
                        <span>Choose file</span>
                        <input type="file"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
