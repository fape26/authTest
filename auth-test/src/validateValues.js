export default function validateValues(values, isFormSignUp = false) {
    let errors = {}
    errors.is = false;
    if(!values.login.trim()) {
        errors.login = "Username required";
        errors.is = true;
    } else if (values.login.length < 4) {
        errors.login = "Username should be 4 characters or more";
        errors.is = true;
    }

   
    if(isFormSignUp) {
         //email
        if(!values.email) {
            errors.email = "Email required";
            errors.is = true;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Please, enter valid email";
            errors.is = true;
        }
    
        //passwords confirm
        if(!values.password2) {
            errors.password2 = "Password is required";
            errors.is = true;
        } else if (values.password2 !== values.password) {
            errors.password2 = "Passwords do not match";
            errors.is = true;
        }
    }
    

    //passwords
    if(!values.password) {
        errors.password = "Password is required";
        errors.is = true;
    } else if (values.password.length < 6) {
        errors.password = "Password should be 6 characters or more";
        errors.is = true;
    }

    return errors;
}