import {Button, SlideY} from '@coveord/plasma-react';
import {loremIpsum} from 'lorem-ipsum';
import {useState} from 'react';

const content = loremIpsum({count: 20});

const Demo = () => {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <Button onClick={() => setOpened(!opened)}>{opened ? 'Close' : 'Open'}</Button>
            <SlideY in={opened}>
                <div className="mt2">{content}</div>
            </SlideY>
        </>
    );
};
export default Demo;
