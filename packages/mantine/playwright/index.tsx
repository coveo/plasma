import {beforeMount} from '@playwright/experimental-ct-react/hooks';

import {Plasmantine} from '../src';

beforeMount(async ({App}) => (
    <Plasmantine>
        <App />
    </Plasmantine>
));
