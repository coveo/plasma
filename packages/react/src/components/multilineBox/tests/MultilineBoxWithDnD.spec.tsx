import {fireEvent, render, screen} from '@test-utils';

import {multilineBoxWithDnD} from '../hoc/MultilineBoxWithDnD.js';
import {MultilineBox} from '../MultilineBox.js';

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

    it('reorders boxes when performing drag and drop', async () => {
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

        const dragIcons = await screen.findAllByRole('img', {name: /draganddrop/i});
        dragAndDrop(dragIcons[1], 2);

        boxes = screen.getAllByTestId('box');
        expect(boxes[0]).toHaveTextContent('🍍');
        expect(boxes[1]).toHaveTextContent('🍌');
        expect(boxes[2]).toHaveTextContent('🍎');
    });

    it('does not allow dragging items across different multi box components', async () => {
        render(
            <>
                <MultilineBoxWithDnD
                    id="fruits"
                    data={[{fruit: '🍍'}, {fruit: '🍎'}, {fruit: '🍌'}]}
                    renderBody={(data) =>
                        data.map(({id, props}) => (
                            <div key={id} data-testid={props.fruit ? 'box' : undefined}>
                                {props.fruit}
                            </div>
                        ))
                    }
                    defaultProps={{fruit: ''}}
                />
                <MultilineBoxWithDnD
                    id="tools"
                    data={[{tool: '🔨'}, {tool: '🔧'}, {tool: '🪚'}]}
                    renderBody={(data) =>
                        data.map(({id, props}) => (
                            <div key={id} data-testid={props.tool ? 'box' : undefined}>
                                {props.tool}
                            </div>
                        ))
                    }
                    defaultProps={{tool: ''}}
                />
            </>
        );

        let boxes = screen.getAllByTestId('box');
        expect(boxes[0]).toHaveTextContent('🍍');
        expect(boxes[1]).toHaveTextContent('🍎');
        expect(boxes[2]).toHaveTextContent('🍌');
        expect(boxes[3]).toHaveTextContent('🔨');
        expect(boxes[4]).toHaveTextContent('🔧');
        expect(boxes[5]).toHaveTextContent('🪚');

        const dragIcons = await screen.findAllByRole('img', {name: /drag/i});
        dragAndDrop(dragIcons[2], 3);

        boxes = screen.getAllByTestId('box');
        expect(boxes[0]).toHaveTextContent('🍍');
        expect(boxes[1]).toHaveTextContent('🍎');
        expect(boxes[2]).toHaveTextContent('🍌');
        expect(boxes[3]).toHaveTextContent('🔨');
        expect(boxes[4]).toHaveTextContent('🔧');
        expect(boxes[5]).toHaveTextContent('🪚');
    });
});
