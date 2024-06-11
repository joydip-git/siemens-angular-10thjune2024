function outer() {
    this.x = 10
    // let ref = this
    // let inner = function () {
    //     this.y = 20
    //     console.log(this.x + this.y);
    //     //console.log(ref.x + this.y);
    // }    
    //inner = inner.bind(this)
    const inner = () => {
        this.y = 20
        console.log(this.x + this.y);
        //console.log(ref.x + this.y);
    }
    inner()
}
new outer()