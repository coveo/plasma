import {Button} from '@coveord/plasma-react';

const Demo = () => (
    <>
        <Button isLoading enabled={false}>
            Disabled
        </Button>
        <Button isLoading primary enabled={false}>
            Primary disabled
        </Button>
    </>
);
export default Demo;
