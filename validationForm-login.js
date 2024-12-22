// warning text
let name_warn = document.getElementById("name_warn")
let phone_warn = document.getElementById("phone_warn")
let password_empty_warn = document.getElementById("password_empty_warn")

// inputs
let name_inp = document.querySelector("[name='name']")
let phone_inp = document.querySelector("[name='phone']")
let password_inp = document.querySelector("[name='password']")

// start validation
name_inp.classList.remove("warn")
phone_inp.classList.remove("warn")
password_inp.classList.remove("warn")

document.forms[0].onsubmit = function(e){
    let name_inp_valid = false
    let phone_inp_valid = false
    let password_inp_valid = false


    if(name_inp.value !== ""){
        name_inp_valid = true
        name_inp.classList.remove("warn")
        name_warn.style.display = "none"
    } else{
        name_inp_valid = false
        name_inp.classList.add("warn")
        name_warn.style.display = "block"
    }

    if(phone_inp.value !== ""){
        phone_inp_valid = true
        phone_inp.classList.remove("warn")
        phone_warn.style.display = "none"
    } else{
        phone_inp_valid = false
        phone_inp.classList.add("warn")
        phone_warn.style.display = "block"
    }

    if(password_inp.value !== ""){
        password_inp_valid = true
        password_inp.classList.remove("warn")
        password_empty_warn.style.display = "none"
    } else{
        password_inp_valid = false
        password_inp.classList.add("warn")
        password_empty_warn.style.display = "block"
    }





    if(name_inp_valid === false || 
        phone_inp_valid === false || 
        password_inp_valid === false
    ){
        e.preventDefault()
    }
}