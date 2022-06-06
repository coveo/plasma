import {Button} from '@coveord/plasma-react';

export default () => (
    <>
        <Button isLoading small>
            Small
        </Button>

        <Button isLoading>Standard</Button>

        <Button isLoading enabled={false}>
            Disabled
        </Button>

        <Button isLoading primary>
            Primary
        </Button>

        <Button isLoading primary enabled={false}>
            Primary disabled
        </Button>
    </>
);
