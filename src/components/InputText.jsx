/* eslint-disable react/prop-types */
import { useState } from 'react';

/*
    Basically just a text input box but has option for callback when changing its value
*/
export default function InputText({
    formID = "",
    label = "", 
    name = "",
    inputType = "text", 
    value = "",
    onChangeCallback = ()=>{}}){

    const [currValue, setValueTo] = useState(value);

    const onChangeHandler = (val) => {
        setValueTo(val);
        onChangeCallback(val)
    }

    return(<>
        {(label !== null) ? <label name={name}>
            {label}
            <input  form={formID} name={name} type={inputType} value={currValue} onChange={(event)=>onChangeHandler(event.target.value)}/>
        </label>: null }
    </>);
}