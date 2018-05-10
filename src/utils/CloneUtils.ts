export function deepClone(object: any) {
    return JSON.parse(JSON.stringify(object));
}
