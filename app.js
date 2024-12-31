const btns = document.querySelectorAll(".row-btn");
const display = document.querySelector("#dispaly");
const clearBtn = document.querySelector("#clear-btn");

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{  
            if (btn.value !== "=") {
            display.value += btn.value;
        }
    });
});


clearBtn.addEventListener("click", () => {
    display.value = "";
});


const displayValue =()=>{
    console.log(eval(display.value));
    let displayVal = eval(display.value);
    display.value = displayVal;
  
}
