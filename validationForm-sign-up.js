// warning text
let name_warn = document.getElementById("name_warn")
let phone_warn = document.getElementById("phone_warn")
let password_empty_warn = document.getElementById("password_empty_warn")
let password_character_warn = document.getElementById("password_character_warn")
let password_LN_warn = document.getElementById("password_LN_warn")
let confirm_pass_warn = document.getElementById("confirm_pass_warn")
let confirm_pass_empty_warn = document.getElementById("confirm_pass_empty_warn")

// inputs
let name_inp = document.querySelector("[name='name']")
let phone_inp = document.querySelector("[name='phone']")
let password_inp = document.querySelector("[name='password']")
let confirm_password_inp = document.querySelector("[name='confirm-password']")


// start validation
name_inp.classList.remove("active")
phone_inp.classList.remove("active")
password_inp.classList.remove("active")
confirm_password_inp.classList.remove("active")

document.forms[0].onsubmit = function(e){
    let name_inp_valid = false
    let phone_inp_valid = false
    let password_inp_valid = false
    let confirm_password_inp_valid = false



    if(name_inp.value !== ""){
        name_inp_valid = true
        name_inp.classList.remove("active")
        name_warn.style.display = "none"
    } else{
        name_inp_valid = false
        name_inp.classList.add("active")
        name_warn.style.display = "block"
    }

    if(phone_inp.value !== ""){
        phone_inp_valid = true
        phone_inp.classList.remove("active")
        phone_warn.style.display = "none"
    } else{
        phone_inp_valid = false
        phone_inp.classList.add("active")
        phone_warn.style.display = "block"
    }

    if(password_inp.value !== ""){
        password_inp_valid = true
        password_inp.classList.remove("active")
        password_empty_warn.style.display = "none"
    } else{
        password_inp_valid = false
        password_inp.classList.add("active")
        password_empty_warn.style.display = "block"
    }

    if(password_inp.value.length >= 8){
        password_inp_valid = true
        password_inp.classList.remove("active")
        password_character_warn.style.display = "none"
    } else{
        password_inp_valid = false
        password_inp.classList.add("active")
        password_character_warn.style.display = "block"
    }

    if (confirm_password_inp.value !== "") {
        confirm_password_inp_valid = true;
        confirm_password_inp.classList.remove("active");
        confirm_pass_empty_warn.style.display = "none";
    
        if (confirm_password_inp.value === password_inp.value) {
            confirm_password_inp_valid = true;
            confirm_password_inp.classList.remove("active");
            confirm_pass_warn.style.display = "none";
        } else {
            confirm_password_inp_valid = false;
            confirm_password_inp.classList.add("active");
            confirm_pass_warn.style.display = "block";
        }
    } else {
        confirm_password_inp_valid = false;
        confirm_password_inp.classList.add("active");
        confirm_pass_empty_warn.style.display = "block";
    }
    





    if(name_inp_valid === false || 
        phone_inp_valid === false || 
        password_inp_valid === false || 
        confirm_password_inp_valid === false
    ){
        e.preventDefault()
    }
}