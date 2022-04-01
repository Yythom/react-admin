function getMapValue<T extends Record<string, any>, K extends keyof T>(map: T, k: K) {
    const value = map[k];
};

getMapValue({
    a: 1
}, 'a')

interface Test {
    name: string;
    // [propname:string]:any,
}
const b: Test = {
    name: '1',
}

export default getMapValue
