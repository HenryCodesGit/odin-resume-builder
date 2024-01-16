import { useState } from 'react';

import {v4 as uuidv4} from 'uuid'
import QualificationForm from './QualificationForm';

export default function Qualifications(setModalOpen, setModalData){

    const [qualificationInfo, setQualificationInfo] = useState([
        {qualification: 'Skill 1', key: uuidv4()},
        {qualification: 'Skill 2', key: uuidv4()},
      ]);

    const stateList = qualificationInfo.map((qualification) => {
        return(
            <div key={qualification.key}>
                <p>{qualification.qualification}</p>    
                <button data-key={qualification.key} onClick={()=>{deleteQualification(qualification.key)}}>Delete</button>
                <button data-key={qualification.key} onClick={()=>{editQualification(qualification.key)}}>Edit</button>
            </div>
        );
    })

    function deleteQualification(key){ setQualificationInfo(qualificationInfo.filter((item) => item.key !== key))}

    function editQualification(key){
        const item = qualificationInfo.find((entry) => entry.key === key)

        //Adding extra properties that the modal will need to process
        setModalData(QualificationForm(qualificationInfo,setQualificationInfo, uuidv4(),item.key,setModalOpen));
        setModalOpen(true);
    } 

    function updateModal(modalForm, isModalOpen){
        setModalData(modalForm);
        setModalOpen(isModalOpen);
      }

    return(<>
        <button onClick={()=>updateModal(QualificationForm(qualificationInfo,setQualificationInfo, uuidv4(),null,setModalOpen),true)}>Add</button>
        {stateList}
    </>);
}


/*



*/