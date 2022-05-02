import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import {Button, StickyFooter} from '@coveord/plasma-react';
    import {loremIpsum} from 'lorem-ipsum';

    const lorem = loremIpsum({count: 100});
    
    export default () => {
        const [isOpened, setIsOpened] = React.useState(false);
        return (
            <>
                <Button onClick={() => setIsOpened(true)}>Open Footer</Button>
                <div style={{ maxHeight: '500px'}} className="overflow-auto mt1">
                    <div>{lorem}</div>
                    <StickyFooter isOpened={isOpened}>
                        <Button onClick={() => setIsOpened(false)}>Cancel</Button>
                        <Button primary onClick={() => setIsOpened(false)}>
                            Save
                        </Button>
                    </StickyFooter>
                </div>
            </>
        );
    }
`;

const StickyFooterExample = () => (
    <PageLayout
        id="StickyFooter"
        title="Sticky Footer"
        section="Layout"
        description="A page footer that sticks to the bottom of the screen"
        componentSourcePath="/stickyFooter/StickyFooter.tsx"
        code={code}
    />
);

export default StickyFooterExample;
