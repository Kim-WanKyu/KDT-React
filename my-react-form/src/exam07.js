
import React, { useEffect, useState } from "react";

function Login() {
    const [formFields, setFormFields] = useState([{name: "", value: ""}]);

    // 추가.
    const HandleAddFields = () => {
        const values = [...formFields, {name: "", value: ""}];
        setFormFields(values);
    };

    // 삭제.
    const HandleRemoveFields = (index) => {
        if (formFields.length === 1) {
            alert("At least one form must remain");
            return;
        }
        const removedFormFields = [...formFields]; // 복사.
        removedFormFields.splice(index, 1); // 삭제. splice() : 원본의 값이 삭제되고, 리턴값은 삭제된 값임.
        setFormFields(removedFormFields);
    };

    // 입력.
    const HandleInputChange = (index, e) => {
        const values = [...formFields];
        if (e.target.name === "name") {
            values[index].name = e.target.value;
        } else {
            values[index].value = e.target.value;
        }
        setFormFields(values);
    };

    // submit.
    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(formFields);
    };

    useEffect(() => {
        console.log("formFields changed:", formFields);
    }, [formFields]);

    return (
        <form onSubmit={HandleSubmit} style={{padding: '2%'}}>
            {formFields.map((field, index) => (
                <div key={index} style={{marginBottom: 5}}>
                    <input
                        type="text"
                        placeholder="field name"
                        name="name"
                        value={field.name}
                        onChange={(e) => HandleInputChange(index, e) }
                        style={{marginRight: 10}}
                    />
                    <input
                        type="text"
                        placeholder="field value"
                        name="value"
                        value={field.value}
                        onChange={(e) => HandleInputChange(index, e) }
                        style={{marginRight: 10}}
                    />
                    <button type="button" onClick={() => HandleRemoveFields(index)}>Remove</button>
                </div>
            ))}
            
            <button type="button" onClick={() => HandleAddFields()}
                style={{marginTop: 10, marginRight: 10}}>Add Field</button>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;
