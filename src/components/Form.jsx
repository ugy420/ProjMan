import Button from "./Button.jsx";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
import { useRef } from 'react';

export default function Form({onCancelForm, onAdd}){
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const date = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDate = date.current.value;

        if(enteredTitle.trim() === "" ||
            enteredDescription.trim() === "" ||
            enteredDate.trim() === ""
        ){
            modal.current.open();
            return;
        }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            date: enteredDate
        })
    }

    return (
        <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-500 mb-4">Opps ... looks like you forgot to enter a value.</p>
            <p className="text-stone-500 mb-4">Please make sure you provide a valid value for every input field.</p>
        </Modal>
        <div className="w-[40rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <Button value="Cancel" className="px-4 py-2 rounded-md hover:bg-gray-200" onClick={onCancelForm}/> 
                <Button value="Save" className="bg-stone-950 px-4 py-2 rounded-md text-white" onClick={handleSave}/>
            </menu>
            <div className="flex flex-col">
                <Input label="Title" ref={title}/>
                <Input label="Description" textArea  ref={description}/>
                <label>Due Date</label>
                <input ref={date} type="date" className="bg-stone-200 border-b-2 focus:outline-none focus:border-b-black border-stone-300" />
            </div>
        </div>
        </>
    );
};

