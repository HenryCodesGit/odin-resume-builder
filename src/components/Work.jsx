import {v4 as uuidv4} from 'uuid'
import Section from './Base/Section';

export default function Work(setModalOpen, setModalData){

      const defaultEntries =[
        {employer: '1', position: '2', startDate: '3', endDate: '4', description: '5', key: uuidv4()},
        {employer: 'a', position: 'b', startDate: 'c', endDate: 'd', description: 'e', key: uuidv4()},
      ];

      const defaultFormEntries = [
        {label: 'Employer', name: 'employer', inputType: ''},
        {label: 'Start Date', name: 'startDate', inputType: ''},
        {label: 'End Date', name: 'endDate', inputType: ''},
        {label: 'Position', name: 'position', inputType: ''},
        {label: 'Job Description', name: 'description', inputType: ''},
    ];

    const entryMappingFunction = (entry) => {return(
        <>
          <p>{entry.employer}</p> 
          <p>{entry.position}</p>       
          <p>{entry.startDate}</p>     
          <p>{entry.endDate}</p>     
          <p>{entry.description}</p>     
      </>)};

    return(Section({defaultEntries,entryMappingFunction,defaultFormEntries},setModalOpen,setModalData));
}

