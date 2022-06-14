import code from '@examples/SearchBar/main.example.tsx';

export default () => (
    <PageLayout
        id="SearchBar"
        title="Search Bar"
        section="Form"
        componentSourcePath="/searchBar/SearchBar.tsx"
        description="A search bar allows users to search a large set of data by entering keywords. A list of matching items is then returned."
        code={code}
    />
);
