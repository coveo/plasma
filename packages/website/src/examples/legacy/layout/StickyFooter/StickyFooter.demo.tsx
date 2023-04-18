import {Button, StickyFooter} from '@coveord/plasma-react';
import {loremIpsum} from 'lorem-ipsum';
import {useState} from 'react';

const lorem = loremIpsum({count: 100});

const Demo = () => {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <>
            <Button onClick={() => setIsOpened(true)}>Open Footer</Button>
            <div style={{maxHeight: '300px'}} className="overflow-auto mt1">
                <div>{lorem}</div>
                <StickyFooter isOpened={isOpened}>
                    <Button onClick={() => setIsOpened(false)}>Cancel</Button>
                    <Button primary onClick={() => setIsOpened(false)}>
                        Save
                    </Button>
                </StickyFooter>
            </div>
        </>
    );
};
export default Demo;
