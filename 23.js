function* f(x) {
    console.log('a');
    const y = yield new Promise(rez => setTimeout(() => rez(10), 2000));
    console.log('b');
    const z = yield new Promise(rez => setTimeout(() => rez(100), 2000));
    console.log('c');
    
    return x + y + z;
}

const helper = it => new Promise(rez => {

    const peel = x => {
        const { value, done } = it.next(x);
        if (done) {
            rez(value);
        } else {
            value.then(peel);
        }
    }
    peel();
})

console.log(helper(f(1)));