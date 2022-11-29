import {SearchBarMetadata} from '@coveord/plasma-components-props-analyzer';
import code from '@examples/legacy/form/SearchBar/main.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="SearchBar"
        title="Search Bar"
        section="Form"
        componentSourcePath="/searchBar/SearchBar.tsx"
        propsMetadata={SearchBarMetadata}
        description="A search bar allows users to search a large set of data by entering keywords. A list of matching items is then returned."
        code={code}
    />
);
