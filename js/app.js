const check = document.querySelector("#check");
const basic = document.querySelector("#basic");
const professional = document.querySelector("#professional");
const master = document.querySelector("#master");

function checked(){
    if(check.checked == false){
        basic.textContent="199.99";
        professional.textContent="249.99";
        master.textContent="399.99";
    }
    else{
        basic.textContent="19.99";
        professional.textContent="24.99";
        master.textContent="39.99";
    }
}

check.addEventListener("click", () => {
    checked();    
});

checked();    
