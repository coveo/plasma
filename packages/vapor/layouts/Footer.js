import config from '../config';

const Footer = () => (
    <footer className="site-footer">
        <div className="wrapper">
            <div className="footer-col-wrapper">
                <div className="footer-col  footer-col-1">
                    <ul className="contact-list">
                        <li>{config.title}</li>
                        <li>
                            <a href={`mailto: ${config.email}`}>{config.email}</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-col  footer-col-2">
                    <ul className="social-media-list">
                        <li>
                            <a href={`https://github.com/${config.github_username}`}>
                                Github: <span className="username">{config.github_username}}</span>
                            </a>
                        </li>

                        <li>
                            <a href={`https://twitter.com/${config.twitter_username}`}>
                                Twitter: <span className="username">{config.twitter_username}</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-col footer-col-3">
                    <p className="text">{config.description}</p>
                </div>
            </div>
        </div>
    </footer>
);
export default Footer;
