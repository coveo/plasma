module.exports = new Proxy(
    {},
    {
        // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
        get: function getter(target, key) {
            if (key === '__esModule') {
                return true;
            }
            return key;
        },
    },
);
