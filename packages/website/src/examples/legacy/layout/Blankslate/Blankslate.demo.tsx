import {BlankSlate} from '@coveord/plasma-react';
import {IdeaSize32Px} from '@coveord/plasma-react-icons';

export default () => (
    <BlankSlate
        icon={IdeaSize32Px}
        title="Title of the blank slate"
        description={
            <span>
                This is a description with a link to{' '}
                <a target="_blank" href="http://www.perdu.com/" className="link">
                    this website
                </a>
            </span>
        }
        buttons={[
            {
                name: 'button',
                primary: true,
                enabled: true,
            },
        ]}
    />
);
