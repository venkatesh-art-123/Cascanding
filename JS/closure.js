// function c() {
//     var a = 10;
//     function b() {
//         console.log("closure created", a)
//     }
//     b()
// }
// c()



function x() {
    for (var i = 0; i <= 5; i++) {
        function close(i) {
            setTimeout(() => {
                console.log("aaaaaaa", i)
            }, i * 1000)
        }
        close(i)
    }

    // for (let i = 0; i <= 5; i++) {
    //     setTimeout(() => {
    //         console.log("aaaaaaa", i)
    //     }, i * 1000)
    // }
}
x()