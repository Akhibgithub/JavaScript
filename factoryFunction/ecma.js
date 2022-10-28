
function calculateIntrest(principle,year,rate = 0.1) {
    const months = 12;
    const Intrest = (principle/months)*rate*(year*months)
    return Intrest.toFixed(2);
}
console.log(calculateIntrest(10000,2,0.5));