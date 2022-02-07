import React from 'react';
import {useLocation} from 'react-router';

export const NotFound: React.FunctionComponent = () => {
    const location = useLocation();

    return (
        <div className="full-content p5 flex flex-column align-start flex-center">
            <h3 className="mt5">Page Not Found</h3>
            <p>{location.pathname}</p>
        </div>
    );
};
export default NotFound;
