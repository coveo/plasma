// This file is executed once, before everything else.
export default () => {
    // @ts-ignore
    process.env.TZ = 'UTC';
};
