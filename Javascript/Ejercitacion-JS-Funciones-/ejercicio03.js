// Función F(X, Y):

// Haga un programa en JavaScript que llame a la función F(X, Y) = 5.6 * X + Y / 2.5 y que muestre los resultados para F(3, 5); F(9, 2) y F(56, 87).

const F = (X, Y) => {
    return console.log((5.6 * X + Y / 2.5).toFixed(2));
};

F(3, 5);
F(9, 2);
F(56, 87);
