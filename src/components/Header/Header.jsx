  import {useState} from "react";
  import HeaderForm from "./HeaderForm";
  import {v4 as uuidv4} from 'uuid'

  export default function Header(setModalOpen, setModalData){
    /* Header section and the relevant form */ 
    const [headerInfo, setHeaderInfo] = useState({
      name: 'Alex Smith', 
      address: '1234 FakeAddress Lane, Fakecity, Fakensas, United States of Fake, 12345', 
      email: 'AlexSmith@fakemail.com', 
      phone: '(123) 456-7890',
    });
    
    function editHeader(){
      //Adding extra properties that the modal will need to process
      setModalData(HeaderForm(headerInfo,setHeaderInfo, uuidv4(),setModalOpen));
      setModalOpen(true);
  } 

    return(
    <div className="header">
      <h1 className="name">{headerInfo.name}</h1>
      <button onClick={editHeader}>Edit</button>
      <p className="address">{headerInfo.address}</p>
      <p className="email">{headerInfo.email}</p>
      <p className="phone">{headerInfo.phone}</p>
    </div>
    );
  }