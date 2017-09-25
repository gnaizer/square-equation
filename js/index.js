function calculate() {
    const a = prompt("enter value of a");
    const b = prompt("enter value of b");
    const c = prompt("enter value of c");
    var a2 = 2 * a;
    var ac = 4 * a * c;
    var dis = b * b;
    var dis = dis - ac;
    if (dis < 0) {
        document.getElementById('Equation').innerHTML = 'D = ' + dis + ' <br />The Equation = ' + a + 'x&#178; + ' + b + 'x + ' + c + '<br />';
    } else {
        var dis_sqrt = Math.sqrt(dis);
        var x1 = -b + dis_sqrt;
        var x1 = x1 / a2;
        var x2 = -b - dis_sqrt;
        var x2 = x2 / a2;
        document.getElementById('Equation').innerHTML = " Equation = " + a + "x&#178; + " + b + "x + " + c + "<br />";
        document.getElementById('x1').innerHTML = ' Square x (x1) = ' + x1;
        document.getElementById('x2').innerHTML = '        x (x2) = ' + x2;
    }
}
