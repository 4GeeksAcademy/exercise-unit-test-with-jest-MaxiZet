let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = function(USD) {
    return (USD/oneEuroIs.USD)*oneEuroIs.JPY;
} 

const fromEuroToDollar = function(EURO) {
    return  (EURO*oneEuroIs.USD);
}

const fromYenToPound = function(YEN) {
    return (YEN/oneEuroIs.JPY)*oneEuroIs.GBP;
}


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };