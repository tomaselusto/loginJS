document.addEventListener('DOMContentLoaded', function(){
    const loginForm= document.getElementById('loginForm');
    const emailInput= document.getElementById('email');
    const passwordInput= document.getElementById('password');
    const confirmPassowrdInput= document.getElementById('confirmPassword');
    const emailError= document.getElementById('emailError')
    const paswordError= document.getElementById('passwordError')
    const confirmPasswordError= document.getElementById('confirmPasswordError')
    
    loginForm.addEventListener('submit', function(event){
        event.preventDefault();
       ValidateForm();
    })
    emailInput.addEventListener('blur', function(){
        validateEmail()
    })
    emailInput.addEventListener('change', function(){
        cleanError(emailError)
    })
    passwordInput.addEventListener('change', function(){
        cleanError(paswordError)
    })
    confirmPassowrdInput.addEventListener('change', function(){
        cleanError(confirmPasswordError)
    })

    function ValidateForm(){
        const isValidEmail= validateEmail()
        const isValidPassword = validatePassword()
        const passwordMatch= validatePasswordMatch();
        if(isValidEmail && isValidPassword && passwordMatch)
        {
            //guardar mail en localstorage y generar json en consola
            alert('Ingreso OK');
        }

    }
    function validateEmail(){
        const regex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const emailValue= emailInput.value.trim()
        if(!regex.text(emailValue)){
            showError(emailError, 'ingresa un email válido')
            return false;
        }
        return true;
    }

    function validatePassword(){
        const passwordValue= passwordInput.value.trim()
        if(passwordValue.lenght <6){
            showError(paswordError, 'la contraseña debe tener al menso 6 caracteres')
            return false;
        }
        return true;
    }

    function validatePasswordMatch(){
        const passwordValue= passwordInput.value.trim()
        const confirmPasswordValue= confirmPassowrdInput.value.trim()
        if(passwordValue!= confirmPassowrdValue)
        {
            showError(confirmPasswordError, 'las contraseñas no coinciden')
             return false;
        }
        return true;
    }

    function showError(errorElement, msg){
        errorElement.innerHTML =msg
        errorElement.style.display= 'block';
    }
    function cleanError(errorElement, msg){
        errorElement.innerHTML =''
        errorElement.style.display= 'none';
    }

})