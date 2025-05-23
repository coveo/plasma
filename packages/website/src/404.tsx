import {FunctionComponent} from 'react';
import {WithTranslation, withTranslation} from 'react-i18next';

export const NotFoundInternal: FunctionComponent<WithTranslation> = ({t}) => (
    <div className="full-content p5 flex flex-column align-start flex-center">
        <h3 className="mt5">{t('404-title')}</h3>
    </div>
);
const NotFound = withTranslation()(NotFoundInternal);
export default NotFound;
