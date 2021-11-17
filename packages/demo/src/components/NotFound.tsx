import React from 'react';
import {useRouteMatch} from 'react-router';

export const NotFound: React.FC = () => {
    const match = useRouteMatch();

    return (
        <div className="mod-width-100 p20 flex flex-column center-align">
            <h3>Page Not Found</h3>
            <p>{match.url}</p>
        </div>
    );
};
