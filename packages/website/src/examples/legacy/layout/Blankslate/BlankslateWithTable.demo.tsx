import {BlankSlateWithTable} from '@coveord/plasma-react';
import {IdeaSize32Px} from '@coveord/plasma-react-icons';

export default () => (
    <table className="table">
        <thead>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            <BlankSlateWithTable title="Title test" description="description test" icon={IdeaSize32Px} />
        </tbody>
    </table>
);
