import {useState} from 'react';

export default function Qualifications({qualifications} = {qualifications: '', key: ''}){
    const [currentState, setState] = useState(qualifications);

    const stateList = currentState.map((qualification) => {
        return(
            <div key={qualification.key}>
                <p>{qualification.qualification}</p>    
                <button data-key={qualification.key} onClick={()=>{deleteQualification(qualification.key)}}>Delete</button>
            </div>
        )
    })

    function deleteQualification(key){ setState(currentState.filter((item) => item.key !== key))}
    
    function updateValues(qualification){ 
        setState([...currentState, qualification]);
    }

    return{
        updateValues,
        component: (<>{stateList}</>),
    };
}


/*



*/