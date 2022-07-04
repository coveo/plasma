/* eslint-disable */
export class UUID {
    // TODO: replace for https://www.npmjs.com/package/uuid
    static generate() {
        // Source: https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
        let d = Date.now();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string) => {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });
    }
}
