import {SearchBarMetadata} from '@coveord/plasma-components-props-analyzer';
import SearchBarDemo from '@examples/legacy/form/SearchBar/main.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const Page = () => (
    <PageLayout
        id="SearchBar"
        title="Search Bar"
        section="Form"
        sourcePath="/packages/react/src/components/searchBar/SearchBar.tsx"
        propsMetadata={SearchBarMetadata}
        description="A search bar allows users to search a large set of data by entering keywords. A list of matching items is then returned."
        demo={<SearchBarDemo center />}
    />
);

export default Page;
