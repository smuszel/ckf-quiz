const o1 = {
    [Symbol.toPrimitive](hint) {
        return hint === 'number' ? 42 : null;
    }
};

console.log(+object1);
