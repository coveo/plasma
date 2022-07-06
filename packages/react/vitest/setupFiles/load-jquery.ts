beforeAll(async () => {
    const $ = await import('jquery');
    globalThis.$ = globalThis.jQuery = $.default;
    import('chosen-js');
});

afterAll(() => {
    delete globalThis.$;
});
