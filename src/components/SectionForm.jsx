/* eslint-disable react/prop-types */
import Form from "./Form";
import Input from "./Input";
import {v4 as uuidv4} from 'uuid'

export default function SectionForm(defaultFormEntries, entryInfo, setEntryInfo, key, editID = null, setFormShow){
    
        /* 'defaultFormEntries' should be an array with objects inside of it
        /* 'defaultFormEntries'  should have same number of 'name' property as the 'name' property in entryInfo
        For example: 
            [   {label: 'School', name: 'school', inputType: ''},
                {label: 'Degree', name: 'degree', inputType: ''},
                {label: 'Start Date', name: 'startDate', inputType: ''},
                {label: 'End Date', name: 'endDate', inputType: ''},
                {label: 'Location', name: 'location', inputType: ''},]
    */
    
    const formValues = (editID) ? entryInfo.find((child) => child.key === editID) : {};

    const inputList = defaultFormEntries.map((entry) => {
        return <Input 
            key = {uuidv4()}
            label = {entry.label}
            name = {entry.name}
            inputType = {(entry.inputType) ? entry.inputType : null}
            formID = {key} value = {formValues[entry.name]} 
        />
    });

    function convertData(data){
        const output = {...data};
        Object.assign(output, {key: uuidv4()});
        setEntryInfo([...entryInfo,output]);
        setFormShow(false);
    }

    
    function editData(data){
        const copyInfo = [...entryInfo]
        const output = copyInfo.map((child) => {
            if(child.key !== editID) return child;
            
            const output = {...data, key: child.key}
            return output;
        });
        setEntryInfo(output);
        setFormShow(false);
    }

    return (
    <Form formID = {key} submitCallback={(!editID) ? convertData : editData}>
        {inputList}
        <button type="submit" form={key} name="submit">Submit</button>
    </Form>);
}