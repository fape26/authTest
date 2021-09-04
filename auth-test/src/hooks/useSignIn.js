import { useState } from "react";

const useSignIn = (validateValues) => {
    const [values, setValues] = useState({
        login: '',
        password: '',
    })
    const [errors, setErrors] = useState({})
    const [isSubmitted, setIsSubmited] = useState(false)

    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validateValues(values));
        if(validateValues(values).is === false) {
            request();
        }
    }

    const request = () => {
        let body = JSON.stringify({...values});
        
        const response = fetch('http://ec2-18-117-84-227.us-east-2.compute.amazonaws.com/login', {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response.then(response => {
            if (response.status != 204) {
                throw response.status;
            } else if (response.status == 204) {
                setIsSubmited(true)
                return response.status
            }
        })
    }

    return {handleChange, values, handleSubmit, errors, isSubmitted}
}

export default useSignIn;