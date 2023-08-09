import {Alert, Anchor, Code, Text} from '@coveord/plasma-mantine';
import {ArrowLeftSize16Px, WarningSize24Px} from '@coveord/plasma-react-icons';
import Link from 'next/link';
import {useRouter} from 'next/router';

const LegacyWarningBanner = () => {
    const {pathname} = useRouter();
    const isLegacy = /^\/legacy*/.test(pathname);
    return isLegacy ? (
        <Alert color="warning" m="sm" icon={<WarningSize24Px height={24} />}>
            You are viewing the legacy documentation of Plasma featuring the components from the
            <Code>@coveord/plasma-react</Code> and <Code>@coveord/plasma-style</Code> packages. Those packages are
            deprecated and replaced by the <Code>@coveord/plasma-mantine</Code> package.{' '}
            <Text>
                <Link href="/" passHref legacyBehavior>
                    <Anchor>
                        <ArrowLeftSize16Px height={16} /> Return to the latest documentation
                    </Anchor>
                </Link>
            </Text>
        </Alert>
    ) : null;
};

export default LegacyWarningBanner;
