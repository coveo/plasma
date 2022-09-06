import {Button} from '@coveord/plasma-react';

export default () => (
    <>
        <Button isLoading enabled={false}>
            Disabled
        </Button>
        <Button isLoading primary enabled={false}>
            Primary disabled
        </Button>
    </>
);
