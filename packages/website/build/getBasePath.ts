const baseUrl = process.env.PLASMA_BASE_URL;

let basePath = '/';
if (baseUrl) {
    const {pathname} = new URL(baseUrl);
    const prefix = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    basePath = `${prefix}/old/`;
}

export default basePath;
