  import {useState} from "react";
  import {v4 as uuidv4} from 'uuid'
  import Form from "./Base/Form";
  import Input from "./Base/Input";
  
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

    return{
      main: (
        <div className="header">
          <h1 className="name">{headerInfo.name}</h1>
          <p className="address">{headerInfo.address}</p>
          <p className="email">{headerInfo.email}</p>
          <p className="phone">{headerInfo.phone}</p>
        </div>
        ),
      formButton: (<button onClick={editHeader}>Edit</button>),
    };
  }

  function HeaderForm(defaults, setHeaderInfo, key,setModalOpen){

    function submitData(data){
        setHeaderInfo(data);
        setModalOpen(false);
    }

    return (<Form formID = {key} submitCallback={submitData}>
        <Input label = "Name" name = "name" formID={key} value={defaults.name}/>
        <Input label = "Address" name = "address" formID={key} value={defaults.address}/>
        <Input inputType = "email" label = "E-mail" name = "email" formID={key} value={defaults.email}/>
        <Input inputType = "tel" label = "Phone Number" name = "phone" formID={key}  value={defaults.phone}/>
        <button type="submit" form={key} name="submit">Submit</button>
    </Form>);
}