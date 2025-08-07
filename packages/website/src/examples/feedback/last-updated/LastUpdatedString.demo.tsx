import {LastUpdated} from '@coveord/plasma-mantine';

const Demo = () => {
    const time = new Date().toISOString();
    return <LastUpdated time={time} />;
};
export default Demo;
