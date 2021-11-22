// Variable Declaration

let playerName = "budi"
console.log(playerName)
playerName = "rudi"
console.log(playerName)

// Reserved Word
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords
//==============================================
//Data Type
console.log(`${1} ${true}`)
console.log(true)
//==============================================
//Array
let arrNum = [ 1,2,3,4,5]
let arrStr = ["a", "buku", "bisa juga kalimat"]
let arrBool = [true, false]
//==============================================
//Array Multi Dimensi

let arr = [
    [1,2,3],
    [7,3],
    [91,8,100,30]
]
console.log(arr[0].length)
console.log(arr)
arr[0].shift()
console.log(arr)
arr[1].unshift(4,5)
console.log(arr)


arr.forEach((x) => {
    console.log(x)
})
//==============================================
// this Keyword

function whatever(){
    console.log(this)
}

//whatever()

//==============================================
// Arrow function
//Traditional
// function(a) {
//     return a + 1
// }

// (a) => return a + 1

// (a) => a + 1

// a => a + 1


let a = 2
let b = 3
function baru(){
    return a+b
}

() => a+b

// Named function
const tambah = (a,b) => a+b
console.log(tambah(1,2))

//Currying - menambahkan function di dalam function

function curryFunction(a,b){
    const c = a+b
    return function (d){
        console.log(c+d)
    }
}

curryFunction(1,2)(3)

const anotherCurryFunction = (a,b) => (c,d) => (a+b) - (c+d)

console.log(anotherCurryFunction(1,5)(2,3))


let spec = ['a', 'b','c','d']
let [ace, best , char] = spec
console.log(ace,best,char)

console.log((function(a,b){
    return a+b
})(1,2))