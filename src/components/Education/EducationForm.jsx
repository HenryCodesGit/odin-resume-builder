import Form from "../Form";
import Input from "../Input";
import {v4 as uuidv4} from 'uuid'

export default function EducationForm(educationInfo, setEducationInfo, key, editID = null, setModalOpen){
    
    const formValues = (editID) ? educationInfo.find((child) => child.key === editID) : {};

    function convertData(data){
        const output = {...data};
        Object.assign(output, {key: uuidv4()});
        setEducationInfo([...educationInfo,output]);
        setModalOpen(false);
    }

    
    function editData(data){
        const copyInfo = [...educationInfo]
        const output = copyInfo.map((child) => {
            if(child.key !== editID) return child;

            const output = {
                ...child,
                school: data.school,
                degree: data.degree,
                startDate: data.startDate,
                endDate: data.endDate,
                location: data.location
            }
            return output;
        });
        setEducationInfo(output);
        setModalOpen(false);
    }

    return (
    <Form formID = {key} submitCallback={(!editID) ? convertData : editData}>
        <Input label = "School" name = "school" formID={key} value={formValues.school}/>
        <Input label = "Degree" name = "degree" formID={key} value={formValues.degree}/>
        <Input label = "Start Date" name = "startDate" formID={key} value={formValues.startDate}/>
        <Input label = "End Date" name = "endDate" formID={key} value={formValues.endDate}/>
        <Input label = "Location" name = "location" formID={key} value={formValues.location}/>
        <button type="submit" form={key} name="submit">Submit</button>
    </Form>);
}