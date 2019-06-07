import config from '../config';
import ComponentCode from './ComponentCode';

export const Component = ({id, title, usage, stylesheet, className, children, style, withSource}) => (
    <article className="sg-component" id={id}>
        <header className="sg-component-header">
            <h1 className="text-medium-blue">{title}</h1>
            {usage && <p className="sg-component-description">{usage}</p>}
            {stylesheet && (
                <p className="sg-component-stylesheet">
                    <strong>Stylesheet:</strong>
                    <a href={`${config.github_repo}${stylesheet}`} target="_blank">
                        {stylesheet}
                    </a>
                </p>
            )}
        </header>

        <div className="sg-component-body">
            <div className={`sg-component-display ${className || ''}`} style={style || {}}>
                {children}
            </div>
            <div className="clearfix mb4" />
            {withSource && <ComponentCode>{children}</ComponentCode>}
        </div>
    </article>
);
export default Component;
