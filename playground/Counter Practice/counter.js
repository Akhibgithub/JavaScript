let counter = 0;

const countValue = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click",function (e) {
        listOfClasses = e.target.classList;
        if (listOfClasses.contains("increase")) {
            counter++;
        } else if (listOfClasses.contains("decrease")){
          counter--;
        } else{
            counter = 0;
        }
        countValue.innerHTML = counter;
        if(counter > 0){
            countValue.style.color = 'green'
        }
        if(counter < 0){
            countValue.style.color = 'red'
        }
        if(counter === 0){
            countValue.style.color = '#222'
        }
    })
})