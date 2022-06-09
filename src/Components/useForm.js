import {useState,useEffect} from 'react'
import validate from './ValidateForm'


const useForm = () => {
    const [values, setValues] = useState ({
        fullname: '',
        id: '',
        birthday: '',
        email: '',
        phone: '',
        password: ''    
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name] : value
        })
    }

    const handleSubmit = e => {
       e.preventDefault()
        setErrors(validate(values))
        setIsSubmitting(true)
    }
    useEffect(() => {
        console.log('error' ,errors)
        if(Object.keys(errors).length === 0 && isSubmitting) console.log(values)
    }, [errors])
    return {handleChange, values, handleSubmit, errors}
}

export default useForm;