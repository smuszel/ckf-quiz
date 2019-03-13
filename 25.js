function* f(x) {
    console.log('a');
    yield true;
    console.log('b');
    yield 0;
    console.log('c');

    return x;
}

const helper = it => {
    const peel = x => {
        const { value, done } = it.next(x);

        if (done) {
            return value;
        } else if (value) {
            return peel(value);
        } else {
            return null;
        }
    }

    return peel();
}

console.log(helper(f(1)));