import {LastUpdated} from '@coveord/plasma-mantine';

const Demo = () => {
    const time = new Date().getTime();
    return <LastUpdated time={time} />;
};
export default Demo;
