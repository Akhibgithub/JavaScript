
const solution = (inputString) => {
    let arr = inputString.split(" ")
    let arr1 = [];

    for(let i = 0;i < arr.length;i++){
        for (let j = 1; j <= arr.length; j++) {
            if (arr[i].includes(j) == true){
            arr1.splice(j-1,0,arr[i])
            }
        }
    }
    let str = arr1.join(" ")
    let myRegex = /[^0-9]/g
    let result = str.match(myRegex)
    console.log(result.join(""));
    return result.join()
}
solution("is3 Cris1tiano Ro2naldo 4the 5best")
solution("ha1ppy y3all! 2coding")
solution("H1ouse of2 t3he 4is bes5t drag6ons se7ries 8i ha9ve ")