import {useState} from 'react';
export default function Header({name,address,email,phone} = {name: '', address: '', email: '',phone: ''}){
    
    const [currentState, setState] = useState({
        name: name,
        address: address,
        email: email,
        phone: phone,
    })

    function updateValues({name,address,email,phone}){
        let newObj = {...currentState};
        Object.assign(newObj, {name,address,email,phone})
        setState(newObj);
    }

    return{
        updateValues,
        component: (<div className="header">
                <h1 className="name">{currentState.name}</h1>
                <p className="address">{currentState.address}</p>
                <p className="email">{currentState.email}</p>
                <p className="phone">{currentState.phone}</p>
        </div>),
    };
}