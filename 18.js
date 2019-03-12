var x = 1

function f() {
    var x = 2;

    function g() {
        console.log(x);
    }

    return g;
}

var h = f();

h();