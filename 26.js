var asyncIterable = {
    [Symbol.asyncIterator]() {
        return {
            i: 0,
            next() {
                this.i++
                const obj = { value: this.i, done: false }
                return new Promise(rez => setTimeout(() => rez(obj), 1000))
            }
        };
    }
};

(async function () {
    for await (let num of asyncIterable) {
        console.log(num);
    }
})();