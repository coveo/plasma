import {render} from '@test-utils';
import {ReactNode} from 'react';

import {overrideComponent} from '../overrideComponent';

describe('overrideComponent', () => {
    it('overrides the specified properties on the component and copies over the rest', () => {
        const Component = () => <div>hello world</div>;
        Component.displayName = 'hello world';
        Component.One = () => <span>one</span>;
        Component.Two = () => <span>two</span>;

        const NewComponent = overrideComponent(Component, {
            displayName: 'hello new world',
            One: (props: {children: ReactNode}) => <span>{props.children}</span>,
        });

        expect(NewComponent.displayName).toBe('hello new world');

        const {container, rerender} = render(<Component />);
        expect(container).toMatchInlineSnapshot(`
            <div>
              <div>
                hello world
              </div>
            </div>
        `);

        rerender(<NewComponent />);
        expect(container).toMatchInlineSnapshot(`
            <div>
              <div>
                hello world
              </div>
            </div>
        `);

        rerender(<Component.One />);
        expect(container).toMatchInlineSnapshot(`
            <div>
              <span>
                one
              </span>
            </div>
        `);

        rerender(<NewComponent.One>1</NewComponent.One>);
        expect(container).toMatchInlineSnapshot(`
            <div>
              <span>
                1
              </span>
            </div>
        `);

        rerender(<Component.Two />);
        expect(container).toMatchInlineSnapshot(`
            <div>
              <span>
                two
              </span>
            </div>
        `);

        rerender(<NewComponent.Two />);
        expect(container).toMatchInlineSnapshot(`
            <div>
              <span>
                two
              </span>
            </div>
        `);
    });
});
