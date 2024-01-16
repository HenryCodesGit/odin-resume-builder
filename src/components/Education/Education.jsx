import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import EducationForm from './EducationForm';

export default function Education(setModalOpen, setModalData){

    const [educationInfo, setEducationInfo] = useState([
        {school: '1', degree: '2', startDate: '3', endDate: '4', location: '5', key: uuidv4()},
        {school: 'a', degree: 'b', startDate: 'c', endDate: 'd', location: 'e', key: uuidv4()},
      ]);

    const stateList = educationInfo.map((education) => {
            return(
                <div key={education.key}>
                    <p>{education.school}</p>    
                    <p>{education.degree}</p>    
                    <p>{education.startDate}</p>    
                    <p>{education.endDate}</p>    
                    <p>{education.location}</p>    
                    <button data-key={education.key} onClick={()=>{deleteEducation(education.key)}}>Delete</button>
                    <button data-key={education.key} onClick={()=>{editEducation(education.key)}}>Edit</button>
                </div>
            )
    });

    function deleteEducation(key){ setEducationInfo(educationInfo.filter((item) => item.key !== key))}

    function editEducation(key){
        const item = educationInfo.find((entry) => entry.key === key)

        //Adding extra properties that the modal will need to process
        setModalData(EducationForm(educationInfo,setEducationInfo, uuidv4(),item.key,setModalOpen));
        setModalOpen(true);
    }

    function updateModal(modalForm, isModalOpen){
        setModalData(modalForm);
        setModalOpen(isModalOpen);
      }


    return(<>
        <button onClick={()=>updateModal(EducationForm(educationInfo,setEducationInfo, uuidv4(),null,setModalOpen),true)}>Add</button>
        {stateList}
    </>);
}