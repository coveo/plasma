import classNames from 'classnames';
import * as VaporSVG from 'coveo-styleguide';
import * as React from 'react';
import {connect} from 'react-redux';

import {IReactVaporState} from '../../ReactVaporState';
import {IDispatch} from '../../utils';
import {FileMetadata, FileUtils} from '../../utils/FileUtils';
import {Svg} from '../svg';
import {FilepickerActions} from './FilepickerActions';
import {FilepickerSelectors} from './FilepickerSelectors';

export interface FilepickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
}

const mapStateToProps = (state: IReactVaporState, ownProps: FilepickerProps) => ({
    selectedFile: FilepickerSelectors.getFileMetadata(state, ownProps),
    isEmpty: FilepickerSelectors.isEmpty(state, ownProps),
});

const mapDispatchToProps = (dispatch: IDispatch, {id}: FilepickerProps) => ({
    addFilepicker: () => dispatch(FilepickerActions.add(id)),
    setFile: (file: FileMetadata) => dispatch(FilepickerActions.setFile(id, file)),
    clear: () => dispatch(FilepickerActions.clear(id)),
});

const FilepickerDisconnected: React.FunctionComponent<
    FilepickerProps & ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>
> = (props) => {
    const {addFilepicker, setFile, clear, isEmpty, selectedFile, placeholder, capture, ...inputProps} = props;
    const input = React.useRef<HTMLInputElement>();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(FileUtils.serialize(e.target.files[0]));
    };

    const handleClear = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
        setFile(null);
        if (input.current) {
            input.current.value = null;
        }
    };

    React.useEffect(() => {
        addFilepicker();
        return void clear;
    }, []);

    return (
        <>
            <input
                ref={input}
                type="file"
                {...inputProps}
                capture={capture as any}
                className="filepicker"
                onChange={handleChange}
            />
            <label htmlFor={props.id} className={classNames('btn', {'mod-append reset-text-transform': !isEmpty})}>
                {selectedFile?.name ?? placeholder}
                {!isEmpty && (
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

export const Filepicker = connect(mapStateToProps, mapDispatchToProps)(FilepickerDisconnected);
