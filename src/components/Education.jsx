import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';;

export default function Education({education}){
    const [currentState, setState] = useState(education);

    const stateList = currentState?.map((education) => {
        return(
            <div key={education.key}>
                <p>{education.school}</p>    
                <p>{education.degree}</p>    
                <p>{education.startDate}</p>    
                <p>{education.endDate}</p>    
                <p>{education.location}</p>    
                <button data-key={education.key} onClick={()=>{deleteEducation(education.key)}}>Delete</button>
            </div>
        )
    })

    function deleteEducation(key){ setState(currentState.filter((item) => item.key !== key))}
    
    function updateValues(education){ 
        setState([...currentState, education]);
    }

    return{
        updateValues,
        component: (<>{stateList}</>),
    };
}