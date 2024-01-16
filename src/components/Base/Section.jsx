/* eslint-disable react/prop-types */
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import SectionForm from './SectionForm';

export default function Section({defaultEntries, entryMappingFunction, defaultFormEntries}, setFormShow, showFormComponent){

    /* Default entries should be an array with objects inside of it
        For example: 
            [{school: '1', degree: '2', startDate: '3', endDate: '4', location: '5', key: uuidv4()},
            {school: 'a', degree: 'b', startDate: 'c', endDate: 'd', location: 'e', key: uuidv4()},]
    */
    /* entryMapping Function should take each entry in the defaultEntries and map it to an equivalent React component
        For example:
            function mapping(education){
                    return(
                        <>
                            <p>{education.school}</p>    
                            <p>{education.degree}</p>    
                            <p>{education.startDate}</p>    
                            <p>{education.endDate}</p>    
                            <p>{education.location}</p>    
                        </>
                    )
            }
    */

    const [entryInfo, setEntryInfo] = useState(defaultEntries);

    const stateList = entryInfo.map((entry) => {
        return (
            <div key={entry.key}>
                {entryMappingFunction(entry)}
                <button data-key={entry.key} onClick={()=>{deleteEntry(entry.key)}}>Delete</button>
                <button data-key={entry.key} onClick={()=>{editEntry(entry.key)}}>Edit</button>
            </div>
        );
    });

    function deleteEntry(key){ setEntryInfo(entryInfo.filter((item) => item.key !== key))}

    function editEntry(key){
        const item = entryInfo.find((entry) => entry.key === key)

        //Call the sectionform showing function
        showFormComponent(SectionForm(defaultFormEntries, entryInfo,setEntryInfo, uuidv4(),item.key,setFormShow));
        setFormShow(true);
    }

    function showForm(){
        showFormComponent(SectionForm(defaultFormEntries, entryInfo,setEntryInfo, uuidv4(),null,setFormShow));
        setFormShow(true);
      }

    return{
        main: <>{stateList}</>,
        formButton: <button onClick={showForm}>Add</button>
    };
}