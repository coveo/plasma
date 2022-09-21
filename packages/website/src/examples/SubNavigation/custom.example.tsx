import {SubNavigationConnected} from '@coveord/plasma-react';
import {ThumbsDownSize16Px, ThumbsUpSize16Px} from '@coveord/plasma-react-icons';

export default () => (
    <SubNavigationConnected
        id="third-sub-nav"
        items={[
            {
                label: (
                    <span className="flex space-between">
                        <span className="truncate">Avatar</span>
                        <ThumbsUpSize16Px />
                    </span>
                ),
                id: 'avatar',
                disabled: true,
            },
            {
                label: (
                    <span className="flex space-between">
                        <span className="truncate">Titanic</span>
                        <ThumbsUpSize16Px />
                    </span>
                ),
                id: 'titanic',
            },
            {
                label: (
                    <span className="flex space-between">
                        <span className="truncate pr1">Star Wars: The Force Awakens</span>
                        <ThumbsUpSize16Px />
                    </span>
                ),
                id: 'star-wars',
            },
            {
                label: (
                    <span className="flex space-between">
                        <span className="truncate">Jurassic World</span>
                        <ThumbsDownSize16Px />
                    </span>
                ),
                id: 'jurasic-world',
            },
            {
                label: (
                    <span className="flex space-between">
                        <span className="truncate">The Avengers</span>
                        <ThumbsDownSize16Px />
                    </span>
                ),
                id: 'the-avengers',
            },
        ]}
        defaultSelected="titanic"
    />
);
