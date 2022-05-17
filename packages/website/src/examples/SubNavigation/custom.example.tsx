import {SubNavigationConnected, Svg} from '@coveord/plasma-react';

export default () => (
    <SubNavigationConnected
        id="third-sub-nav"
        items={[
            {
                label: (
                    <span className="flex space-between">
                        <span className="truncate">Avatar</span>
                        <Svg svgName="thumbUp" svgClass="icon" />
                    </span>
                ),
                id: 'avatar',
                disabled: true,
            },
            {
                label: (
                    <span className="flex space-between">
                        <span className="truncate">Titanic</span>
                        <Svg svgName="thumbUp" svgClass="icon" />
                    </span>
                ),
                id: 'titanic',
            },
            {
                label: (
                    <span className="flex space-between">
                        <span className="truncate pr1">Star Wars: The Force Awakens</span>
                        <Svg svgName="thumbUp" svgClass="icon" />
                    </span>
                ),
                id: 'star-wars',
            },
            {
                label: (
                    <span className="flex space-between">
                        <span className="truncate">Jurassic World</span>
                        <Svg svgName="thumbDown" svgClass="icon" />
                    </span>
                ),
                id: 'jurasic-world',
            },
            {
                label: (
                    <span className="flex space-between">
                        <span className="truncate">The Avengers</span>
                        <Svg svgName="thumbDown" svgClass="icon" />
                    </span>
                ),
                id: 'the-avengers',
            },
        ]}
        defaultSelected="titanic"
    />
);
