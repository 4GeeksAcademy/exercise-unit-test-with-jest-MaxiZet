
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("Conversion from USD to JPY --> 1 USD = 146.26168 JPY", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');
  
    expect(fromDollarToYen(100)).toBe(14626.168224299065); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("Conversion from JPY to GBP --> 1 JPY = 0.0072 GBP", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    expect(fromYenToPound(15650)).toBe(87); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


