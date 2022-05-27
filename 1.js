const a = () => {
    b.c()
}

/** 1 */
a()

/** 2 */
const p = new Promise((resolve, reject) => {
    resolve(a)
});
p.then(res => res())

/** 3 */
setTimeout(() => {
    a()
}, 0);

const b = {
    c: () => {
        console.log(123123);
    }
}
