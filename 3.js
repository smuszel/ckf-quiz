var x = 0

const obj = {
    x: 1,

    f() {
        return this.x
    }
}

const f = obj.f;

console.log(f());
console.log(obj.f());