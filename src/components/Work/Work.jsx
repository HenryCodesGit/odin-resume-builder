import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import WorkForm from './WorkForm';

export default function Work(setModalOpen, setModalData){

    const [workInfo, setWorkInfo] = useState([
        {employer: '1', position: '2', startDate: '3', endDate: '4', description: '5', key: uuidv4()},
        {employer: 'a', position: 'b', startDate: 'c', endDate: 'd', description: 'e', key: uuidv4()},
      ]);

    const stateList = workInfo.map((work) => {
            return(
                <div key={work.key}>
                    <p>{work.employer}</p>    
                    <p>{work.position}</p>    
                    <p>{work.startDate}</p>    
                    <p>{work.endDate}</p>    
                    <p>{work.description}</p>    
                    <button data-key={work.key} onClick={()=>{deletework(work.key)}}>Delete</button>
                    <button data-key={work.key} onClick={()=>{editwork(work.key)}}>Edit</button>
                </div>
            )
    });

    function deletework(key){ setWorkInfo(workInfo.filter((item) => item.key !== key))}

    function editwork(key){
        const item = workInfo.find((entry) => entry.key === key)

        //Adding extra properties that the modal will need to process
        setModalData(WorkForm(workInfo,setWorkInfo, uuidv4(),item.key,setModalOpen));
        setModalOpen(true);
    }

    function updateModal(modalForm, isModalOpen){
        setModalData(modalForm);
        setModalOpen(isModalOpen);
      }


    return(<>
        <button onClick={()=>updateModal(WorkForm(workInfo,setWorkInfo, uuidv4(),null,setModalOpen),true)}>Add</button>
        {stateList}
    </>);
}