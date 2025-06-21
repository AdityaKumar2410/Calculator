let string = "";
let buttons = document.querySelectorAll(".button");
const clear = document.querySelector(".clear")
clear.addEventListener("click",()=>{
    string = "";
    document.querySelector("input").value = string;
})
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === "=") {
        try{
            string = eval(string);
            document.querySelector("input").value = string;
        }
      catch(err){
        console.log(err)
      }
      
    }
    else if (e.target.value === "backspace"){
        new_array =  string.split("");
        new_array.pop()
        console.log(new_array)
        string = new_array.join("");
        document.querySelector("input").value = string;
    }
     else {
      console.log(e.target); //reutrns the element on which the event is performed
      string = string + e.target.innerText;
      document.querySelector("input").value = string;
    }
  });
});
// there is also a function in js to do this directly valled eval()
// making one of own eval function
function evaluate(epr){
    return new Function("return "+epr)();
}