import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';

import {fakeJSON, fakeJSON1, JSONToString} from '../../../utils/JSONUtils';
import {BlankSlate} from '../../blankSlate/BlankSlate';
import {DiffViewer, DiffViewerProps} from '../DiffViewer';

describe('DiffViewer', () => {
    const basicProps: DiffViewerProps = {
        first: JSONToString(fakeJSON),
        second: JSONToString(fakeJSON1),
    };

    it('should render without errors', () => {
        expect(() => {
            shallow(<DiffViewer {...basicProps} />);
        }).not.toThrow();
    });

    describe('<DiffViewer />', () => {
        let diffViewer: ReactWrapper<DiffViewerProps>;

        beforeEach(() => {
            diffViewer = mount(<DiffViewer {...basicProps} />, {attachTo: document.getElementById('App')});
        });

        it('should get the orginal string for the diff as a prop', () => {
            const firstProp: string = diffViewer.props().first;

            expect(firstProp).toBe(basicProps.first);
        });

        it('should get the edited string for the diff as a prop', () => {
            const secondProp: string = diffViewer.props().second;

            expect(secondProp).toBe(basicProps.second);
        });

        it('should render the diff table from diff2html', () => {
            expect(diffViewer.html()).toContain('d2h-diff-table');
        });

        it('should display a blankslate if there are no changes', () => {
            diffViewer.setProps({...basicProps, second: basicProps.first});

            expect(diffViewer.find(BlankSlate).length).toBe(1);
        });
    });
});
