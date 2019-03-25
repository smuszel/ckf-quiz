const o1 = {
    x: 1,
    f() {
        return this.x
    }
}

const o2 = {
    x: 2,
    f: o1.f
}

console.log(o2.f());
