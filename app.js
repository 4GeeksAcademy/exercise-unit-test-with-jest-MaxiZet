// const sum = (a,b) => {
//     return a + b
// }
// console.log(sum(7,3))

// module.exports = { sum };

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (USD) => {
    return (USD/oneEuroIs.USD)*oneEuroIs.JPY;
} 

const fromEuroToDollar = (EURO) => {
    return  (EURO*oneEuroIs.USD);
}

const fromYenToPound = (YEN) => {
    return (YEN/oneEuroIs.JPY)*oneEuroIs.GBP;
}

module.exports = {fromEuroToDollar};
module.exports = {fromDollarToYen};
module.exports = {fromYenToPound};

console.log(fromDollarToYen(1.07))
console.log(fromEuroToDollar(100))
console.log(fromYenToPound(156.5))
