const input = document.getElementById("input")
const button = document.getElementById("button")

button.addEventListener('click', function () {
    try {
        if (input.value === "") throw "Please provide a value"
        if (isNaN(input.value)) throw "Please provide a valid number"
        if (input.value < 50) throw "Number is less than 50"
        if (input.value > 100) throw "Number is greater than 100"
        window.alert("Success");
        } catch(e) {
        window.alert(e)
        } finally { 
            window.alert(e)
        }
})


