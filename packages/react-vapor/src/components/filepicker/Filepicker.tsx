import classNames from 'classnames';
import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';

import {Svg} from '../svg';

export interface FilepickerProps {
    id: string;
}

export const Filepicker: React.FunctionComponent<FilepickerProps & React.HTMLProps<HTMLInputElement>> = (props) => {
    const {placeholder, ...inputProps} = props;
    const [fileName, setFileName] = React.useState(null);
    const input = React.useRef<HTMLInputElement>();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFileName(e.target.files[0]?.name ?? null);
    };

    const handleClear = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
        setFileName(null);
        if (input.current) {
            input.current.value = null;
        }
    };

    return (
        <>
            <input ref={input} type="file" {...inputProps} className="filepicker" onChange={handleChange} />
            <label htmlFor={props.id} className={classNames('btn', {'mod-append': !!fileName})}>
                {fileName ?? placeholder}
                {!!fileName && (
                    <Svg
                        className="btn-append mod-icon"
                        svgName={VaporSVG.svg.clear.name}
                        svgClass="icon mod-16"
                        onClick={handleClear}
                    />
                )}
            </label>
        </>
    );
};
