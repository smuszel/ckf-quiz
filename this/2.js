const obj = {
    x: 1,
    f: () => this.x
}

console.log(obj.f());