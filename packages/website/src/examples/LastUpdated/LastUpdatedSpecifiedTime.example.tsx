import {LastUpdated} from '@coveord/plasma-react';

const ONE_HOUR = 60 * 60 * 1000;

export default () => {
    const OneHourAgo = new Date(new Date().getTime() - ONE_HOUR);
    return <LastUpdated time={OneHourAgo} label="Dernière modification à" />;
};
