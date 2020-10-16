function feetToMeters(foot) {
    return (0.305 * foot).toFixed(2);
}

function meterstoFeet(meter) {
    return (3.279 * meter).toFixed(2);
}

function test1() {
    for (let i = 1; i <= 10; i++) {
        document.write(feetToMeters(i) + ",");
    }
}

function test2() {
    for (let i = 20.00; i <= 65; i = i + 5) {
        document.write(meterstoFeet(i) + ",");
    }
}