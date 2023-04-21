import {TargetSize16Px} from '@coveord/plasma-react-icons';

const Demo = () => (
    <button className="link" onClick={() => alert('The button was clicked')}>
        Link <TargetSize16Px height={16} />
    </button>
);
export default Demo;
