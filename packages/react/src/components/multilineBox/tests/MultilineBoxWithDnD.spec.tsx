import {fireEvent, render, screen} from '@test-utils';

import {multilineBoxWithDnD} from '../hoc/MultilineBoxWithDnD';
import {MultilineBox} from '../MultilineBox';

describe('MultilineBoxWithDnD', () => {
    const MultilineBoxWithDnD = multilineBoxWithDnD()(MultilineBox);

    const dragAndDrop = (source: Element, position: number) => {
        // We must query the listitem role again on each event because it gets reordered during the drag and drop process
        const eventData: any = {dataTransfer: {files: []}};
        fireEvent.dragStart(source, eventData);
        fireEvent.dragEnter(screen.getAllByTestId('box')[position], eventData);
        fireEvent.dragOver(screen.getAllByTestId('box')[position], eventData);
        fireEvent.drop(screen.getAllByTestId('box')[position], eventData);
    };

    it('reorders boxes when performing drag and drop', () => {
        render(
            <MultilineBoxWithDnD
                id="🆔"
                data={[{fruit: '🍍'}, {fruit: '🍎'}, {fruit: '🍌'}]}
                renderBody={(data) =>
                    data.map(({id, props}) => (
                        <div key={id} data-testid="box">
                            {props.fruit}
                        </div>
                    ))
                }
                defaultProps={{fruit: ''}}
            />
        );

        let boxes = screen.getAllByTestId('box');
        expect(boxes[0]).toHaveTextContent('🍍');
        expect(boxes[1]).toHaveTextContent('🍎');
        expect(boxes[2]).toHaveTextContent('🍌');

        const dragIcons = screen.getAllByRole('img', {name: /dragdrop icon/i});
        dragAndDrop(dragIcons[1], 2);

        boxes = screen.getAllByTestId('box');
        expect(boxes[0]).toHaveTextContent('🍍');
        expect(boxes[1]).toHaveTextContent('🍌');
        expect(boxes[2]).toHaveTextContent('🍎');
    });
});
