import {LastUpdated} from '@coveord/plasma-mantine';

const Demo = () => {
    const time = new Date('2023-01-01T12:34:56');
    return <LastUpdated time={time} label="Updated at:" />;
};
export default Demo;
