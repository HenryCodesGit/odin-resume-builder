/* eslint-disable react/prop-types */

/*
    Basically just a form but has option for callback when submitted.
    On submit, it takes the value of all its inputs and returns an object with the values
*/
export default function Form({
    children, 
    formID = "", 
    submitCallback = ()=>{}}){

    //When submit, pull all data from children and feeds it to the callback
    function submitHandler(event){
        event.preventDefault();

        const inputs = Array.from(event.target);
        const output = inputs.reduce((output, currentInput) => {return {...output, [currentInput.name]: currentInput.value}},{});

        console.log('Submitted form. Sending the following data to the callback:')
        console.log(output);
        submitCallback(output);
    }

    return(
        <>
            <form id={formID} onSubmit={submitHandler} method="GET">
                {children}
            </form>     
        </> 
    );
}