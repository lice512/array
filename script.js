// let arr = ['sokhib', 'doniyor', 'farrux', 'samir']

// let finded = arr.filter((item) => item.length % 2 === 0)

// console.log(finded);

let arr = ['morgen', 'nikolay', 'alexander', 'yulduz', 'timati']
let word = ""

arr.filter((each => { 
    if(word.length < each.length) {
        word = each
    }
}))


let numbers = [2,4,1,4,7,3,2,7,9,3,2]

let even = [numbers.filter((even => even % 2 === 0))]  
let odd = [numbers.filter((odd => odd % 2 != 0 ))]
console.log(word, even, odd);

