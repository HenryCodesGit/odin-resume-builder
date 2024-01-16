import {v4 as uuidv4} from 'uuid'
import Form from '../Form';
import Input from '../Input';

export default function QualificationForm(qualificationInfo, setQualificationInfo, key, editID = null, setModalOpen){

    const formValues = (editID) ? qualificationInfo.find((child) => child.key === editID).qualification : '';

    function convertData(data){
        const output = {...data};
        Object.assign(output, {key: uuidv4()});
        setQualificationInfo([...qualificationInfo, output]);
        setModalOpen(false);
    }

    function editData(data){
        const copyInfo = [...qualificationInfo]
        const output = copyInfo.map((child) => (child.key === editID) ? {...child, qualification: data.qualification} : child);
        setQualificationInfo(output);
        setModalOpen(false);
    }

    console.log(formValues);
    return (<Form
        formID = {key} 
        submitCallback={(!editID) ? convertData : editData}>
        <Input label = "qualification" name = "qualification" value={formValues} formID={key}/>
        <button type="submit" form={key} name="submit">Submit</button>
      </Form>);
}

