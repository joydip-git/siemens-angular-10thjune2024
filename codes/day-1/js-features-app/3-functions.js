//function main(){
function outer() {
    console.log(x); //undefined
    //object data
    this.nameData = 'anil'

    console.log(this);
    //local variable
    var x
    x = 10
    console.log(x);//10
    for (var i = 0; i < 1; i++) {
        var x
        x = 20
        console.log(x);//20
    }
    console.log(x);//10

    inner()
    //function declaration
    function inner() {
        var y
        y = 30
        console.log(y);
    }

    //innerAgain()
    //function expression
    var innerAgain
    innerAgain = function () {
        var z = 40
        console.log(z);
    }

}

var obj = new outer()
console.log(obj.nameData);
//}
//main()