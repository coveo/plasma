import {Button, SlideY} from '@coveord/plasma-react';
import {loremIpsum} from 'lorem-ipsum';
import * as React from 'react';

const content = loremIpsum({count: 20});

export default () => {
    const [opened, setOpened] = React.useState(false);
    return (
        <>
            <Button onClick={() => setOpened(!opened)}>{opened ? 'Close' : 'Open'}</Button>
            <SlideY in={opened}>
                <div className="mt2">{content}</div>
            </SlideY>
        </>
    );
};
