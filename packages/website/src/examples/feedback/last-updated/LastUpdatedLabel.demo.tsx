import {LastUpdated} from '@coveord/plasma-mantine';

const Demo = () => {
    const date = new Date();
    return <LastUpdated time={date} label="Updated at:" />;
};
export default Demo;
