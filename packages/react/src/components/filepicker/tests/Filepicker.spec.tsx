import {mount} from 'enzyme';
import {shallowWithState} from '@helpers/enzyme-redux';
import {act} from 'react-dom/test-utils';

import {getStoreMock} from '../../../utils/tests/TestUtils';
import {Svg} from '../../svg';
import {FilepickerProps} from '../Filepicker';
import {FilepickerActions} from '../FilepickerActions';
import {FilepickerSelectors} from '../FilepickerSelectors';

describe('Filepicker', () => {
    const basicProps: FilepickerProps = {
        id: '🐟',
    };
    const now = new Date().valueOf();

    it('should render and unmount without throwing errors', () => {
        expect(() => {
            const filepicker = shallowWithState(<Filepicker {...basicProps} />, {filepickers: {}})
                .dive()
                .dive();
            filepicker.unmount();
        }).not.toThrow();
    });

    it('should render an input of type "file"', () => {
        const filepicker = shallowWithState(<Filepicker {...basicProps} />, {filepickers: {}})
            .dive()
            .dive()
            .children()
            .first();

        expect(filepicker.type()).toBe('input');
        expect(filepicker.prop('type')).toBe('file');
    });

    it('should render the placeholder in the input label when no file is selected', () => {
        jest.spyOn(FilepickerSelectors, 'isEmpty').mockReturnValue(true);
        const inputLabel = shallowWithState(<Filepicker {...basicProps} placeholder="🔥" />, {filepickers: {}})
            .dive()
            .dive()
            .children()
            .last();

        expect(inputLabel.text()).toBe('🔥');
    });

    it('should add the filepicker in the state on mount', () => {
        const store = getStoreMock({filepickers: {}});
        const addFilepickerSpy = jest.spyOn(FilepickerActions, 'add');
        act(() => {
            mount(
                <Provider store={store}>
                    <Filepicker {...basicProps} />
                </Provider>
            );
        });

        expect(addFilepickerSpy).toHaveBeenCalledTimes(1);
    });

    it('should remove the filepicker from the state on unmount', () => {
        const store = getStoreMock({filepickers: {}});
        const clearFilepickerSpy = jest.spyOn(FilepickerActions, 'clear');
        const filepicker = mount(
            <Provider store={store}>
                <Filepicker {...basicProps} />
            </Provider>
        );
        filepicker.unmount();

        expect(clearFilepickerSpy).toHaveBeenCalledTimes(1);
    });

    it('should set the selected file metadata in the state when it changes in the input', () => {
        const setFileMetadataSpy = jest.spyOn(FilepickerActions, 'setFile');
        const filepicker = shallowWithState(<Filepicker {...basicProps} />, {filepickers: {}})
            .dive()
            .dive()
            .children()
            .first();

        filepicker.prop('onChange')({
            target: {files: [new File(['content of my file'], 'my file', {type: 'text/plain', lastModified: now})]},
        });

        expect(setFileMetadataSpy).toHaveBeenCalledTimes(1);
        expect(setFileMetadataSpy).toHaveBeenCalledWith(basicProps.id, {
            name: 'my file',
            type: 'text/plain',
            size: 18,
            lastModified: now,
        });
    });

    it('should render a clear button when a file is selected', () => {
        jest.spyOn(FilepickerSelectors, 'isEmpty').mockReturnValue(false);
        const cancelButton = shallowWithState(<Filepicker {...basicProps} />, {filepickers: {}})
            .dive()
            .dive()
            .find(Svg);

        expect(cancelButton.exists()).toBe(true);
    });

    it('should not render a clear button when no file is selected', () => {
        jest.spyOn(FilepickerSelectors, 'isEmpty').mockReturnValue(true);
        const cancelButton = shallowWithState(<Filepicker {...basicProps} />, {filepickers: {}})
            .dive()
            .dive()
            .find(Svg);

        expect(cancelButton.exists()).toBe(false);
    });

    it('should set the selected file to null in the state when clicking on the clear button', () => {
        const setFileMetadataSpy = jest.spyOn(FilepickerActions, 'setFile');
        jest.spyOn(FilepickerSelectors, 'isEmpty').mockReturnValue(false);
        const cancelButton = shallowWithState(<Filepicker {...basicProps} />, {filepickers: {}})
            .dive()
            .dive()
            .find(Svg);

        setFileMetadataSpy.mockReset();
        cancelButton.prop('onClick')(
            (new MouseEvent('click') as unknown) as React.MouseEvent<HTMLSpanElement, MouseEvent>
        );

        expect(setFileMetadataSpy).toHaveBeenCalledTimes(1);
        expect(setFileMetadataSpy).toHaveBeenCalledWith(basicProps.id, null);
    });
});
