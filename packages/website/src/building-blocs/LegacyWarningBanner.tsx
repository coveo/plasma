import {Alert, Anchor, Code, Text} from '@coveord/plasma-mantine';
import {ArrowLeftSize16Px, WarningSize24Px} from '@coveord/plasma-react-icons';
import {Link, useLocation} from 'react-router-dom';

const LegacyWarningBanner = () => {
    const {pathname} = useLocation();
    const isLegacy = /^\/legacy*/.test(pathname);
    return isLegacy ? (
        <Alert color="warning" m="sm" icon={<WarningSize24Px height={24} />}>
            You are viewing the legacy documentation of Plasma featuring the components from the
            <Code>@coveord/plasma-react</Code> and <Code>@coveord/plasma-style</Code> packages. Those packages are
            deprecated and replaced by the <Code>@coveord/plasma-mantine</Code> package.{' '}
            <Text>
                <Anchor component={Link} to="/">
                    <ArrowLeftSize16Px height={16} /> Return to the latest documentation
                </Anchor>
            </Text>
        </Alert>
    ) : null;
};

export default LegacyWarningBanner;
