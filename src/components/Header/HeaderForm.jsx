import Form from "../Form";
import Input from "../Input";

export default function HeaderForm(defaults, setHeaderInfo, key,setModalOpen){

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