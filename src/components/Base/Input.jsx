/* eslint-disable react/prop-types */
import { useState } from 'react';

/*
    Basically just a text input box but has option for callback when changing its value
*/
export default function Input({
    formID = "",
    label = "", 
    name = "",
    inputType = "text", 
    value = ""}
){
    console.log(value)

    const [currValue, setValueTo] = useState(value);

    const onChangeHandler = (val) => {
        setValueTo(val);
    }

   

    return (<>
            {(label !== null) ? <label name={name}>
                {label}
                <input  form={formID} name={name} type={inputType} value={currValue} onChange={(event)=>onChangeHandler(event.target.value)}/>
            </label>: null }
        </>);
}