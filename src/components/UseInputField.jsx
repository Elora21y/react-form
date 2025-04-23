import { useState } from "react"

const useInputField = (defaultValue) =>{
    const [fieldValue ,  setFieldValue] = useState(defaultValue);

    const handleOnChangeValue = (e) =>{
        setFieldValue(e.target.value)
    }
    return [fieldValue , handleOnChangeValue]
}

export default useInputField