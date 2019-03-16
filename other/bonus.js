// const f = (a, b, c, d, e, f, g, h) => { }
// const g = ([a, b, c, d, e, f, g, h]) => { }
// const h = ({ a, b, c, d, e, f, g, h }) => { }


const xs = [
    ['John', 12, 178],
    ['Jane', 21, 173],
    ['Susane', 55, 170],
];

const objs = [
    { name: 'John', age: 12, height: 178 },
];

const f = (...names) => tuple => {
    const res = {}
    names.forEach((n, ix) => res[n] = tuple[ix]);

    return res;
}

// xs.map(([name, age, height]) => ({ name, age, height }));
xs.map(f('name', 'age', 'height'));