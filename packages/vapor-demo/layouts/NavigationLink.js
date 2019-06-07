import {useState, useEffect} from 'react';
import Link from 'next/link';
import Router from 'next/router';

const getIsActive = (url) => {
    // when next compile in dev, no / is present between the pathname and the hash
    // when next compile in prod, a / is present between the pathname and the hash
    const possibleUrls = [url, url.replace('#', '/#'), `${url}/`];
    return (
        possibleUrls.filter((possibleUrl) => possibleUrl === `${window.location.pathname}${window.location.hash}`)
            .length > 0
    );
};

const NavigationLink = ({href, name}) => {
    const url = `${process.env.BASE_URL}${href}`;
    const [isActive, setActive] = useState(getIsActive(url));
    const handleRouteChange = () => setActive(getIsActive(url));
    useEffect(() => {
        Router.events.on('hashChangeComplete', handleRouteChange);
        return () => Router.events.off('hashChangeComplete', handleRouteChange);
    }, [window.location.href]);

    return (
        <li className={`navigation-menu-section-item ${isActive ? 'state-active' : ''}`}>
            <Link href={url}>
                <a className="block navigation-menu-section-item-link">{name}</a>
            </Link>
        </li>
    );
};

export default NavigationLink;
