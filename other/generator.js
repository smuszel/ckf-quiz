function* g(x) {
    yield 1
    yield 2
    yield 3

    return x
}

const it = g(10);

console.log(it);