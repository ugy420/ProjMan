import Button from "./Button.jsx";
import Input from "./Input.jsx";

export default function Form({onCancelForm}){
    return (
        <div className="w-[40rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <Button value="Cancel" className="px-4 py-2 rounded-md hover:bg-gray-200" onClick={onCancelForm}/> <Button value="Save" className="bg-stone-950 px-4 py-2 rounded-md text-white"/>
            </menu>
            <div className="flex flex-col">
                <Input label="Title"/>
                <Input label="Description" textArea/>
                <label>Due Date</label>
                <input type="date" className="bg-stone-200 border-b-2 focus:outline-none focus:border-b-black border-stone-300" />
            </div>
        </div>
    );
};

