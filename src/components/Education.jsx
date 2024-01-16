import {v4 as uuidv4} from 'uuid'
import Section from './Base/Section';

export default function Education(setModalOpen, setModalData){

    const defaultEntries =[
        {school: '1', degree: '2', startDate: '3', endDate: '4', location: '5', key: uuidv4()},
        {school: 'a', degree: 'b', startDate: 'c', endDate: 'd', location: 'e', key: uuidv4()},
    ];

    const defaultFormEntries = [
        {label: 'School', name: 'school', inputType: ''},
        {label: 'Start Date', name: 'startDate', inputType: ''},
        {label: 'End Date', name: 'endDate', inputType: ''},
        {label: 'Location', name: 'location', inputType: ''},
    ];
    
    const entryMappingFunction = (entry) => {return(
      <>
        <p>{entry.school}</p>    
        <p>{entry.degree}</p>    
        <p>{entry.startDate}</p>     
        <p>{entry.endDate}</p>     
        <p>{entry.location}</p>     
    </>)};

    return(Section({defaultEntries,entryMappingFunction,defaultFormEntries},setModalOpen,setModalData));
}