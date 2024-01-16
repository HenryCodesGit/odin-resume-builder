/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

export default function Dialog(isModalOpen, setModalOpen, modalData, setModalData){
    const dialogRef = useRef(); //Reference to the dialog element (see below);

    //Function that opens or closes the modal depending on the status
    useEffect(()=>{
        if (isModalOpen) dialogRef.current?.showModal();
        else{
            dialogRef.current?.close();
            setModalData(null); //Clear the modal
        }
    },[isModalOpen, setModalData])

    //Close the Modal
    function closeModal() { setModalOpen(false); }

    return (
        <dialog ref={dialogRef} onCancel = {closeModal}>
            {(modalData) ? modalData : null}
            <button onClick={closeModal}>Close</button>
        </dialog>
    )

}

