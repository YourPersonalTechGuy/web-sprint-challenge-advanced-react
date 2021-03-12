// write your custom hook here to control your checkout form
import {useState} from "react"

const useForm = (iv) => {
    const [value, setValue] = useState(iv)

    const handleChanges = (e) => {
      setValue({ ...value, [e.target.name]: e.target.value });
    };
    
    return [value, handleChanges]
}

export default useForm;