const foobar = function(x) {
    if (x % 3 == 0 && x % 5 != 0) {
        console.log("foo")
    }

    else if (x % 5 == 0 && x % 3 != 0) {
        console.log("bar")
    }

    else if (x % 5 == 0 && x % 3 == 0) {
        console.log("foobar")
    }

}

foobar(15369)