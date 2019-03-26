const xs = [
    NaN,
    undefined,
    0,
    false,
    [],
    '',
    null,
    {}
];

xs.forEach(x => {
    if (x) {
        console.log(x);
    }
});

console.log('\n');

xs.forEach(x => {
    if (x == false) {
        console.log(x);
    }
});