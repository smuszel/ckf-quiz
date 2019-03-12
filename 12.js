let x;

function g(_) {
    console.log(x);
}

function f() {
    const x = 1
    g(2);
}

f();