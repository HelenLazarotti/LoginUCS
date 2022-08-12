function validarEmail(){
    let email = document.querySelector("#inputEmail");

    let senha = document.querySelector("#inputSenha")

    let error = document.querySelector(".span")

    if(!email.checkValidity()){
        error.innerHTML = "Email inválido";
    }
}

function redefinirMsg(){
    let errorMsg = document.querySelector(".span");

    if (errorMsg.innerHTML == "Email inválido"){
        errorMsg.innerHTML = " ";
    }
}
