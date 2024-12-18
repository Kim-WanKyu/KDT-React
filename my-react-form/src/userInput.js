import { useState } from "react";

function UserInput (defaultValue, validationFn) {
    const [value, setValue] = useState(defaultValue);
    const valueIsValid = validationFn(value);

    function handleInputChange(event) {
        setValue(event.target.value);
    }

    return {
        value,
        handleInputChange,
        hasError: !valueIsValid
    }
}

export default UserInput;
