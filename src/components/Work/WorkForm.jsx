import Form from "../Form";
import Input from "../Input";
import {v4 as uuidv4} from 'uuid'

export default function WorkForm(workInfo, setWorkInfo, key, editID = null, setModalOpen){
    
    const formValues = (editID) ? workInfo.find((child) => child.key === editID) : {};

    function convertData(data){
        const output = {...data};
        Object.assign(output, {key: uuidv4()});
        setWorkInfo([...workInfo,output]);
        setModalOpen(false);
    }

    
    function editData(data){
        const copyInfo = [...workInfo]
        const output = copyInfo.map((child) => {
            if(child.key !== editID) return child;

            const output = {
                ...child,
                employer: data.employer,
                position: data.position,
                startDate: data.startDate,
                endDate: data.endDate,
                description: data.description
            }
            return output;
        });
        setWorkInfo(output);
        setModalOpen(false);
    }

    return (
    <Form formID = {key} submitCallback={(!editID) ? convertData : editData}>
        <Input label = "Employer" name = "employer" formID={key} value={formValues.employer}/>
        <Input label = "Position" name = "position" formID={key} value={formValues.position}/>
        <Input label = "Start Date" name = "startDate" formID={key} value={formValues.startDate}/>
        <Input label = "End Date" name = "endDate" formID={key} value={formValues.endDate}/>
        <Input label = "Job Description" name = "description" formID={key} value={formValues.description}/>
        <button type="submit" form={key} name="submit">Submit</button>
    </Form>);
}